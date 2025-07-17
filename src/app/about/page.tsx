'use client';

import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <main className="min-h-screen">
      <ScrollReveal />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-office.jpg"
            alt="Nick Plumb - Strategic Transformation Architect"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Your Strategic Transformation Architect
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Military Veteran • Amazon Principal • Ops Problem Solver Extraordinaire
            </p>
          </div>
        </div>
      </section>

      {/* About Nick */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                I Don't Just Solve Problems - I Redesign Systems That Create Value
              </h2>
              <p className="text-lg mb-6 text-gray-700">
                As the force behind PlumbLineHR, I bring battle-tested strategies from military operations and Amazon's high-stakes environment to crush your operational challenges and unlock massive value.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                From $100M+ cost optimizations to network-wide innovations that become industry standards - I fix any ops problem with a triple-threat approach that combines operational excellence, systems innovation, and financial optimization.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$100M+</div>
                  <div className="text-gray-600">Cost Reduction Identified</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$9.3B</div>
                  <div className="text-gray-600">Operational Spend Analyzed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/ceo.jpg"
                alt="Nick Plumb"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            My Battle-Tested Background
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Military Operations</h3>
              <p className="text-gray-700 mb-4">
                My military background taught me how to make critical decisions under pressure, lead teams in high-stakes environments, and optimize systems for maximum efficiency and effectiveness.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">Strategic planning and execution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">Team leadership under pressure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">System optimization for mission success</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Amazon Principal</h3>
              <p className="text-gray-700 mb-4">
                At Amazon, I led complex operational transformations, managed massive scale operations, and developed innovations that became network-wide standards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">Led 3 complex Amazon launches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">Created Central Dock innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">Managed $9.3B operational spend</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            My Strategic Transformation Methodology
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Assess & Analyze',
                description: 'Comprehensive analysis of your operational challenges, identifying root causes and opportunities for transformation.'
              },
              {
                step: '02',
                title: 'Design & Strategize',
                description: 'Develop strategic roadmap with battle-tested approaches tailored to your specific operational environment.'
              },
              {
                step: '03',
                title: 'Execute & Optimize',
                description: 'Implement solutions with hands-on support, continuously optimizing for maximum impact and value creation.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            My Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence Under Fire',
                description: 'Delivering exceptional results even in the most challenging operational environments.'
              },
              {
                title: 'Innovation Through Experience',
                description: 'Creating breakthrough solutions based on real-world experience and proven methodologies.'
              },
              {
                title: 'Value-Driven Transformation',
                description: 'Focusing on measurable outcomes that create lasting value for your organization.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Let's discuss how my battle-tested approach can solve your operational challenges and unlock massive value.
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