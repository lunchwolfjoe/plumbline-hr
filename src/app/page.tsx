'use client';

import Image from 'next/image';
import ScrollReveal from './components/ScrollReveal';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollReveal />
      
      {/* Hero Section - Badass Military/Amazon Positioning */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nick-forest.jpg"
            alt="Nick Plumb - Military Veteran & Amazon Principal"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 tracking-wider">
              MILITARY VETERAN • AMAZON PRINCIPAL • AI TRANSFORMATION EXPERT
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="text-red-500">BREAK</span> THE SYSTEM
              <br />
              <span className="text-gray-300">BUILD THE FUTURE</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-2xl md:text-3xl font-light mb-12 max-w-4xl mx-auto leading-relaxed">
              I don't optimize your operations. I <span className="text-red-500 font-bold">REDESIGN YOUR ENTIRE BUSINESS MODEL</span> with AI transformation that generates hundreds of millions in new value.
            </p>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <div className="text-4xl font-black text-red-500 mb-2">$100M+</div>
                <div className="text-gray-300">Cost Reduction Delivered</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <div className="text-4xl font-black text-red-500 mb-2">$9.3B</div>
                <div className="text-gray-300">Operational Spend Analyzed</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <div className="text-4xl font-black text-red-500 mb-2">0</div>
                <div className="text-gray-300">Failed Transformations</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <div className="text-4xl font-black text-red-500 mb-2">AI</div>
                <div className="text-gray-300">Transformation Expert</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105">
                BOOK ENTERPRISE CONSULTATION
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-black text-white px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300">
                VIEW TRANSFORMATION PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                I <span className="text-red-500">DESTROY</span> INEFFICIENCY
                <br />
                I <span className="text-red-500">BUILD</span> EMPIRES
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                While other consultants give you PowerPoint decks, I give you operational weapons that generate measurable, massive returns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4">OPERATIONAL WARFARE</h3>
                <p className="text-gray-300 mb-6">
                  I don't just identify problems. I declare war on inefficiency and build systems that dominate your competition.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Supply Chain Optimization</li>
                  <li>• Process Reengineering</li>
                  <li>• Cost Structure Overhaul</li>
                </ul>
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">SYSTEMS INNOVATION</h3>
                <p className="text-gray-300 mb-6">
                  I build technology and process architectures that don't just work—they create unfair competitive advantages.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Digital Transformation</li>
                  <li>• Automation Strategy</li>
                  <li>• Data-Driven Operations</li>
                </ul>
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4">AI TRANSFORMATION</h3>
                <p className="text-gray-300 mb-6">
                  I design agentic AI transformation plans that don't just automate—they create intelligent systems that think and act autonomously.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Agentic AI Strategy</li>
                  <li>• Autonomous Systems Design</li>
                  <li>• AI-Powered Operations</li>
                </ul>
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-4">FINANCIAL DOMINANCE</h3>
                <p className="text-gray-300 mb-6">
                  I don't save you money. I redesign your entire financial model to generate exponential returns.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Cost Optimization</li>
                  <li>• Revenue Enhancement</li>
                  <li>• Investment Strategy</li>
                </ul>
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
                <div className="text-2xl font-bold text-gray-300">$1B+</div>
                <div className="text-gray-500">Revenue Companies</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="text-2xl font-bold text-gray-300">10K+</div>
                <div className="text-gray-500">Employee Organizations</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="text-2xl font-bold text-gray-300">Global</div>
                <div className="text-gray-500">Operations</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="text-2xl font-bold text-gray-300">C-Suite</div>
                <div className="text-gray-500">Direct Access</div>
              </div>
            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300">
              SEE IF YOU QUALIFY
            </button>
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
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-3xl font-bold mb-4">STRATEGIC ASSESSMENT</div>
                <div className="text-4xl font-black mb-4">$50K</div>
                <div className="text-gray-400 mb-6">90-Day Deep Dive</div>
                <ul className="text-gray-300 space-y-3 mb-8 text-left">
                  <li>• Operational Audit</li>
                  <li>• AI Transformation Roadmap</li>
                  <li>• ROI Projections</li>
                  <li>• Implementation Strategy</li>
                </ul>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-bold transition-all duration-300">
                  BOOK ASSESSMENT
                </button>
              </div>
              
              <div className="bg-red-900 p-8 rounded-lg border-2 border-red-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-black px-6 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                <div className="text-red-500 text-3xl font-bold mb-4">TRANSFORMATION EXECUTION</div>
                <div className="text-4xl font-black mb-4">$250K</div>
                <div className="text-gray-400 mb-6">6-Month Implementation</div>
                <ul className="text-gray-300 space-y-3 mb-8 text-left">
                  <li>• Full System Redesign</li>
                  <li>• AI Implementation</li>
                  <li>• Performance Monitoring</li>
                  <li>• Ongoing Optimization</li>
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-all duration-300">
                  START TRANSFORMATION
                </button>
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="text-red-500 text-3xl font-bold mb-4">ENTERPRISE PARTNERSHIP</div>
                <div className="text-4xl font-black mb-4">$500K+</div>
                <div className="text-gray-400 mb-6">12-Month Partnership</div>
                <ul className="text-gray-300 space-y-3 mb-8 text-left">
                  <li>• Complete Business Overhaul</li>
                  <li>• AI Strategy & Implementation</li>
                  <li>• Strategic Advisory</li>
                  <li>• Performance Guarantees</li>
                </ul>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-bold transition-all duration-300">
                  DISCUSS PARTNERSHIP
                </button>
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