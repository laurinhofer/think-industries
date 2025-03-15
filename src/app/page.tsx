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

const floatingAnimation = {
  initial: { y: 0 },
  animate: { y: [-5, 5, -5] },
  transition: { 
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function Home() {
  return (
    <div className="bg-[#17171C]">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-[#17171C] blur-[1px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div variants={floatingAnimation} className="relative">
              <motion.h1 
                variants={fadeInUp}
                className="relative text-4xl font-bold tracking-tight text-white sm:text-6xl"
              >
                Engineering the Future of Technology
              </motion.h1>
            </motion.div>
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-300"
            >
              Think Industries is a pioneering technology company specializing in software, electronics, hardware, engineering services, and advanced research.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/contact"
                className="group relative rounded-full px-6 py-3 text-sm font-semibold text-amber-400"
              >
                <div className="absolute inset-0 rounded-full bg-amber-600/10 group-hover:bg-amber-600/20 transition-all duration-500" />
                <div className="absolute -inset-0.5 rounded-full bg-amber-600/20 blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <span className="relative">Start a project</span>
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors duration-500"
              >
                Learn more <span aria-hidden="true">→</span>
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
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Our Divisions
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Explore our specialized divisions, each focused on pushing the boundaries of technology and innovation.
          </motion.p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {divisions.map((division, index) => (
              <motion.div
                key={division.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={division.href} className="group relative block">
                  <div className="absolute -inset-2 rounded-3xl bg-amber-600/10 opacity-0 blur-xl group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative overflow-hidden rounded-2xl bg-[#1F1F28] px-6 py-8 h-full border border-amber-600/10 group-hover:border-amber-600/20 shadow-lg group-hover:shadow-xl backdrop-blur-sm transition-all duration-500">
                    <div className="relative">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-600/10 text-2xl group-hover:bg-amber-600/20 transition-all duration-500">
                          {division.icon}
                        </span>
                        <span className="group-hover:text-amber-400 transition-colors duration-500">{division.name}</span>
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
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
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to innovate with us?
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Let's discuss how our expertise can help bring your ideas to life and drive technological advancement.
          </p>
          <div className="relative mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="group relative rounded-full px-6 py-3 text-sm font-semibold text-amber-400"
            >
              <div className="absolute inset-0 rounded-full bg-amber-600/10 group-hover:bg-amber-600/20 transition-all duration-500" />
              <div className="absolute -inset-0.5 rounded-full bg-amber-600/20 blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <span className="relative">Get started</span>
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors duration-500"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
