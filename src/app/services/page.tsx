'use client';

import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';

export default function Services() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollReveal />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nick-forest.jpg"
            alt="Enterprise Transformation Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-black mb-8">
              ENTERPRISE <span className="text-red-500">WEAPONS</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-12 max-w-4xl mx-auto">
              I don't provide services. I provide <span className="text-red-500 font-bold">OPERATIONAL WEAPONS</span> that destroy inefficiency and build empires.
            </p>
            <div className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-bold">
              FORTUNE 500 TRANSFORMATIONS ONLY
            </div>
          </div>
        </div>
      </section>

      {/* Triple Threat Arsenal */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                MY <span className="text-red-500">TRIPLE-THREAT</span> ARSENAL
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Most consultants have one trick. I've got three locked and loaded - forged in military ops and Amazon's war rooms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Operational Warfare */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-6xl mb-6">⚡</div>
                <h3 className="text-3xl font-black mb-4">OPERATIONAL WARFARE</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  I don't just identify problems. I declare war on inefficiency and build systems that dominate your competition.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Supply Chain Domination</h4>
                      <p className="text-gray-400">Redesign entire supply chains for maximum efficiency and competitive advantage</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Process Reengineering</h4>
                      <p className="text-gray-400">Complete operational overhauls that eliminate waste and maximize output</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Cost Structure Overhaul</h4>
                      <p className="text-gray-400">Redesign financial models to generate exponential returns</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-900 p-4 rounded-lg">
                  <div className="text-red-500 font-bold mb-2">DELIVERED RESULTS:</div>
                  <div className="text-white">$100M+ annual cost reductions across multiple enterprises</div>
                </div>
              </div>
              
              {/* Systems Innovation */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-6xl mb-6">🎯</div>
                <h3 className="text-3xl font-black mb-4">SYSTEMS INNOVATION</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  I build technology and process architectures that don't just work—they create unfair competitive advantages.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Digital Transformation</h4>
                      <p className="text-gray-400">Complete technology overhauls that revolutionize operations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Automation Strategy</h4>
                      <p className="text-gray-400">Build systems that eliminate human error and maximize efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Data-Driven Operations</h4>
                      <p className="text-gray-400">Create intelligence systems that make decisions faster than competitors</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-900 p-4 rounded-lg">
                  <div className="text-red-500 font-bold mb-2">DELIVERED RESULTS:</div>
                  <div className="text-white">Central Dock innovation became Amazon network standard</div>
                </div>
              </div>
              
              {/* Financial Dominance */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-6xl mb-6">💰</div>
                <h3 className="text-3xl font-black mb-4">FINANCIAL DOMINANCE</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  I don't save you money. I redesign your entire financial model to generate exponential returns.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Cost Optimization</h4>
                      <p className="text-gray-400">Identify and eliminate waste across entire organizations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Revenue Enhancement</h4>
                      <p className="text-gray-400">Redesign business models to capture new revenue streams</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Investment Strategy</h4>
                      <p className="text-gray-400">Optimize capital allocation for maximum returns</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-900 p-4 rounded-lg">
                  <div className="text-red-500 font-bold mb-2">DELIVERED RESULTS:</div>
                  <div className="text-white">$9.3B operational spend analyzed and optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Levels */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              INVESTMENT <span className="text-red-500">LEVELS</span>
            </h2>
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
              I don't work with companies that think in thousands. I work with companies that think in millions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Strategic Assessment */}
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-3xl font-bold mb-4">STRATEGIC ASSESSMENT</div>
                <div className="text-5xl font-black mb-4">$50K</div>
                <div className="text-gray-400 mb-6">90-Day Deep Dive</div>
                <ul className="text-gray-300 space-y-4 mb-8 text-left">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    <span>Comprehensive operational audit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    <span>Transformation roadmap with ROI projections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    <span>Implementation strategy and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    <span>Executive presentation and alignment</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-4 rounded-lg font-bold transition-all duration-300 text-lg">
                  BOOK ASSESSMENT
                </button>
              </div>
              
              {/* Transformation Execution */}
              <div className="bg-red-900 p-8 rounded-lg border-2 border-red-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-black px-6 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                <div className="text-red-500 text-3xl font-bold mb-4">TRANSFORMATION EXECUTION</div>
                <div className="text-5xl font-black mb-4">$250K</div>
                <div className="text-gray-400 mb-6">6-Month Implementation</div>
                <ul className="text-gray-300 space-y-4 mb-8 text-left">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    <span>Complete system redesign and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    <span>Team training and leadership development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    <span>Performance monitoring and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    <span>Ongoing support and strategic advisory</span>
                  </li>
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold transition-all duration-300 text-lg">
                  START TRANSFORMATION
                </button>
              </div>
              
              {/* Enterprise Partnership */}
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-3xl font-bold mb-4">ENTERPRISE PARTNERSHIP</div>
                <div className="text-5xl font-black mb-4">$500K+</div>
                <div className="text-gray-400 mb-6">12-Month Partnership</div>
                <ul className="text-gray-300 space-y-4 mb-8 text-left">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    <span>Complete business model overhaul</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    <span>Executive coaching and leadership development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    <span>Strategic advisory and board-level support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    <span>Performance guarantees and ROI commitments</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-4 rounded-lg font-bold transition-all duration-300 text-lg">
                  DISCUSS PARTNERSHIP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              I WORK WITH <span className="text-red-500">PREDATORS</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Fortune 500 companies that want to dominate their markets, not just compete in them.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="text-3xl font-black text-red-500 mb-2">$1B+</div>
                <div className="text-gray-400">Revenue Companies</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="text-3xl font-black text-red-500 mb-2">10K+</div>
                <div className="text-gray-400">Employee Organizations</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="text-3xl font-black text-red-500 mb-2">Global</div>
                <div className="text-gray-400">Operations</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="text-3xl font-black text-red-500 mb-2">C-Suite</div>
                <div className="text-gray-400">Direct Access</div>
              </div>
            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300">
              SEE IF YOU QUALIFY
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              READY TO <span className="text-red-500">DOMINATE</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Stop thinking small. Start thinking like a predator. Your competition is already behind you.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-16 py-6 rounded-lg text-2xl font-bold transition-all duration-300 transform hover:scale-105">
              BOOK YOUR TRANSFORMATION
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 