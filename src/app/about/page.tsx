'use client';

import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollReveal />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nick-forest.jpg"
            alt="Nick Plumb - Military Veteran & Amazon Principal"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-black mb-8">
              THE <span className="text-red-500">PREDATOR</span> BEHIND THE TRANSFORMATION
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-12 max-w-4xl mx-auto">
              Military veteran. Amazon principal. Enterprise transformer. I don't just solve problems—I redesign entire business models to generate hundreds of millions in new value.
            </p>
            <div className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-bold">
              ZERO FAILED TRANSFORMATIONS
            </div>
          </div>
        </div>
      </section>

      {/* Background Story */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                  FROM <span className="text-red-500">BATTLEFIELD</span> TO BOARDROOM
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  I learned operational excellence in the military, where failure meant lives lost. I mastered systems innovation at Amazon, where failure meant billions lost. Now I bring that same ruthless efficiency to Fortune 500 companies.
                </p>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  While other consultants give you PowerPoint decks and theoretical frameworks, I give you operational weapons that have been battle-tested in the most demanding environments on earth.
                </p>
                <div className="bg-red-900 p-6 rounded-lg">
                  <div className="text-red-500 font-bold mb-2">MY PHILOSOPHY:</div>
                  <div className="text-white text-lg">"I don't optimize your operations. I redesign your entire business model to generate exponential returns."</div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/nick-forest.jpg"
                  alt="Nick Plumb - Strategic Transformation Architect"
                  width={600}
                  height={800}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military Background */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                MILITARY <span className="text-red-500">OPERATIONS</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Where I learned that operational excellence isn't a goal—it's a requirement for survival.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-4xl mb-4">⚔️</div>
                <h3 className="text-2xl font-bold mb-4">COMBAT LEADERSHIP</h3>
                <p className="text-gray-300 mb-6">
                  Led teams in high-stakes environments where failure wasn't an option. Every decision had life-or-death consequences.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Strategic planning under extreme pressure</li>
                  <li>• Team leadership in crisis situations</li>
                  <li>• Resource optimization in constrained environments</li>
                </ul>
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">OPERATIONAL EXCELLENCE</h3>
                <p className="text-gray-300 mb-6">
                  Mastered systems that had to work perfectly every time, because lives depended on it.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Zero-defect operational systems</li>
                  <li>• Real-time decision making</li>
                  <li>• Performance under extreme stress</li>
                </ul>
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-4">STRATEGIC THINKING</h3>
                <p className="text-gray-300 mb-6">
                  Developed the ability to see the big picture while executing tactical details flawlessly.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Long-term strategic planning</li>
                  <li>• Risk assessment and mitigation</li>
                  <li>• Resource allocation optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amazon Experience */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                AMAZON <span className="text-red-500">PRINCIPAL</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Where I learned to think in billions and execute at scale that most people can't comprehend.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-black mb-6">SCALE THAT DEFIES IMAGINATION</h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  At Amazon, I didn't just manage operations—I redesigned entire networks that served millions of customers. I learned to think in terms of billions of dollars and millions of transactions.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <div className="text-red-500 font-bold mb-2">CENTRAL DOCK INNOVATION</div>
                    <div className="text-white">Redesigned Amazon's entire fulfillment network, eliminating post-slam defects while reducing variable headcount through systematic optimization.</div>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <div className="text-red-500 font-bold mb-2">$9.3B OPERATIONAL SPEND</div>
                    <div className="text-white">Analyzed and optimized operational spend across the entire network, identifying $100M+ in annual cost reduction opportunities.</div>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <div className="text-red-500 font-bold mb-2">NETWORK-WIDE TRANSFORMATIONS</div>
                    <div className="text-white">Led innovations that became network standards, transforming distributed inefficiencies into centralized advantages.</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg">
                <h4 className="text-2xl font-bold mb-6 text-center">AMAZON ACHIEVEMENTS</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Operational Spend Analyzed</span>
                    <span className="text-red-500 font-bold">$9.3B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cost Reduction Identified</span>
                    <span className="text-red-500 font-bold">$100M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Network Innovations</span>
                    <span className="text-red-500 font-bold">6+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Complex Launches</span>
                    <span className="text-red-500 font-bold">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Leaders Developed</span>
                    <span className="text-red-500 font-bold">6+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Me Different */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              WHY I'M <span className="text-red-500">DIFFERENT</span>
            </h2>
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
              Most consultants have never operated at scale. I've operated at the scale of nations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="text-red-500 text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-4">BATTLE-TESTED</h3>
                <p className="text-gray-300">Every strategy has been proven in the most demanding environments on earth.</p>
              </div>
              
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="text-red-500 text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-4">SCALE PROVEN</h3>
                <p className="text-gray-300">I've managed operations that serve millions of customers and billions in revenue.</p>
              </div>
              
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="text-red-500 text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-4">RESULTS GUARANTEED</h3>
                <p className="text-gray-300">Zero failed transformations. Every engagement delivers measurable, massive returns.</p>
              </div>
              
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="text-red-500 text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-4">EXECUTIVE ACCESS</h3>
                <p className="text-gray-300">Direct C-suite relationships and board-level strategic advisory capabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
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