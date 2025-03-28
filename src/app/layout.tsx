import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Logo from './components/Logo'
import ClientAuthProvider from '@/components/ClientAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PlumbLine HR - Modern HR Solutions',
  description: 'Empowering businesses with modern HR solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientAuthProvider>
          <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <a href="/" className="flex items-center">
                  <Logo className="w-40 h-10" />
                </a>
                <div className="hidden md:flex items-center space-x-8">
                  <a href="/services" className="text-gray-600 hover:text-primary transition-colors">
                    Services
                  </a>
                  <a href="/about" className="text-gray-600 hover:text-primary transition-colors">
                    About
                  </a>
                  <a href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                    Contact
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="/login"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Login
                  </a>
                  <a
                    href="/signup"
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </nav>
          </header>
          {children}
          <footer className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <Logo className="w-32 h-8 mb-4" />
                  <p className="text-gray-600">
                    Empowering businesses with modern HR solutions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/services" className="text-gray-600 hover:text-primary">
                        HR Management
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-gray-600 hover:text-primary">
                        Analytics
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-gray-600 hover:text-primary">
                        Consulting
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/about" className="text-gray-600 hover:text-primary">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/careers" className="text-gray-600 hover:text-primary">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="text-gray-600 hover:text-primary">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Contact</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">
                      <a href="mailto:contact@plumblinehr.com" className="hover:text-primary">
                        contact@plumblinehr.com
                      </a>
                    </li>
                    <li className="text-gray-600">
                      <a href="tel:+1234567890" className="hover:text-primary">
                        (123) 456-7890
                      </a>
                    </li>
                    <li className="text-gray-600">
                      123 Business Ave, Suite 100<br />
                      San Francisco, CA 94107
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} PlumbLine HR. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ClientAuthProvider>
      </body>
    </html>
  )
} 