import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Input validation
const validateInput = (data: any) => {
  if (!data.name || typeof data.name !== 'string' || data.name.length < 2) {
    throw new Error('Please provide a valid name');
  }
  if (!data.email || !emailRegex.test(data.email)) {
    throw new Error('Please provide a valid email address');
  }
  if (!data.message || typeof data.message !== 'string' || data.message.length < 10) {
    throw new Error('Please provide a message (minimum 10 characters)');
  }
  if (!data.division || typeof data.division !== 'string') {
    throw new Error('Please select a division');
  }
};

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate input
    validateInput(data);

    // Prepare email content
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission - ${data.division}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Division: ${data.division}

Message:
${data.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Division:</strong> ${data.division}</p>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
<h3>Message:</h3>
<p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to the user
    const autoReplyOptions = {
      from: process.env.SMTP_FROM,
      to: data.email,
      subject: 'Thank you for contacting Think Industries',
      text: `
Dear ${data.name},

Thank you for reaching out to Think Industries. We have received your message and will get back to you shortly.

Best regards,
Think Industries Team
      `,
      html: `
<h2>Thank you for contacting Think Industries</h2>
<p>Dear ${data.name},</p>
<p>Thank you for reaching out to Think Industries. We have received your message and will get back to you shortly.</p>
<p>Best regards,<br>Think Industries Team</p>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Something went wrong' },
      { status: 400 }
    );
  }
} 