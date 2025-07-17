import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/blog" className="text-primary hover:text-primary-dark transition-colors">
          ← Back to Blog
        </Link>
      </div>

      <header className="mb-12">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-sm text-primary font-semibold">Company</span>
          <span className="text-sm text-gray-500">4 min read</span>
        </div>
        <h1 className="text-4xl font-bold mb-6">
          Why I Started PlumbLine HR: A Vision for the Future of Work
        </h1>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium">Nick Plumb</p>
            <p className="text-gray-600">Founder & CTO</p>
          </div>
          <div className="ml-auto text-gray-500">
            March 5, 2024
          </div>
        </div>
      </header>

      <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=60"
          alt="PlumbLine HR Vision"
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          The story behind how my experience in both HR and technology led to creating a platform that combines the best of both worlds.
        </p>

        <h2>My Journey</h2>
        <p>
          After years of working in both HR and technology, I noticed a significant gap in the market. While there were many HR tools available, none of them truly leveraged the power of AI and data analytics to transform how organizations manage their people. This observation led to the creation of PlumbLine HR.
        </p>

        <h2>The Problem We're Solving</h2>
        <p>
          Traditional HR systems face several challenges:
        </p>
        <ul>
          <li>Manual, time-consuming processes</li>
          <li>Limited data-driven insights</li>
          <li>Poor user experience</li>
          <li>Lack of integration between tools</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          At PlumbLine HR, we envision a future where:
        </p>
        <ul>
          <li>HR decisions are data-driven and objective</li>
          <li>Employee experiences are personalized and engaging</li>
          <li>Organizations can predict and prevent HR challenges</li>
          <li>HR professionals focus on strategic initiatives</li>
        </ul>

        <h2>Our Approach</h2>
        <p>
          We're building PlumbLine HR with these principles in mind:
        </p>
        <ul>
          <li>User-first design</li>
          <li>Ethical AI implementation</li>
          <li>Data privacy and security</li>
          <li>Continuous innovation</li>
        </ul>

        <h2>Key Features</h2>
        <p>
          Our platform offers:
        </p>
        <ul>
          <li>AI-powered recruitment</li>
          <li>Predictive analytics</li>
          <li>Employee engagement tools</li>
          <li>Performance management</li>
          <li>Learning and development</li>
        </ul>

        <h2>Our Impact</h2>
        <p>
          We're helping organizations:
        </p>
        <ul>
          <li>Make better hiring decisions</li>
          <li>Improve employee retention</li>
          <li>Enhance productivity</li>
          <li>Create better workplaces</li>
        </ul>

        <h2>Looking Forward</h2>
        <p>
          The future of work is evolving rapidly, and we're committed to:
        </p>
        <ul>
          <li>Continuous platform improvement</li>
          <li>Expanding our feature set</li>
          <li>Building a community of HR innovators</li>
          <li>Shaping the future of HR technology</li>
        </ul>

        <h2>Join Us</h2>
        <p>
          We're always looking for talented individuals who share our vision. Whether you're an HR professional, a developer, or someone passionate about the future of work, we'd love to hear from you.
        </p>

        <h2>Conclusion</h2>
        <p>
          PlumbLine HR represents my vision for a better way to manage people in organizations. By combining cutting-edge technology with deep HR expertise, we're helping organizations create better workplaces and more successful teams.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t">
        <h3 className="text-xl font-semibold mb-4">Share this article</h3>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Twitter
          </button>
          <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition-colors">
            LinkedIn
          </button>
        </div>
      </div>
    </article>
  );
} 