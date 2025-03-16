'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Privacy() {
  return (
    <div className="bg-white dark:bg-[#17171C]">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-white dark:from-amber-900/10 dark:via-amber-900/5 dark:to-[#17171C] blur-[2px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Last updated: {new Date().toLocaleDateString()}
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="prose prose-amber dark:prose-invert max-w-none"
        >
          <motion.section variants={fadeInUp}>
            <h2>1. Introduction</h2>
            <p>
              At Think Industries, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2>2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Company information</li>
              <li>Messages and communications</li>
            </ul>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Respond to your inquiries</li>
              <li>Provide our services</li>
              <li>Improve our website and services</li>
              <li>Communicate with you about our services</li>
            </ul>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2>4. Information Sharing</h2>
            <p>
              We do not sell or share your personal information with third parties except as described in this policy or with your consent.
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: laurinhofer34@icloud.com
            </p>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 