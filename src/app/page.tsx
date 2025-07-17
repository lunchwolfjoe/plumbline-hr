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
    <main className="min-h-screen">
      <ScrollReveal />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-office.jpg"
            alt="Modern office environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-5xl mx-auto text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white gradient-text">
              I Don't Just Solve Problems - I Redesign Systems That Create Value
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90 font-semibold">
              Military Veteran • Amazon Principal • Ops Problem Solver Extraordinaire
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto">
              From $100M+ cost optimizations to network-wide innovations that become industry standards - I fix any ops problem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="glass hover-lift px-8 py-4 rounded-md font-semibold text-white text-lg"
              >
                Schedule Your Strategic Assessment <span className="ml-2">→</span>
              </a>
              <a
                href="/services"
                className="bg-white hover-lift px-8 py-4 rounded-md font-semibold text-gray-900 text-lg"
              >
                See My Arsenal
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              When Your Ops Are Broken, I'm The Fixer You Call
            </h2>
            <p className="text-xl mb-12 text-gray-300">
              As the force behind PlumbLineHR, I bring battle-tested strategies from military operations and Amazon's high-stakes environment to crush your operational challenges and unlock massive value.
            </p>
            <div className="relative w-64 h-64 mx-auto mb-8">
              <Image
                src="/images/ceo.jpg"
                alt="Nick Plumb in action"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center reveal">
            My Battle-Proven Track Record
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {[
              {
                number: '$100M+',
                description: 'Annual cost reduction opportunities identified and validated',
                icon: '💰'
              },
              {
                number: '$9.3B',
                description: 'Operational spend analyzed and optimized',
                icon: '📊'
              },
              {
                number: 'Network-Wide',
                description: 'System transformations that became industry standards',
                icon: '🌐'
              },
              {
                number: 'Multiple',
                description: 'Innovations created that scaled across entire organizations',
                icon: '💡'
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg card-hover animate-slide-up text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold mb-4 text-primary">{stat.number}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Triple Threat Arsenal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center reveal">
            My Triple-Threat Arsenal
          </h2>
          <p className="text-xl mb-12 text-center text-gray-600 max-w-3xl mx-auto">
            Most consultants have one trick. I've got three locked and loaded - forged in military ops and Amazon's war rooms.
          </p>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                title: 'Operational Excellence',
                subtitle: 'Making things work better under fire',
                image: '/images/analytics.jpg',
                achievements: [
                  'Led 3 complex Amazon launches with best-in-class results',
                  'Developed 6+ leaders to senior management roles',
                  'Created training programs delivering 40%+ improvements',
                  'Managed peak operations with zero issues'
                ]
              },
              {
                title: 'Systems Innovation',
                subtitle: 'Redesigning how things work to dominate',
                image: '/images/integration.jpg',
                achievements: [
                  'Created Central Dock - network-wide transformation',
                  'Designed innovations that became network standards',
                  'Led $200MM program development with S&OP validation',
                  'Transformed distributed inefficiencies into centralized advantages'
                ]
              },
              {
                title: 'Financial Optimization',
                subtitle: 'Making things work more efficiently to crush costs',
                image: '/images/consulting.jpg',
                achievements: [
                  'Identified $100M+ in annual cost reduction opportunities',
                  'Analyzed $9.3B in operational spend',
                  'Led executive alignment on controversial policy decisions',
                  'Designed cost optimization strategies maintaining competitive positioning'
                ]
              }
            ].map((expertise, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg card-hover animate-slide-up">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={expertise.image}
                    alt={expertise.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{expertise.title}</h3>
                <p className="text-gray-600 mb-6 italic">{expertise.subtitle}</p>
                <ul className="space-y-2">
                  {expertise.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center reveal">
            My Signature Victories
          </h2>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                title: 'OCEANS-CARGO Cost Analysis',
                description: 'Developed comprehensive fraud, waste, and abuse framework that identified $100M in annual cost reduction opportunities across $9.3B in wage spend.',
                image: '/images/cso.jpg',
                link: '/case-studies#cost-optimization'
              },
              {
                title: 'Central Dock Innovation',
                description: 'Redesigned Amazon\'s entire fulfillment network, eliminating post-slam defects while reducing variable headcount through systematic optimization.',
                image: '/images/cto.jpg',
                link: '/case-studies#central-dock'
              },
              {
                title: 'Executive Alignment Leadership',
                description: 'Led controversial policy decisions affecting hundreds of thousands of associates, achieving 19.8% cost reduction through standardization.',
                image: '/images/cso.jpg',
                link: '/case-studies#executive-alignment'
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg card-hover animate-slide-up">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{caseStudy.title}</h3>
                <p className="text-gray-300 mb-6">{caseStudy.description}</p>
                <a href={caseStudy.link} className="text-primary hover:text-primary/80 font-semibold">
                  Deploy Intel →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-4xl font-bold mb-8 gradient-text">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Join industry leaders who have already revolutionized their operations with PlumbLineHR's strategic transformation approach.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary hover-lift text-white px-8 py-4 rounded-md font-semibold hover:bg-primary/90 transition-colors text-lg"
            >
              Schedule Your Strategic Assessment
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 