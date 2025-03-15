'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'Revolutionizing AI: Our Latest Breakthroughs',
    description: 'Discover how our AI research team is pushing the boundaries of machine learning and neural networks.',
    date: '2024-03-15',
    category: 'Think Software',
    author: 'Laurin Hofer',
    slug: 'revolutionizing-ai-latest-breakthroughs',
  },
  {
    id: 2,
    title: 'The Future of PCB Design',
    description: 'Exploring advanced PCB design techniques and their impact on modern electronics.',
    date: '2024-03-10',
    category: 'Think Electronics',
    author: 'Laurin Hofer',
    slug: 'future-of-pcb-design',
  },
  {
    id: 3,
    title: 'Quantum Computing: A New Era',
    description: 'How quantum computing is reshaping the technology landscape and our approach to complex problems.',
    date: '2024-03-05',
    category: 'Think Labs',
    author: 'Laurin Hofer',
    slug: 'quantum-computing-new-era',
  },
  {
    id: 4,
    title: 'Sustainable Manufacturing in Robotics',
    description: 'Implementing eco-friendly practices in robotics manufacturing without compromising performance.',
    date: '2024-03-01',
    category: 'Think Hardware',
    author: 'Laurin Hofer',
    slug: 'sustainable-manufacturing-robotics',
  },
  {
    id: 5,
    title: 'Aerospace Innovation: Next-Gen Propulsion',
    description: 'Breaking down our latest developments in aerospace propulsion technology.',
    date: '2024-02-28',
    category: 'Think Engineering',
    author: 'Laurin Hofer',
    slug: 'aerospace-innovation-propulsion',
  },
];

export default function Blog() {
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <div className="bg-[#17171C] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Think Industries Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
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
            <div className="w-full">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={featuredPost.date} className="text-gray-400">
                  {new Date(featuredPost.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span className="relative z-10 rounded-full bg-amber-600/10 px-3 py-1.5 font-medium text-amber-400">
                  {featuredPost.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-2xl font-semibold leading-6 text-white group-hover:text-amber-400">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{featuredPost.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-white">
                    <span>{featuredPost.author}</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </motion.div>

        {/* Recent Posts */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span className="relative z-10 rounded-full bg-amber-600/10 px-3 py-1.5 font-medium text-amber-400">
                  {post.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-amber-400">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-white">
                    <span>{post.author}</span>
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 