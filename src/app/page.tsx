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
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl font-bold mb-6 text-white gradient-text">
              Transform Your HR Operations
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Streamline your workforce management with our innovative HR solutions
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/contact"
                className="glass hover-lift px-8 py-3 rounded-md font-semibold text-white"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="bg-white hover-lift px-8 py-3 rounded-md font-semibold text-primary"
              >
                Learn More
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center reveal">
            Why Choose PlumbLine HR?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                title: 'Innovative Technology',
                description: 'Cutting-edge HR solutions powered by advanced analytics and AI',
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Expert Support',
                description: '24/7 dedicated support from HR professionals',
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: 'Data Security',
                description: 'Enterprise-grade security with advanced encryption',
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg card-hover animate-slide-up">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Parallax */}
      <section className="py-20 parallax relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-white reveal">
            {[
              { number: '500+', label: 'Enterprise Clients' },
              { number: '50K+', label: 'Employees Managed' },
              { number: '40%', label: 'Average Time Saved' }
            ].map((stat, index) => (
              <div key={index} className="text-center glass p-8 rounded-lg">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center reveal">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {[
              {
                quote: "PlumbLine HR has transformed how we manage our workforce. We've reduced our HR administrative time by 45% and improved employee satisfaction significantly.",
                author: "Sarah Johnson",
                role: "HR Director, TechCorp Inc.",
                image: "/images/testimonial1.jpg"
              },
              {
                quote: "The analytics tools have given us invaluable insights into our workforce. We've made better decisions and improved our retention rates.",
                author: "Michael Chen",
                role: "CEO, GrowthStart",
                image: "/images/testimonial2.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg card-hover animate-slide-up">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
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
              Ready to Transform Your HR?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Join industry leaders who have already revolutionized their workforce management with PlumbLine HR.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary hover-lift text-white px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 