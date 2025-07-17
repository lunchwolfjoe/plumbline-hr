import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-office.jpg"
            alt="Modern office environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Transforming HR Through Innovation
            </h1>
            <p className="text-xl mb-8">
              Leveraging cutting-edge technology and industry expertise to revolutionize workforce management
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section with Visual */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/team-meeting.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                At PlumbLine HR, we're pioneering the future of human resources management through 
                innovative technology solutions and data-driven insights. Our mission is to empower 
                organizations to make strategic decisions about their most valuable asset - their people.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                By combining advanced analytics, artificial intelligence, and human expertise, we're 
                helping businesses optimize their workforce management processes and drive sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Icons */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We push the boundaries of HR technology, developing solutions that anticipate and 
                address future workforce challenges through cutting-edge innovation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain uncompromising standards in our solutions, ensuring reliability, 
                security, and exceptional user experience across all our services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Partnership</h3>
              <p className="text-gray-600">
                We build lasting relationships with our clients, working collaboratively to 
                achieve their strategic HR objectives and drive organizational success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Profiles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/ceo.jpg"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Dr. Sarah Chen</h3>
              <p className="text-gray-500 mb-2">Chief Executive Officer</p>
              <p className="text-gray-600">
                PhD in Organizational Psychology, 15+ years in HR technology innovation
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/cto.jpg"
                  alt="CTO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michael Rodriguez</h3>
              <p className="text-gray-500 mb-2">Chief Technology Officer</p>
              <p className="text-gray-600">
                MS in Computer Science, AI/ML specialist with 12+ years in HR tech
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/cso.jpg"
                  alt="CSO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Dr. Emily Thompson</h3>
              <p className="text-gray-500 mb-2">Chief Strategy Officer</p>
              <p className="text-gray-600">
                PhD in Business Strategy, 20+ years in HR consulting and transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section with Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Global Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600 text-lg">Enterprise Clients</p>
              <p className="text-gray-500 text-sm mt-2">Across 30+ countries</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-primary mb-2">50K+</div>
              <p className="text-gray-600 text-lg">Employees Managed</p>
              <p className="text-gray-500 text-sm mt-2">Through our platform</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-primary mb-2">40%</div>
              <p className="text-gray-600 text-lg">Average Time Saved</p>
              <p className="text-gray-500 text-sm mt-2">On HR operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="py-20 relative">
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
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your HR?</h2>
            <p className="text-xl mb-8">
              Join industry leaders who have already revolutionized their workforce management with PlumbLine HR.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 