'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
  division: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    division: 'general',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        division: 'general',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#17171C]">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-[#17171C] blur-[1px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-300"
            >
              Have a project in mind? Get in touch with us to discuss how we can help bring your ideas to life.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Contact form section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div variants={fadeInUp}>
              <label htmlFor="division" className="block text-sm font-medium leading-6 text-amber-400">
                Division
              </label>
              <select
                id="division"
                name="division"
                value={formData.division}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 bg-[#1F1F28] py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-amber-600/10 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              >
                <option value="general">General Inquiry</option>
                <option value="software">Think Software</option>
                <option value="electronics">Think Electronics</option>
                <option value="hardware">Think Hardware</option>
                <option value="engineering">Think Engineering</option>
                <option value="labs">Think Labs</option>
              </select>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-amber-400">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md border-0 bg-[#1F1F28] py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-amber-600/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-amber-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md border-0 bg-[#1F1F28] py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-amber-600/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="company" className="block text-sm font-medium leading-6 text-amber-400">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 bg-[#1F1F28] py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-amber-600/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-amber-400">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md border-0 bg-[#1F1F28] py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-amber-600/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="group relative w-full rounded-full px-6 py-3 text-sm font-semibold text-amber-400 disabled:opacity-50"
              >
                <div className="absolute inset-0 rounded-full bg-amber-600/10 group-hover:bg-amber-600/20 transition-all duration-500" />
                <div className="absolute -inset-0.5 rounded-full bg-amber-600/20 blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <span className="relative">
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </motion.div>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-md bg-green-500/10 p-4"
              >
                <p className="text-sm text-green-400">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-md bg-red-500/10 p-4"
              >
                <p className="text-sm text-red-400">
                  {errorMessage}
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
} 