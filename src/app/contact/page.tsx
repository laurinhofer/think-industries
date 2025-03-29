'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0A0A0C]">
      {/* Main background gradient that extends to the top */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/30 via-amber-500/20 to-white/0 dark:from-amber-900/30 dark:via-amber-900/20 dark:to-[#0A0A0C]/0 blur-2xl" />
      </div>

      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 via-amber-500/10 to-white/0 dark:from-amber-900/20 dark:via-amber-900/10 dark:to-[#0A0A0C]/0 blur-2xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Get in touch with us to discuss how we can help bring your ideas to life.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Contact card section */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-2 rounded-3xl bg-amber-500/10 dark:bg-amber-600/10 opacity-0 blur-xl group-hover:opacity-100 transition-all duration-700" />
            <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-[#121214] p-8 flex flex-col md:flex-row gap-8 items-center border border-gray-200 dark:border-amber-600/10 group-hover:border-amber-500/20 dark:group-hover:border-amber-600/20 shadow-lg group-hover:shadow-xl backdrop-blur-sm transition-all duration-700">
              <div className="relative h-64 w-64 overflow-hidden rounded-full flex-shrink-0">
                <Image
                  src="/team/ceo.jpg"
                  alt="Laurin Hofer"
                  fill
                  className="profile-image"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-700">
                  Laurin Hofer
                </h3>
                <p className="text-lg leading-7 text-amber-500 dark:text-amber-400">Founder & CEO</p>
                <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  I founded Think Industries to revolutionize the tech industry by integrating software, electronics, and hardware into seamless, cutting-edge solutions. My goal is to push innovation forward and shape the future of technology.
                </p>
                <div className="mt-6">
                  <a
                    href="mailto:laurinhofer34@icloud.com"
                    className="inline-flex items-center text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors duration-300"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    laurinhofer34@icloud.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 