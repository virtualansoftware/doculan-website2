import React from 'react';
import { FileText, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Doculan</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Streamline your document workflow, collect signatures securely, and create custom forms—all in one powerful platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Guides & Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">API Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Status Page</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-r-md"
              >
                <ArrowRight size={20} />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Doculan. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;