'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/thinkerheadshot.jpg"
            alt="Contact Nick Plumb"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-black mb-8">
              CONTACT THE <span className="text-red-500">PREDATOR</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-12 max-w-4xl mx-auto">
              Ready to dominate your market? Let's discuss your transformation.
            </p>
            <div className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-bold">
              FORTUNE 500 TRANSFORMATIONS ONLY
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl font-black mb-8">
                  READY TO <span className="text-red-500">DOMINATE</span>?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Stop thinking small. Start thinking like a predator. Your competition is already behind you.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-red-500 font-bold mb-2">WHO I WORK WITH</div>
                    <div className="text-white">Fortune 500 companies that want to dominate their markets, not just compete in them.</div>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-red-500 font-bold mb-2">INVESTMENT LEVELS</div>
                    <div className="text-white">Strategic Assessment: $50K | Transformation Execution: $250K | Enterprise Partnership: $500K+</div>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-red-500 font-bold mb-2">EXPERTISE</div>
                    <div className="text-white">Military Veteran • Walmart Store Manager • Amazon Principal • AI Transformation Expert</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">BOOK YOUR TRANSFORMATION</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 focus:outline-none transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 focus:outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your transformation needs..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      BOOK YOUR TRANSFORMATION
                    </button>
                  </div>
                </form>
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
              STOP THINKING <span className="text-red-500">SMALL</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Your competition is already behind you. Start thinking like a predator.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="text-red-500 text-3xl font-black mb-2">$100M+</div>
                <div className="text-gray-300">Cost Reduction Delivered</div>
              </div>
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="text-red-500 text-3xl font-black mb-2">$9.3B</div>
                <div className="text-gray-300">Operational Spend Analyzed</div>
              </div>
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="text-red-500 text-3xl font-black mb-2">0</div>
                <div className="text-gray-300">Failed Transformations</div>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-16 py-6 rounded-lg text-2xl font-bold transition-all duration-300 transform hover:scale-105">
              START YOUR DOMINATION
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 