'use client';

import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';

export default function Services() {
  return (
    <main className="min-h-screen">
      <ScrollReveal />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Strategic transformation services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My Strategic Transformation Arsenal
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Three battle-tested approaches to crush your operational challenges and unlock massive value
            </p>
          </div>
        </div>
      </section>

      {/* Triple Threat Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            My Triple-Threat Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Operational Excellence',
                subtitle: 'Making things work better under fire',
                description: 'Transform your operations to achieve best-in-class performance through systematic improvements and leadership development.',
                image: '/images/analytics.jpg',
                features: [
                  'Complex launch management',
                  'Leadership development programs',
                  'Training system optimization',
                  'Peak operations management'
                ]
              },
              {
                title: 'Systems Innovation',
                subtitle: 'Redesigning how things work to dominate',
                description: 'Create network-wide transformations that become industry standards and eliminate systemic inefficiencies.',
                image: '/images/integration.jpg',
                features: [
                  'Network-wide system redesign',
                  'Innovation standardization',
                  'Program development leadership',
                  'Centralization strategies'
                ]
              },
              {
                title: 'Financial Optimization',
                subtitle: 'Making things work more efficiently to crush costs',
                description: 'Identify and implement massive cost reduction opportunities while maintaining competitive positioning.',
                image: '/images/consulting.jpg',
                features: [
                  'Cost reduction identification',
                  'Operational spend analysis',
                  'Executive alignment leadership',
                  'Strategic cost optimization'
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 italic">{service.subtitle}</p>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Levels */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Investment Levels
          </h2>
          <p className="text-xl mb-12 text-center text-gray-300 max-w-3xl mx-auto">
            Choose the level of strategic transformation that matches your operational challenges and growth ambitions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                level: 'Strategic Assessment',
                price: '$15,000',
                duration: '2-3 weeks',
                description: 'Comprehensive analysis of your operational challenges with actionable recommendations.',
                deliverables: [
                  'Operational efficiency audit',
                  'Cost optimization analysis',
                  'Strategic roadmap development',
                  'Executive presentation'
                ]
              },
              {
                level: 'Transformation Implementation',
                price: '$75,000',
                duration: '3-6 months',
                description: 'Full-scale operational transformation with hands-on implementation support.',
                deliverables: [
                  'System redesign and implementation',
                  'Leadership development program',
                  'Process optimization',
                  'Performance monitoring setup'
                ]
              },
              {
                level: 'Strategic Partnership',
                price: 'Custom',
                duration: 'Ongoing',
                description: 'Long-term strategic partnership for continuous operational excellence and innovation.',
                deliverables: [
                  'Ongoing strategic advisory',
                  'Continuous improvement programs',
                  'Innovation pipeline development',
                  'Executive coaching and mentoring'
                ]
              }
            ].map((package_, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">{package_.level}</h3>
                <div className="text-3xl font-bold mb-2 text-primary">{package_.price}</div>
                <div className="text-gray-400 mb-4">{package_.duration}</div>
                <p className="text-gray-300 mb-6">{package_.description}</p>
                <ul className="space-y-2">
                  {package_.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-300">{deliverable}</span>
                    </li>
                  ))}
                </ul>
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
              Let's discuss how my triple-threat approach can solve your operational challenges and unlock massive value.
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