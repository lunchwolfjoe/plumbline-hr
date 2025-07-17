import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Logo from './components/Logo'
import ClientAuthProvider from '@/components/ClientAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PlumbLineHR - Enterprise Transformation & AI Strategy',
  description: 'Military veteran and Amazon principal delivering enterprise transformations and AI strategy that generate hundreds of millions in value.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <ClientAuthProvider>
          <header className="bg-black border-b border-gray-800">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                <a href="/" className="flex items-center">
                  <div className="text-2xl font-black text-white">
                    <span className="text-red-500">PLUMB</span>LINE<span className="text-red-500">HR</span>
                  </div>
                </a>
                <div className="hidden md:flex items-center space-x-8">
                  <a href="/services" className="text-gray-300 hover:text-red-500 transition-colors font-semibold">
                    ENTERPRISE WEAPONS
                  </a>
                  <a href="/case-studies" className="text-gray-300 hover:text-red-500 transition-colors font-semibold">
                    WAR STORIES
                  </a>
                  <a href="/about" className="text-gray-300 hover:text-red-500 transition-colors font-semibold">
                    THE PREDATOR
                  </a>
                  <a href="/contact" className="text-gray-300 hover:text-red-500 transition-colors font-semibold">
                    CONTACT
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-red-500 transition-colors font-semibold"
                  >
                    BOOK CONSULTATION
                  </a>
                  <a
                    href="/contact"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                  >
                    START TRANSFORMATION
                  </a>
                </div>
              </div>
            </nav>
          </header>
          {children}
          <footer className="bg-gray-900 border-t border-gray-800 py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-2xl font-black text-white mb-4">
                    <span className="text-red-500">PLUMB</span>LINE<span className="text-red-500">HR</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Enterprise transformation and AI strategy that generates hundreds of millions in value.
                  </p>
                  <div className="flex space-x-4">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      MILITARY VETERAN
                    </div>
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      AMAZON PRINCIPAL
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-4">ENTERPRISE WEAPONS</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/services" className="text-gray-300 hover:text-red-500 transition-colors">
                        Operational Warfare
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-gray-300 hover:text-red-500 transition-colors">
                        Systems Innovation
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-gray-300 hover:text-red-500 transition-colors">
                        AI Transformation
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-gray-300 hover:text-red-500 transition-colors">
                        Financial Dominance
                      </a>
                    </li>
                    <li>
                      <a href="/case-studies" className="text-gray-300 hover:text-red-500 transition-colors">
                        War Stories
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-4">TRANSFORMATION LEVELS</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/services" className="text-gray-300 hover:text-red-500 transition-colors">
                        Strategic Assessment - $50K
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-gray-300 hover:text-red-500 transition-colors">
                        Transformation Execution - $250K
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-gray-300 hover:text-red-500 transition-colors">
                        Enterprise Partnership - $500K+
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-4">CONTACT THE PREDATOR</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">
                      <a href="mailto:nick@plumblinehr.com" className="hover:text-red-500 transition-colors">
                        nick@plumblinehr.com
                      </a>
                    </li>
                    <li className="text-gray-300">
                      <a href="tel:+1234567890" className="hover:text-red-500 transition-colors">
                        (123) 456-7890
                      </a>
                    </li>
                    <li className="text-gray-300">
                      Ready to dominate your market?<br />
                      Let's discuss your transformation.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} PlumbLineHR. All rights reserved. | Zero failed transformations.</p>
              </div>
            </div>
          </footer>
        </ClientAuthProvider>
      </body>
    </html>
  )
} 