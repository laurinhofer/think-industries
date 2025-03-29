'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  role: string;
  slug: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: 'Revolutionizing PCB Design: The Future of Electronics Manufacturing',
    description: 'Explore how Think Industries is transforming PCB design and manufacturing through innovative automation and AI-driven optimization techniques.',
    date: 'March 15, 2024',
    category: 'Electronics',
    author: 'Laurin Hofer',
    role: 'Head of Electronics',
    slug: 'revolutionizing-pcb-design',
  },
  {
    id: 2,
    title: 'The Future of PCB Design',
    description: 'Discover the latest innovations in PCB design, including multi-layer optimization and advanced thermal management solutions.',
    date: 'March 14, 2024',
    category: 'Electronics',
    author: 'Laurin Hofer',
    role: 'Head of Electronics',
    slug: 'future-of-pcb-design',
  },
  {
    id: 3,
    title: 'Quantum Computing: A New Era',
    description: 'Exploring breakthroughs in quantum computing, from qubit stability enhancement to advanced error correction systems.',
    date: 'March 13, 2024',
    category: 'Labs',
    author: 'Laurin Hofer',
    role: 'Head of Labs',
    slug: 'quantum-computing-new-era',
  },
  {
    id: 4,
    title: 'Sustainable Manufacturing in Robotics',
    description: 'How Think Industries is implementing sustainable practices in robotics manufacturing through innovative materials and smart systems.',
    date: 'March 12, 2024',
    category: 'Hardware',
    author: 'Laurin Hofer',
    role: 'Head of Hardware',
    slug: 'sustainable-manufacturing-robotics',
  },
  {
    id: 5,
    title: 'Aerospace Innovation: Next-Gen Propulsion',
    description: 'Discover our latest breakthroughs in aerospace propulsion systems, materials innovation, and advanced control systems.',
    date: 'March 11, 2024',
    category: 'Engineering',
    author: 'Laurin Hofer',
    role: 'Head of Engineering',
    slug: 'aerospace-innovation-propulsion',
  },
];

export default function Blog() {
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Think Industries Blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Insights and innovations from our research and development teams.
            </p>
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-1"
          >
            <article className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-50 dark:bg-[#121214] opacity-0 transition group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
                <div className="relative flex flex-col gap-8 sm:flex-row">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={featuredPost.date} className="text-gray-500 dark:text-gray-400">
                        {featuredPost.date}
                      </time>
                      <span className="relative z-10 rounded-full bg-amber-500/10 dark:bg-amber-600/10 px-3 py-1.5 font-medium text-amber-500 dark:text-amber-400">
                        {featuredPost.category}
                      </span>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400">
                        <Link href={`/blog/${featuredPost.slug}`}>
                          <span className="absolute inset-0" />
                          {featuredPost.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                        {featuredPost.description}
                      </p>
                    </div>
                    <div className="mt-6 flex border-t border-gray-200 dark:border-amber-600/10 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900 dark:text-white">
                            <span className="absolute inset-0" />
                            {featuredPost.author}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">{featuredPost.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>

          {/* Recent Posts */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className="relative w-full">
                  <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-50 dark:bg-[#121214] opacity-0 transition group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
                  <div className="relative flex flex-col gap-8 sm:flex-row">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
                          {post.date}
                        </time>
                        <span className="relative z-10 rounded-full bg-amber-500/10 dark:bg-amber-600/10 px-3 py-1.5 font-medium text-amber-500 dark:text-amber-400">
                          {post.category}
                        </span>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400">
                          <Link href={`/blog/${post.slug}`}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </Link>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                          {post.description}
                        </p>
                      </div>
                      <div className="mt-6 flex border-t border-gray-200 dark:border-amber-600/10 pt-6">
                        <div className="relative flex items-center gap-x-4">
                          <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900 dark:text-white">
                              <span className="absolute inset-0" />
                              {post.author}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">{post.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 