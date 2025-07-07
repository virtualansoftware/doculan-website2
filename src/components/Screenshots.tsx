import React from 'react';
import { MonitorSmartphone, Laptop, TabletSmartphone, FileText, FileSignature, FormInput } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';

interface ScreenshotTabProps {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const ScreenshotTab: React.FC<ScreenshotTabProps> = ({ icon, title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center p-4 border-b-2 ${
        isActive 
          ? 'border-blue-600 text-blue-600' 
          : 'border-transparent text-gray-500 hover:text-gray-700'
      } transition-colors duration-200`}
    >
      <span className="mr-2">{icon}</span>
      <span className="font-medium">{title}</span>
    </button>
  );
};

const Screenshots: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('document');
  
  return (
    <Section id="screenshots" background="white">
      <SectionTitle 
        title="See It in Action"
        subtitle="Explore our intuitive interface designed for productivity across all your devices."
        centered
      />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center border-b border-gray-200 mb-8 overflow-x-auto">
          <ScreenshotTab 
            icon={<FileText size={20} />} 
            title="Document Manager" 
            isActive={activeTab === 'document'} 
            onClick={() => setActiveTab('document')}
          />
          <ScreenshotTab 
            icon={<FileSignature size={20} />} 
            title="E-Signature" 
            isActive={activeTab === 'signature'} 
            onClick={() => setActiveTab('signature')}
          />
          <ScreenshotTab 
            icon={<FormInput size={20} />} 
            title="Form Builder" 
            isActive={activeTab === 'form'} 
            onClick={() => setActiveTab('form')}
          />
        </div>
        
        <div className="relative">
          {/* Browser frame */}
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-8 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto bg-white rounded-full h-5 w-1/2 flex items-center justify-center text-xs text-gray-500">
                doculan.ai/{activeTab === 'document' ? 'documents' : activeTab === 'signature' ? 'signatures' : 'forms'}
              </div>
            </div>
            
            <div className="aspect-video bg-white p-4 flex items-center justify-center">
              {activeTab === 'document' && (
                <div className="w-full h-full flex flex-col">
                  <div className="h-12 bg-blue-600 text-white flex items-center px-6 rounded-t-lg">
                    <h3 className="font-medium">Document Dashboard</h3>
                  </div>
                  <div className="flex-1 border border-gray-200 rounded-b-lg p-4 bg-gray-50">
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="col-span-3">
                        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                        <div className="grid grid-cols-3 gap-4">
                          {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-white p-3 rounded border border-gray-200 shadow-sm">
                              <div className="h-20 bg-gray-100 mb-2 rounded"></div>
                              <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-1 bg-white p-4 rounded border border-gray-200 shadow-sm">
                        <div className="h-6 bg-gray-200 rounded w-2/3 mb-4"></div>
                        <div className="space-y-3">
                          {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="h-4 bg-gray-100 rounded"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'signature' && (
                <div className="w-full h-full flex flex-col">
                  <div className="h-12 bg-blue-600 text-white flex items-center px-6 rounded-t-lg">
                    <h3 className="font-medium">E-Signature Request</h3>
                  </div>
                  <div className="flex-1 border border-gray-200 rounded-b-lg p-4 bg-gray-50">
                    <div className="flex h-full">
                      <div className="w-2/3 pr-4">
                        <div className="bg-white border border-gray-200 h-full rounded shadow-sm p-4">
                          <div className="h-8 bg-gray-100 mb-4 w-1/2 rounded"></div>
                          <div className="space-y-2 mb-4">
                            {[1, 2, 3, 4, 5].map((item) => (
                              <div key={item} className="h-4 bg-gray-100 rounded"></div>
                            ))}
                          </div>
                          <div className="h-8 bg-gray-100 mb-4 w-1/3 rounded"></div>
                          <div className="space-y-2 mb-4">
                            {[1, 2, 3].map((item) => (
                              <div key={item} className="h-4 bg-gray-100 rounded"></div>
                            ))}
                          </div>
                          <div className="mt-8 border-t border-gray-200 pt-4">
                            <div className="h-12 bg-blue-100 rounded mb-2"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-1/3 bg-white p-4 rounded border border-gray-200 shadow-sm">
                        <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
                        <div className="space-y-4">
                          <div className="p-3 border border-gray-200 rounded bg-gray-50">
                            <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          </div>
                          <div className="p-3 border border-gray-200 rounded bg-blue-50">
                            <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          </div>
                          <div className="h-10 bg-blue-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'form' && (
                <div className="w-full h-full flex flex-col">
                  <div className="h-12 bg-blue-600 text-white flex items-center px-6 rounded-t-lg">
                    <h3 className="font-medium">Form Builder</h3>
                  </div>
                  <div className="flex-1 border border-gray-200 rounded-b-lg p-4 bg-gray-50 flex">
                    <div className="w-3/4 pr-4">
                      <div className="bg-white border border-gray-200 h-full rounded shadow-sm p-4">
                        <div className="h-8 bg-gray-100 w-1/2 rounded mb-6"></div>
                        <div className="space-y-6">
                          <div>
                            <div className="h-5 bg-gray-200 w-1/4 rounded mb-2"></div>
                            <div className="h-10 bg-gray-100 rounded"></div>
                          </div>
                          <div>
                            <div className="h-5 bg-gray-200 w-1/3 rounded mb-2"></div>
                            <div className="h-10 bg-gray-100 rounded"></div>
                          </div>
                          <div>
                            <div className="h-5 bg-gray-200 w-1/4 rounded mb-2"></div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="h-10 bg-gray-100 rounded"></div>
                              <div className="h-10 bg-gray-100 rounded"></div>
                            </div>
                          </div>
                          <div>
                            <div className="h-5 bg-gray-200 w-1/5 rounded mb-2"></div>
                            <div className="h-24 bg-gray-100 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/4 bg-white p-4 rounded border border-gray-200 shadow-sm">
                      <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
                      <div className="space-y-3 mb-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <div key={item} className="h-8 bg-gray-100 rounded flex items-center px-2">
                            <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                          </div>
                        ))}
                      </div>
                      <div className="h-10 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full z-[-1]"></div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full z-[-1] opacity-70"></div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-6">
          <div className="flex items-center text-gray-600">
            <MonitorSmartphone size={20} className="mr-2" />
            <span>Responsive Design</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Laptop size={20} className="mr-2" />
            <span>Web Application</span>
          </div>
          <div className="flex items-center text-gray-600">
            <TabletSmartphone size={20} className="mr-2" />
            <span>Mobile Compatible</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Screenshots;