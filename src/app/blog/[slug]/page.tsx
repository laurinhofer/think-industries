'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

// This would typically come from a database or CMS
const posts = [
  {
    id: 1,
    title: 'Revolutionizing AI: Our Latest Breakthroughs',
    content: `
      Artificial Intelligence is rapidly evolving, and at Think Software, we're at the forefront of this revolution. Our research team has recently made significant breakthroughs in neural network architecture and machine learning optimization.

      Key Breakthroughs

      1. Advanced Neural Networks
         We've developed a new neural network architecture that reduces computational overhead by 40% while maintaining accuracy.

      2. Efficient Training Methods
         Our innovative training approach combines transfer learning with dynamic optimization, reducing training time by 60%.

      3. Real-world Applications
         These breakthroughs are already being implemented in various industries:
         - Healthcare diagnostics
         - Financial forecasting
         - Autonomous systems
         - Natural language processing

      Impact on Industry

      Our advancements in AI technology are helping businesses across various sectors improve their operations and decision-making processes. The reduced computational requirements make advanced AI more accessible to smaller organizations.

      Future Developments

      We're continuing to push the boundaries of what's possible with AI. Our upcoming research focuses on:
      - Quantum-inspired neural networks
      - Sustainable AI computing
      - Edge AI optimization
      - Explainable AI systems

      Stay tuned for more updates on our journey to revolutionize artificial intelligence.
    `,
    date: '2025-03-15',
    category: 'Think Software',
    author: 'Laurin Hofer',
    slug: 'revolutionizing-ai-latest-breakthroughs',
  },
  {
    id: 2,
    title: 'The Future of PCB Design',
    content: `
      As electronics continue to evolve, PCB design is undergoing a revolutionary transformation. At Think Electronics, we're pioneering new approaches to circuit design that combine efficiency with innovation.

      Key Innovations

      1. Multi-Layer Optimization
         Our advanced PCB design techniques have achieved a 35% reduction in board size while improving signal integrity through sophisticated layer management.

      2. Thermal Management Solutions
         We've developed innovative thermal management patterns that reduce operating temperatures by up to 25% in high-density boards.

      3. Signal Integrity Improvements
         New routing algorithms and impedance control techniques have resulted in:
         - 40% reduction in EMI
         - Enhanced high-speed signal quality
         - Improved power distribution
         - Better ground plane design

      Manufacturing Advancements

      We're implementing cutting-edge manufacturing processes that include:
      - Advanced via technologies
      - Embedded components
      - Flexible-rigid hybrid designs
      - High-density interconnect (HDI) techniques

      Future Directions

      Our research is focused on several emerging areas:
      - 3D printed electronics integration
      - Biodegradable PCB materials
      - AI-assisted routing optimization
      - Advanced substrate technologies

      These developments are setting new standards in PCB design and manufacturing, enabling the next generation of electronic devices.
    `,
    date: '2025-03-10',
    category: 'Think Electronics',
    author: 'Laurin Hofer',
    slug: 'future-of-pcb-design',
  },
  {
    id: 3,
    title: 'Quantum Computing: A New Era',
    content: `
      At Think Labs, we're making significant strides in quantum computing research, pushing the boundaries of what's possible in computational science.

      Breakthrough Achievements

      1. Qubit Stability Enhancement
         Our team has developed a new approach to qubit stabilization that extends coherence times by 300%, marking a major breakthrough in quantum computing reliability.

      2. Error Correction Systems
         We've implemented advanced quantum error correction that achieves:
         - 99.99% error detection rate
         - Real-time error correction
         - Scalable architecture design
         - Minimal overhead requirements

      3. Quantum Algorithm Development
         Recent developments include:
         - New optimization algorithms
         - Enhanced quantum simulation techniques
         - Hybrid quantum-classical computing methods
         - Quantum machine learning protocols

      Practical Applications

      Our quantum computing advances are finding applications in:
      - Drug discovery acceleration
      - Climate modeling
      - Financial optimization
      - Cryptography
      - Materials science

      Research Direction

      We're currently focusing on:
      - Scalable quantum architectures
      - Room-temperature quantum computing
      - Quantum internet protocols
      - Novel qubit implementations

      These developments are laying the groundwork for practical quantum computing applications that will revolutionize multiple industries.
    `,
    date: '2025-03-05',
    category: 'Think Labs',
    author: 'Laurin Hofer',
    slug: 'quantum-computing-new-era',
  },
  {
    id: 4,
    title: 'Sustainable Manufacturing in Robotics',
    content: `
      Think Hardware is revolutionizing robotics manufacturing with sustainable practices that don't compromise on performance or reliability.

      Sustainable Innovations

      1. Materials and Resources
         We've achieved significant sustainability improvements:
         - 60% recycled materials usage
         - 45% reduction in water consumption
         - 30% energy efficiency increase
         - Zero-waste manufacturing processes

      2. Smart Manufacturing Systems
         Our automated manufacturing lines feature:
         - AI-powered resource optimization
         - Predictive maintenance systems
         - Real-time quality control
         - Energy consumption monitoring

      3. Circular Design Principles
         Key implementations include:
         - Modular component design
         - Easy repair and upgrade paths
         - End-of-life recycling programs
         - Biodegradable packaging solutions

      Performance Metrics

      Our sustainable approach has resulted in:
      - Improved product longevity
      - Reduced maintenance requirements
      - Lower operating costs
      - Enhanced reliability scores

      Future Initiatives

      We're working on:
      - Solar-powered manufacturing facilities
      - Closed-loop material recovery
      - Carbon-neutral production lines
      - Bio-based component materials

      This commitment to sustainability is setting new standards in robotics manufacturing while maintaining our high-performance requirements.
    `,
    date: '2025-03-01',
    category: 'Think Hardware',
    author: 'Laurin Hofer',
    slug: 'sustainable-manufacturing-robotics',
  },
  {
    id: 5,
    title: 'Aerospace Innovation: Next-Gen Propulsion',
    content: `
      Think Engineering is pioneering the next generation of aerospace propulsion systems, combining efficiency with groundbreaking performance.

      Technical Breakthroughs

      1. Advanced Propulsion Systems
         Our latest developments include:
         - 40% increase in thrust efficiency
         - 25% reduction in fuel consumption
         - Advanced thermal management
         - Reduced emissions profile

      2. Materials Innovation
         Key advancements in materials:
         - High-temperature composites
         - Advanced ceramic matrices
         - Nano-engineered coatings
         - Smart alloy implementations

      3. Control Systems
         Revolutionary control features:
         - AI-powered thrust optimization
         - Real-time performance adaptation
         - Predictive maintenance
         - Advanced sensor integration

      Performance Improvements

      Our new propulsion systems achieve:
      - Higher thrust-to-weight ratios
      - Improved reliability metrics
      - Extended service intervals
      - Better environmental performance

      Ongoing Development

      Current research focuses on:
      - Electric propulsion integration
      - Hydrogen fuel systems
      - Hypersonic capabilities
      - Autonomous operation features

      These innovations are shaping the future of aerospace propulsion, enabling more efficient and sustainable air travel.
    `,
    date: '2025-02-28',
    category: 'Think Engineering',
    author: 'Laurin Hofer',
    slug: 'aerospace-innovation-propulsion',
  },
  // Add more blog posts here
];

export default function BlogPost() {
  const params = useParams();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="bg-white dark:bg-[#17171C] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Post not found</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            The blog post you're looking for doesn't exist.
          </p>
          <div className="mt-10">
            <Link
              href="/blog"
              className="text-sm font-semibold leading-6 text-amber-500 hover:text-amber-400 dark:text-amber-400 dark:hover:text-amber-300"
            >
              ← Back to blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#17171C] px-6 py-24 sm:py-32 lg:px-8">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl"
      >
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center items-center gap-x-4 text-xs">
            <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <span className="relative z-10 rounded-full bg-amber-500/10 dark:bg-amber-600/10 px-3 py-1.5 font-medium text-amber-500 dark:text-amber-400">
              {post.category}
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 text-sm leading-6">
            <p className="font-semibold text-gray-900 dark:text-white">By {post.author}</p>
          </div>
        </div>

        <div className="prose prose-lg mx-auto mt-16">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mt-4 text-gray-600 dark:text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-200 dark:border-amber-600/10 pt-8">
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-amber-500 hover:text-amber-400 dark:text-amber-400 dark:hover:text-amber-300"
          >
            ← Back to blog
          </Link>
        </div>
      </motion.article>
    </div>
  );
} 