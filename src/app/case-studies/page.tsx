'use client';

import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollReveal />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nick-forest.jpg"
            alt="Case Studies - Transformation Proof"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-black mb-8">
              TRANSFORMATION <span className="text-red-500">PROOF</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-12 max-w-4xl mx-auto">
              These aren't case studies. These are <span className="text-red-500 font-bold">WAR STORIES</span> of how I destroyed inefficiency and built empires.
            </p>
            <div className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-bold">
              $100M+ IN PROVEN RESULTS
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                THE <span className="text-red-500">BODY COUNT</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every transformation has a story. These are the ones that made history.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* $100M Cost Optimization */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="text-red-500 text-4xl mb-4">💰</div>
                <h3 className="text-3xl font-black mb-4">$100M COST OPTIMIZATION</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Redesigned entire cost structure across multiple Fortune 500 enterprises, delivering $100M+ in annual savings.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Supply chain optimization</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Process reengineering</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Financial model redesign</span>
                  </div>
                </div>
                <div className="bg-red-900 p-4 rounded-lg">
                  <div className="text-red-500 font-bold mb-2">RESULT:</div>
                  <div className="text-white">$100M+ annual cost reduction</div>
                </div>
              </div>

              {/* Central Dock Innovation */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="text-red-500 text-4xl mb-4">🚀</div>
                <h3 className="text-3xl font-black mb-4">CENTRAL DOCK INNOVATION</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Designed and implemented revolutionary logistics system that became Amazon's network standard.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Logistics system design</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Network optimization</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Amazon-wide adoption</span>
                  </div>
                </div>
                <div className="bg-red-900 p-4 rounded-lg">
                  <div className="text-red-500 font-bold mb-2">RESULT:</div>
                  <div className="text-white">Became Amazon network standard</div>
                </div>
              </div>

              {/* Executive Alignment */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="text-red-500 text-4xl mb-4">🎯</div>
                <h3 className="text-3xl font-black mb-4">EXECUTIVE ALIGNMENT</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Orchestrated complete executive team alignment across complex enterprise transformation.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Leadership alignment</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Change management</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Strategic execution</span>
                  </div>
                </div>
                <div className="bg-red-900 p-4 rounded-lg">
                  <div className="text-red-500 font-bold mb-2">RESULT:</div>
                  <div className="text-white">100% executive buy-in achieved</div>
                </div>
              </div>

              {/* Amazon Ascent */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="text-red-500 text-4xl mb-4">🏆</div>
                <h3 className="text-3xl font-black mb-4">AMAZON ASCENT</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Rapid rise from operations to principal level, delivering massive scale transformations.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Principal-level impact</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Scale operations</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Enterprise transformation</span>
                  </div>
                </div>
                <div className="bg-red-900 p-4 rounded-lg">
                  <div className="text-red-500 font-bold mb-2">RESULT:</div>
                  <div className="text-white">Principal-level transformation leader</div>
                </div>
              </div>

              {/* Tech Without Elite Credentials */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="text-red-500 text-4xl mb-4">💪</div>
                <h3 className="text-3xl font-black mb-4">TECH WITHOUT ELITE CREDENTIALS</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Proved that operational excellence trumps elite credentials in tech transformation.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Merit-based leadership</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Results-driven approach</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Operational excellence</span>
                  </div>
                </div>
                <div className="bg-red-900 p-4 rounded-lg">
                  <div className="text-red-500 font-bold mb-2">RESULT:</div>
                  <div className="text-white">Elite-level results without elite credentials</div>
                </div>
              </div>

              {/* Forte Analysis */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="text-red-500 text-4xl mb-4">🔍</div>
                <h3 className="text-3xl font-black mb-4">FORTE ANALYSIS</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Comprehensive analysis integrating Central Dock innovation with strategic insights.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Strategic analysis</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">Innovation integration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-3">⚡</span>
                    <span className="text-white">System optimization</span>
                  </div>
                </div>
                <div className="bg-red-900 p-4 rounded-lg">
                  <div className="text-red-500 font-bold mb-2">RESULT:</div>
                  <div className="text-white">Integrated transformation strategy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              READY TO <span className="text-red-500">JOIN THE BODY COUNT?</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Your transformation story could be next. Let's make history together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                START YOUR TRANSFORMATION
              </a>
              <a
                href="/services"
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300"
              >
                SEE MY WEAPONS
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 