'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const executives = [
  {
    name: 'Laurin Hofer',
    role: 'Founder & CEO',
    image: '/team/ceo.jpg',
    bio: 'A visionary entrepreneur with a passion for innovation and technology. Laurin founded Think Industries with the mission to revolutionize the tech industry through integrated solutions across software, electronics, and hardware.',
  },
];

const divisionLeads = [
  {
    name: 'Laurin Hofer',
    role: 'Head of Think Software',
    image: '👨‍💻',
    bio: 'Expert in enterprise software and AI solutions with a track record of successful large-scale implementations.',
  },
  {
    name: 'Laurin Hofer',
    role: 'Head of Think Electronics',
    image: '👩‍🔧',
    bio: 'Specializes in advanced electronics and PCB design with extensive experience in consumer electronics.',
  },
  {
    name: 'Laurin Hofer',
    role: 'Head of Think Hardware',
    image: '👨‍🔧',
    bio: 'Leads our hardware division with expertise in robotics and automated manufacturing systems.',
  },
  {
    name: 'Laurin Hofer',
    role: 'Head of Think Engineering',
    image: '👩‍🚀',
    bio: 'Aerospace engineer with experience in propulsion systems and defense technology.',
  },
  {
    name: 'Laurin Hofer',
    role: 'Head of Think Labs',
    image: '🧑‍🔬',
    bio: 'Quantum computing researcher and pioneer in emerging technologies.',
  },
];

const stats = [
  { label: 'Founded', value: '2025' },
  { label: 'Innovation Projects', value: '1' },
  { label: 'Team Members', value: '1' },
  { label: 'Client Solutions', value: '1' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  return (
    <div className="bg-[#17171C]">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-transparent" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-base font-semibold leading-7 text-amber-400"
            >
              About Us
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Shaping Tomorrow's Technology
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-300"
            >
              Think Industries is an innovative startup dedicated to pushing the boundaries of technology
              through integrated solutions across software, electronics, hardware, and advanced research.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Stats section with enhanced animations */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mx-auto mt-16 max-w-7xl px-6 lg:px-8"
      >
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-400">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-amber-400 sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </motion.div>

      {/* Founder section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Founder
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Meet the visionary behind Think Industries, driving innovation and excellence in technology.
          </p>
        </div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto mt-20 max-w-2xl lg:mx-0"
        >
          {executives.map((person) => (
            <motion.div
              key={person.name}
              variants={fadeInUp}
              className="card p-8 flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="relative h-64 w-64 overflow-hidden rounded-full flex-shrink-0">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="profile-image"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold leading-8 tracking-tight text-white">
                  {person.name}
                </h3>
                <p className="text-lg leading-7 text-amber-400">{person.role}</p>
                <p className="mt-4 text-lg leading-8 text-gray-300">{person.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            At Think Industries, our values guide everything we do, from innovation to client relationships.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          <div className="relative pl-9">
            <dt className="inline font-semibold text-white">Innovation First</dt>
            <dd className="inline"> - We embrace bold ideas and cutting-edge technologies to drive progress.</dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-white">Excellence in Execution</dt>
            <dd className="inline"> - Quality, precision, and performance are at the core of everything we build.</dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-white">Collaboration & Synergy</dt>
            <dd className="inline"> - Our divisions work seamlessly together to create holistic solutions.</dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-white">Ethical Responsibility</dt>
            <dd className="inline"> - We develop technology that benefits humanity and aligns with ethical standards.</dd>
          </div>
        </dl>
      </div>

      {/* Division leads section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Division Leaders</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our division leaders are experts in their respective fields, driving innovation and excellence.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {divisionLeads.map((person, index) => (
            <motion.li
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="flex flex-col gap-6">
                <div className="text-6xl flex justify-center items-center h-24 w-24 rounded-full bg-[#1F1F28]/50 border border-amber-600/20">
                  {person.image}
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                  <p className="text-base leading-7 text-amber-400">{person.role}</p>
                  <p className="mt-4 text-base leading-7 text-gray-300">{person.bio}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
} 