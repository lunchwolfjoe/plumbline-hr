import Image from 'next/image';
import ROICalculator from '../components/ROICalculator';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Modern HR technology"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Enterprise-Grade HR Solutions
            </h1>
            <p className="text-xl mb-8">
              Comprehensive HR management tools powered by cutting-edge technology and industry expertise
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Services</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/hr-platform.jpg"
                  alt="HR Management Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">HR Management Platform</h3>
              <p className="text-gray-600 mb-6">
                Our flagship platform combines powerful features with intuitive design to handle all your HR needs in one place.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Employee Onboarding & Offboarding
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Time & Attendance Management
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Leave Management
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Performance Reviews
                </li>
              </ul>
              <div className="text-primary font-semibold text-xl">Starting at $99/month</div>
              <p className="text-gray-500 text-sm mt-2">Includes core features and basic support</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/analytics.jpg"
                  alt="Advanced Analytics"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 mb-6">
                Make data-driven decisions with our comprehensive analytics and reporting tools.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom Reports & Dashboards
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Predictive Analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Employee Insights
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Compliance Monitoring
                </li>
              </ul>
              <div className="text-primary font-semibold text-xl">Starting at $199/month</div>
              <p className="text-gray-500 text-sm mt-2">Includes advanced analytics and priority support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/consulting.jpg"
                  alt="HR Consulting"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">HR Consulting</h3>
              <p className="text-gray-600 mb-4">
                Expert guidance to optimize your HR processes and policies.
              </p>
              <div className="text-primary font-semibold">Custom pricing</div>
              <p className="text-gray-500 text-sm mt-2">Tailored to your needs</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/training.jpg"
                  alt="Training & Support"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Training & Support</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive training programs and ongoing support for your team.
              </p>
              <div className="text-primary font-semibold">Starting at $499/quarter</div>
              <p className="text-gray-500 text-sm mt-2">Includes all training materials</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/integration.jpg"
                  alt="Integration Services"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Integration Services</h3>
              <p className="text-gray-600 mb-4">
                Seamless integration with your existing business systems.
              </p>
              <div className="text-primary font-semibold">Custom pricing</div>
              <p className="text-gray-500 text-sm mt-2">Based on complexity</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Calculate Your ROI</h2>
            <p className="text-gray-600 mb-8 text-lg">
              On average, our clients save 40% of their HR management time and reduce administrative costs by 30%.
              Use our ROI calculator to see how much you could save.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <p className="text-gray-600">Time Saved on HR Operations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">30%</div>
                <p className="text-gray-600">Reduction in Administrative Costs</p>
              </div>
            </div>
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/testimonial1.jpg"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-gray-500">HR Director, TechCorp Inc.</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "PlumbLine HR has transformed how we manage our workforce. We've reduced our HR administrative time by 45% and improved employee satisfaction significantly."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/testimonial2.jpg"
                    alt="Michael Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">Michael Chen</div>
                  <div className="text-gray-500">CEO, GrowthStart</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The analytics tools have given us invaluable insights into our workforce. We've made better decisions and improved our retention rates."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Schedule a demo to see how PlumbLine HR can transform your business.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 