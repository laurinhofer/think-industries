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
    division: '',
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
        division: '',
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
    <div className="bg-white dark:bg-[#17171C]">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-white dark:from-amber-900/10 dark:via-amber-900/5 dark:to-[#17171C] blur-[2px]" />
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
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Have a project in mind? Get in touch with us to discuss how we can help bring your ideas to life. 
              <br />
              <br />
              laurinhofer34@icloud.com
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Contact form section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="block w-full rounded-md border-0 bg-gray-50 dark:bg-[#1F1F28] py-2 px-3.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-amber-600/10 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-amber-500 dark:focus:ring-amber-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full rounded-md border-0 bg-gray-50 dark:bg-[#1F1F28] py-2 px-3.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-amber-600/10 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-amber-500 dark:focus:ring-amber-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Company
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="block w-full rounded-md border-0 bg-gray-50 dark:bg-[#1F1F28] py-2 px-3.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-amber-600/10 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-amber-500 dark:focus:ring-amber-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="division" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Division
              </label>
              <div className="mt-2">
                <select
                  id="division"
                  name="division"
                  required
                  value={formData.division}
                  onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                  className="block w-full rounded-md border-0 bg-gray-50 dark:bg-[#1F1F28] py-2 px-3.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-amber-600/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 dark:focus:ring-amber-400 sm:text-sm sm:leading-6"
                >
                  <option value="">Select a division</option>
                  <option value="software">Think Software</option>
                  <option value="electronics">Think Electronics</option>
                  <option value="hardware">Think Hardware</option>
                  <option value="engineering">Think Engineering</option>
                  <option value="labs">Think Labs</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="block w-full rounded-md border-0 bg-gray-50 dark:bg-[#1F1F28] py-2 px-3.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-amber-600/10 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-amber-500 dark:focus:ring-amber-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full rounded-md bg-amber-500/10 dark:bg-amber-600/10 px-3.5 py-2.5 text-center text-sm font-semibold text-amber-500 dark:text-amber-400 shadow-sm hover:bg-amber-500/20 dark:hover:bg-amber-600/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 dark:focus-visible:outline-amber-400 transition-all duration-300"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 