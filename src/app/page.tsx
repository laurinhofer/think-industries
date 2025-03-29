'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const divisions = [
  {
    name: 'Think Software',
    description: 'Innovative software solutions from web applications to AI systems.',
    href: '/software',
    icon: '💻',
  },
  {
    name: 'Think Electronics',
    description: 'Cutting-edge electronic design and development services.',
    href: '/electronics',
    icon: '🔌',
  },
  {
    name: 'Think Hardware',
    description: 'Advanced hardware solutions and manufacturing expertise.',
    href: '/hardware',
    icon: '🛠️',
  },
  {
    name: 'Think Engineering',
    description: 'Comprehensive engineering services across multiple domains.',
    href: '/engineering',
    icon: '⚙️',
  },
  {
    name: 'Think Labs',
    description: 'Research and development in emerging technologies.',
    href: '/labs',
    icon: '🔬',
  },
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

export default function Home() {
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

        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div variants={fadeInUp} className="relative">
              <motion.h1 
                variants={fadeInUp}
                className="relative text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
              >
                Engineering the Future of Technology
              </motion.h1>
            </motion.div>
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Think Industries is a pioneering technology company specializing in software, electronics, hardware, engineering services, and advanced research.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex items-center justify-center gap-x-8"
            >
              <Link
                href="/contact"
                className="group relative rounded-2xl px-8 py-4 text-base font-semibold text-gray-900 dark:text-white"
              >
                <div className="absolute inset-0 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/5 shadow-lg group-hover:shadow-xl transition-all duration-300" />
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-700/20 dark:from-amber-400/20 dark:to-amber-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="relative z-10 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">Start a project</span>
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

      {/* Divisions section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Our Divisions
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Explore our specialized divisions, each focused on pushing the boundaries of technology and innovation.
          </motion.p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {divisions.map((division, index) => (
              <motion.div
                key={division.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={division.href} className="group relative block">
                  <div className="absolute -inset-2 rounded-3xl bg-amber-500/10 dark:bg-amber-600/10 opacity-0 blur-xl group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-[#121214] px-6 py-8 h-full border border-gray-200 dark:border-amber-600/10 group-hover:border-amber-500/20 dark:group-hover:border-amber-600/20 shadow-lg group-hover:shadow-xl backdrop-blur-sm transition-all duration-500">
                    <div className="relative">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 dark:bg-amber-600/10 text-2xl group-hover:bg-amber-500/20 dark:group-hover:bg-amber-600/20 transition-all duration-500">
                          {division.icon}
                        </span>
                        <span className="group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-500">{division.name}</span>
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                        <p className="flex-auto">{division.description}</p>
                      </dd>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="relative text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Ready to innovate with us?
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Let's discuss how our expertise can help bring your ideas to life and drive technological advancement.
          </p>
          <div className="relative mt-10 flex items-center justify-center gap-x-8">
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
          </div>
        </div>
      </div>
    </div>
  );
}
