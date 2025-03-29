'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    name: 'Circuit Design',
    description: 'Custom circuit design and PCB layout for innovative electronics.',
    icon: '⚡',
  },
  {
    name: 'Embedded Systems',
    description: 'Smart embedded solutions with advanced microcontroller integration.',
    icon: '🔌',
  },
  {
    name: 'IoT Solutions',
    description: 'Connected device ecosystems and IoT platform development.',
    icon: '📡',
  },
  {
    name: 'Power Electronics',
    description: 'Efficient power systems and energy management solutions.',
    icon: '🔋',
  },
  {
    name: 'Signal Processing',
    description: 'Advanced signal processing and data acquisition systems.',
    icon: '📊',
  },
  {
    name: 'Testing & Validation',
    description: 'Comprehensive testing and certification of electronic systems.',
    icon: '🔍',
  },
];

const technologies = [
  'Altium Designer', 'KiCad', 'Arduino',
  'Raspberry Pi', 'ARM', 'FPGA',
  'STM32', 'ESP32', 'LoRaWAN',
  'Bluetooth LE', 'ZigBee', 'MQTT',
];

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

const slideUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1]
  }
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: { y: [-5, 5, -5] },
  transition: { 
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function Electronics() {
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

        <div className="mx-auto max-w-[84rem] px-6 py-32 sm:py-40 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <motion.h1 
              variants={slideUp}
              className="relative text-5xl font-bold tracking-tight bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 bg-clip-text text-transparent sm:text-7xl"
            >
              Think Electronics
            </motion.h1>
            <motion.p 
              variants={slideUp}
              className="mt-8 text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-2xl"
            >
              Creating innovative electronic solutions that power the future of technology and connectivity.
            </motion.p>
            <motion.div 
              variants={slideUp}
              className="mt-12 flex items-center gap-x-8"
            >
              <Link
                href="/contact"
                className="group relative rounded-2xl px-8 py-4 text-base font-semibold text-gray-900 dark:text-white"
              >
                <div className="absolute inset-0 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/5 shadow-lg group-hover:shadow-xl transition-all duration-300" />
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-700/20 dark:from-amber-400/20 dark:to-amber-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="relative z-10 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">Start your project</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services section */}
      <div className="mx-auto max-w-[84rem] px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <motion.h2 
            variants={slideUp}
            className="text-base font-semibold leading-7 text-amber-500 dark:text-amber-400"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={slideUp}
            className="mt-2 text-4xl font-bold tracking-tight bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 bg-clip-text text-transparent sm:text-5xl"
          >
            Electronic Solutions
          </motion.p>
          <motion.p 
            variants={slideUp}
            className="mt-8 text-xl leading-8 text-gray-600 dark:text-gray-300"
          >
            We design and develop cutting-edge electronic systems for diverse applications and industries.
          </motion.p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-[84rem] sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.2 
                }}
                className="group relative h-full"
              >
                <div className="absolute -inset-2 rounded-3xl bg-amber-500/10 dark:bg-amber-600/10 opacity-0 blur-xl group-hover:opacity-100 transition-all duration-700" />
                <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-[#121214] p-6 h-full border border-gray-200 dark:border-amber-600/10 shadow-lg group-hover:shadow-xl backdrop-blur-sm transition-all duration-700">
                  <dt className="flex flex-col gap-4 text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 dark:bg-amber-600/10 text-2xl group-hover:bg-amber-500/20 dark:group-hover:bg-amber-600/20 transition-all duration-700">
                      {service.icon}
                    </span>
                    <span className="group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-700">{service.name}</span>
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p>{service.description}</p>
                  </dd>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Technologies section */}
      <div className="mx-auto max-w-[84rem] px-6 py-32 sm:py-40 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <motion.h2 
            variants={slideUp}
            className="text-4xl font-bold tracking-tight bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 bg-clip-text text-transparent sm:text-5xl"
          >
            Technologies
          </motion.h2>
          <motion.p 
            variants={slideUp}
            className="mt-8 text-xl leading-8 text-gray-600 dark:text-gray-300"
          >
            We utilize industry-leading tools and platforms for electronic design and development.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto mt-16 max-w-[84rem]"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.2 
                }}
                className="group relative"
              >
                <div className="absolute -inset-1 rounded-xl bg-amber-500/10 dark:bg-amber-600/10 opacity-0 blur-lg group-hover:opacity-100 transition-all duration-700" />
                <div className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-[#121214] px-6 py-4 text-base font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-amber-600/10 group-hover:border-amber-500/20 dark:group-hover:border-amber-600/20 backdrop-blur-sm transition-all duration-700">
                  <span className="relative group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-700">{tech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-[84rem] px-6 py-32 sm:py-40 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative mx-auto max-w-2xl text-center"
        >
          <motion.h2 
            variants={slideUp}
            className="relative text-4xl font-bold tracking-tight bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 bg-clip-text text-transparent sm:text-5xl"
          >
            Ready to innovate with electronics?
          </motion.h2>
          <motion.p 
            variants={slideUp}
            className="relative mx-auto mt-8 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300"
          >
            Let's create cutting-edge electronic solutions that bring your ideas to life.
          </motion.p>
          <motion.div 
            variants={slideUp}
            className="relative mt-12 flex items-center justify-center gap-x-8"
          >
            <Link
              href="/contact"
              className="group relative rounded-2xl px-8 py-4 text-base font-semibold text-gray-900 dark:text-white"
            >
              <div className="absolute inset-0 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/5 shadow-lg group-hover:shadow-xl transition-all duration-300" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-700/20 dark:from-amber-400/20 dark:to-amber-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <span className="relative z-10 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">Get started</span>
            </Link>
            <Link
              href="/about"
              className="group relative rounded-2xl px-8 py-4 text-base font-semibold text-gray-900 dark:text-white"
            >
              <div className="absolute inset-0 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/5 shadow-lg group-hover:shadow-xl transition-all duration-300" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-700/20 dark:from-amber-400/20 dark:to-amber-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <span className="relative z-10 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">Learn more</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 