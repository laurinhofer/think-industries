'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    name: 'Product Design',
    description: 'Innovative hardware product design and development solutions.',
    icon: '📐',
  },
  {
    name: 'Prototyping',
    description: 'Rapid prototyping and iterative hardware development.',
    icon: '🛠️',
  },
  {
    name: 'Manufacturing',
    description: 'Efficient manufacturing processes and production optimization.',
    icon: '🏭',
  },
  {
    name: 'Robotics',
    description: 'Advanced robotics systems and automation solutions.',
    icon: '🤖',
  },
  {
    name: 'Quality Control',
    description: 'Comprehensive testing and quality assurance processes.',
    icon: '✅',
  },
  {
    name: 'System Integration',
    description: 'Seamless integration of hardware components and systems.',
    icon: '🔄',
  },
];

const technologies = [
  'SolidWorks', 'AutoCAD', 'Fusion 360',
  'CNC Machining', '3D Printing', 'Injection Molding',
  'Laser Cutting', 'PCB Assembly', 'Industrial Design',
  'Robotics', 'PLC Systems', 'Motion Control',
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
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

export default function Hardware() {
  return (
    <div className="bg-[#17171C]">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-amber-900/5 to-[#17171C] blur-[2px]" />
        </div>

        <div className="mx-auto max-w-[84rem] px-6 py-32 sm:py-40 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <motion.div variants={floatingAnimation} className="relative">
              <motion.h1 
                variants={fadeInUp}
                className="relative text-5xl font-bold tracking-tight text-white sm:text-7xl"
              >
                Think Hardware
              </motion.h1>
            </motion.div>
            <motion.p 
              variants={fadeInUp}
              className="mt-8 text-xl leading-8 text-gray-300 max-w-2xl"
            >
              Building innovative hardware solutions that transform ideas into tangible products and systems.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="mt-12 flex items-center gap-x-8"
            >
              <Link
                href="/contact"
                className="group relative rounded-full px-8 py-4 text-base font-semibold text-amber-400"
              >
                <div className="absolute inset-0 rounded-full bg-amber-600/10 group-hover:bg-amber-600/20 transition-all duration-700" />
                <div className="absolute -inset-0.5 rounded-full bg-amber-600/20 blur opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <span className="relative">Start your project →</span>
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
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-base font-semibold leading-7 text-amber-400"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Hardware Solutions
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="mt-8 text-xl leading-8 text-gray-300"
          >
            We design and manufacture cutting-edge hardware solutions for diverse industries and applications.
          </motion.p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-[84rem] sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <div className="group relative h-full">
                  <div className="absolute -inset-2 rounded-3xl bg-amber-600/10 opacity-0 blur-xl group-hover:opacity-100 transition-all duration-700" />
                  <div className="relative overflow-hidden rounded-2xl bg-[#1F1F28] p-6 h-full border border-amber-600/10 group-hover:border-amber-600/20 shadow-lg group-hover:shadow-xl backdrop-blur-sm transition-all duration-700">
                    <dt className="flex flex-col gap-4 text-lg font-semibold leading-7 text-white">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-600/10 text-2xl group-hover:bg-amber-600/20 transition-all duration-700">
                        {service.icon}
                      </span>
                      <span className="group-hover:text-amber-400 transition-colors duration-700">{service.name}</span>
                    </dt>
                    <dd className="mt-4 text-base leading-7 text-gray-300">
                      <p>{service.description}</p>
                    </dd>
                  </div>
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
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Technologies
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="mt-8 text-xl leading-8 text-gray-300"
          >
            We utilize advanced manufacturing technologies and design tools.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto mt-16 max-w-[84rem]"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {technologies.map((tech) => (
              <motion.div
                key={tech}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="absolute -inset-1 rounded-xl bg-amber-600/10 opacity-0 blur-lg group-hover:opacity-100 transition-all duration-700" />
                <div className="relative overflow-hidden rounded-xl bg-[#1F1F28] px-6 py-4 text-base font-medium text-gray-300 border border-amber-600/10 group-hover:border-amber-600/20 backdrop-blur-sm transition-all duration-700">
                  <span className="relative group-hover:text-amber-400 transition-colors duration-700">{tech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-[84rem] px-6 py-32 sm:py-40 lg:px-8">
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="relative text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to build something great?
          </h2>
          <p className="relative mx-auto mt-8 max-w-2xl text-xl leading-8 text-gray-300">
            Let's create innovative hardware solutions that bring your ideas to reality.
          </p>
          <div className="relative mt-12 flex items-center justify-center gap-x-8">
            <Link
              href="/contact"
              className="group relative rounded-full px-8 py-4 text-base font-semibold text-amber-400"
            >
              <div className="absolute inset-0 rounded-full bg-amber-600/10 group-hover:bg-amber-600/20 transition-all duration-700" />
              <div className="absolute -inset-0.5 rounded-full bg-amber-600/20 blur opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <span className="relative">Get started →</span>
            </Link>
            <Link
              href="/about"
              className="text-base font-semibold leading-6 text-white hover:text-amber-400 transition-colors duration-700"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 