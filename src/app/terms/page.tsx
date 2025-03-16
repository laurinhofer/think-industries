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

export default function Terms() {
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
              Terms of Service
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
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2>2. Services Description</h2>
            <p>
              Think Industries provides services in software development, electronics, hardware, engineering, and research. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2>3. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of Think Industries and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2>4. User Responsibilities</h2>
            <p>
              Users are responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of their account information</li>
              <li>All activities that occur under their account</li>
              <li>Ensuring their use of our services complies with applicable laws</li>
            </ul>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2>5. Limitation of Liability</h2>
            <p>
              Think Industries shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2>6. Contact Information</h2>
            <p>
              For any questions about these Terms of Service, please contact us at:
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