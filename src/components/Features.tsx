import React from 'react';
import { FileText, FileSignature, FormInput, Shield } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="h-12 w-12 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <FileText size={24} />,
      title: 'Document Manager',
      description: 'Upload, organize, and share documents securely. Track document history and set permissions for controlled access.',
    },
    {
      icon: <FileSignature size={24} />,
      title: 'E-Signature',
      description: 'Collect legally binding electronic signatures from anywhere. Send documents for signature with automated reminders.',
    },
    {
      icon: <FormInput size={24} />,
      title: 'Form Builder',
      description: 'Create custom forms for data collection. Build surveys, applications, and registration forms with our intuitive builder.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure & Compliant',
      description: 'Bank-level security with 256-bit encryption. Compliant with major regulations including GDPR, HIPAA, and SOC 2.',
    },
  ];

  return (
    <Section id="features" background="light">
      <SectionTitle 
        title="Powerful Features for Document Workflows"
        subtitle="Everything you need to manage documents, collect signatures, and gather information—all in one platform."
        centered
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Features;