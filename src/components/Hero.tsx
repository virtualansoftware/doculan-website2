import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <div className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 mb-6">
              Document Management & E-Signature Solution
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Streamline your document workflow, collect signatures securely, and build custom forms—all in one powerful platform designed for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button variant="primary" size="lg">Start Free Trial</Button>
              <Button variant="outline" size="lg">See Demo</Button>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm text-gray-600">
              <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>14-day free trial</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-blue-600 h-12 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6 bg-gray-50 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Application Dashboard Preview</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full z-[-1]"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-200 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;