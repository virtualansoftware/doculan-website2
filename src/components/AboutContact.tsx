import React from 'react';
import { Mail, MapPin, Phone, MessageSquare, FileText, FileSignature, FormInput, Shield } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import Button from './Button';

const AboutContact: React.FC = () => {
  return (
    <Section id="about" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* About Section */}
        <div>
          <SectionTitle 
            title="About DocuSign+"
            subtitle="Simplifying document workflows since 2020"
          />
          
          <div className="space-y-6 text-gray-600">
            <p>
              DocuSign+ was founded with a simple mission: to eliminate paperwork hassles for businesses of all sizes. We believe that managing documents, collecting signatures, and gathering information should be simple, secure, and efficient.
            </p>
            
            <p>
              Our team of document workflow experts has built a platform that combines powerful features with an intuitive interface, making it accessible to everyone from solo entrepreneurs to large enterprises.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mr-3 mt-1">
                    <FileText size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Simplicity</h4>
                    <p className="text-sm text-gray-600">Making complex workflows simple</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mr-3 mt-1">
                    <FileSignature size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Efficiency</h4>
                    <p className="text-sm text-gray-600">Saving time on every document</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mr-3 mt-1">
                    <FormInput size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Innovation</h4>
                    <p className="text-sm text-gray-600">Constantly improving our solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mr-3 mt-1">
                    <Shield size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Security</h4>
                    <p className="text-sm text-gray-600">Protecting your sensitive data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div>
          <SectionTitle 
            title="Contact Us"
            subtitle="We'd love to hear from you"
          />
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>
              
              <Button variant="primary" fullWidth>
                Send Message
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Email Us</p>
                    <a href="mailto:support@docusignplus.com" className="text-blue-600 hover:underline">
                      support@docusignplus.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Call Us</p>
                    <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Visit Us</p>
                    <p className="text-gray-600">
                      123 Tech Boulevard, Suite 456<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Live Chat</p>
                    <p className="text-gray-600">
                      Available 24/7 for quick support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutContact;