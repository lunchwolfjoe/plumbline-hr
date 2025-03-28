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
          <span className="text-sm text-primary font-semibold">AI & Technology</span>
          <span className="text-sm text-gray-500">6 min read</span>
        </div>
        <h1 className="text-4xl font-bold mb-6">
          Building Ethical AI in HR: A Founder's Perspective
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
            March 20, 2024
          </div>
        </div>
      </header>

      <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=60"
          alt="Ethical AI in HR"
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          The intersection of AI and HR presents unique challenges around bias, privacy, and fairness. Here's how we're addressing these critical issues at PlumbLine HR.
        </p>

        <h2>The Challenge of Bias in AI</h2>
        <p>
          When we first started developing our AI-powered HR platform, one of our biggest concerns was ensuring that our algorithms didn't perpetuate or amplify existing biases in the workplace. This is particularly challenging in HR, where decisions about hiring, promotions, and compensation can have significant impacts on people's careers and lives.
        </p>

        <h2>Our Approach to Ethical AI</h2>
        <h3>1. Data Collection and Validation</h3>
        <p>
          We've implemented several safeguards in our data collection process:
        </p>
        <ul>
          <li>Diverse training data that represents different demographics</li>
          <li>Regular audits of our data sources for potential bias</li>
          <li>Transparent documentation of our data collection methods</li>
          <li>Strict privacy controls and data protection measures</li>
        </ul>

        <h3>2. Algorithm Design</h3>
        <p>
          Our AI models are designed with fairness in mind:
        </p>
        <ul>
          <li>Multiple fairness metrics to evaluate model performance</li>
          <li>Regular testing against protected characteristics</li>
          <li>Human oversight of critical decisions</li>
          <li>Explainable AI principles for transparency</li>
        </ul>

        <h3>3. Implementation and Monitoring</h3>
        <p>
          We maintain strict controls over how our AI is deployed:
        </p>
        <ul>
          <li>Regular impact assessments</li>
          <li>Continuous monitoring for bias</li>
          <li>Feedback loops from HR professionals</li>
          <li>Regular updates based on new research and best practices</li>
        </ul>

        <h2>Privacy and Data Protection</h2>
        <p>
          Protecting employee data is paramount in HR technology. We've implemented:
        </p>
        <ul>
          <li>End-to-end encryption for sensitive data</li>
          <li>Granular access controls</li>
          <li>Regular security audits</li>
          <li>Compliance with global privacy regulations</li>
        </ul>

        <h2>Transparency and Accountability</h2>
        <p>
          We believe in being transparent about our AI systems:
        </p>
        <ul>
          <li>Clear documentation of how decisions are made</li>
          <li>Regular reporting on system performance</li>
          <li>Open communication with stakeholders</li>
          <li>Commitment to continuous improvement</li>
        </ul>

        <h2>Looking Forward</h2>
        <p>
          As AI technology continues to evolve, we remain committed to developing ethical solutions that enhance rather than replace human judgment. Our goal is to create tools that help HR professionals make better, fairer decisions while maintaining the human touch that's essential to effective people management.
        </p>

        <h2>Conclusion</h2>
        <p>
          Building ethical AI in HR is an ongoing journey that requires constant vigilance and commitment. At PlumbLine HR, we're dedicated to developing solutions that not only improve efficiency but also promote fairness, transparency, and respect for individual privacy.
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