'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const executives = [
  {
    name: 'Laurin Hofer',
    role: 'Founder & CEO',
    image: '/team/ceo.jpg',
    bio: 'I founded Think Industries to revolutionize the tech industry by integrating software, electronics, and hardware into seamless, cutting-edge solutions. My goal is to push innovation forward and shape the future of technology.',
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

export default function About() {
  return (
    <div className="bg-white dark:bg-[#17171C]">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-white dark:from-amber-900/10 dark:via-amber-900/5 dark:to-[#17171C] blur-[2px]" />
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
              className="text-base font-semibold leading-7 text-amber-500 dark:text-amber-400"
            >
              About Us
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              Shaping Tomorrow's Technology
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
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
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto mt-16 max-w-7xl px-6 lg:px-8"
      >
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-500 dark:text-gray-400">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-amber-500 dark:text-amber-400 sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </motion.div>

      {/* Founder section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Founder
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Meet the visionary behind Think Industries, driving innovation and excellence in technology.
          </p>
        </div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto mt-20 max-w-2xl lg:mx-0"
        >
          {executives.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="absolute -inset-2 rounded-3xl bg-amber-500/10 dark:bg-amber-600/10 opacity-0 blur-xl group-hover:opacity-100 transition-all duration-700" />
              <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-[#1F1F28] p-8 flex flex-col md:flex-row gap-8 items-center border border-gray-200 dark:border-amber-600/10 group-hover:border-amber-500/20 dark:group-hover:border-amber-600/20 shadow-lg group-hover:shadow-xl backdrop-blur-sm transition-all duration-700">
                <div className="relative h-64 w-64 overflow-hidden rounded-full flex-shrink-0">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="profile-image"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-700">
                    {person.name}
                  </h3>
                  <p className="text-lg leading-7 text-amber-500 dark:text-amber-400">{person.role}</p>
                  <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">{person.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            At Think Industries, our values guide everything we do, from innovation to client relationships.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {[
            { title: 'Innovation First', description: 'We embrace bold ideas and cutting-edge technologies to drive progress.' },
            { title: 'Excellence in Execution', description: 'Quality, precision, and performance are at the core of everything we build.' },
            { title: 'Collaboration & Synergy', description: 'Our divisions work seamlessly together to create holistic solutions.' },
            { title: 'Ethical Responsibility', description: 'We develop technology that benefits humanity and aligns with ethical standards.' },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="absolute -inset-2 rounded-xl bg-amber-500/10 dark:bg-amber-600/10 opacity-0 blur-lg group-hover:opacity-100 transition-all duration-700" />
              <div className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-[#1F1F28] p-6 border border-gray-200 dark:border-amber-600/10 group-hover:border-amber-500/20 dark:group-hover:border-amber-600/20 shadow-lg group-hover:shadow-xl backdrop-blur-sm transition-all duration-700">
                <dt className="font-semibold text-gray-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-700">
                  {value.title}
                </dt>
                <dd className="mt-2 text-gray-600 dark:text-gray-300">{value.description}</dd>
              </div>
            </motion.div>
          ))}
        </dl>
      </div>

      {/* Division leads section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Division Leaders</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our division leaders are experts in their respective fields, driving innovation and excellence. For now I lead each division but I'm always looking for new talents to join my team.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {divisionLeads.map((person, index) => (
            <motion.li
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="absolute -inset-2 rounded-3xl bg-amber-500/10 dark:bg-amber-600/10 opacity-0 blur-xl group-hover:opacity-100 transition-all duration-700" />
              <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-[#1F1F28] p-8 border border-gray-200 dark:border-amber-600/10 group-hover:border-amber-500/20 dark:group-hover:border-amber-600/20 shadow-lg group-hover:shadow-xl backdrop-blur-sm transition-all duration-700">
                <div className="flex flex-col gap-6">
                  <div className="text-6xl flex justify-center items-center h-24 w-24 rounded-full bg-amber-500/10 dark:bg-amber-600/10 group-hover:bg-amber-500/20 dark:group-hover:bg-amber-600/20 transition-all duration-700">
                    {person.image}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-700">
                      {person.name}
                    </h3>
                    <p className="text-base leading-7 text-amber-500 dark:text-amber-400">{person.role}</p>
                    <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">{person.bio}</p>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
} 