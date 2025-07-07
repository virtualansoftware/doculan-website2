import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How secure is Doculan for storing sensitive documents?",
      answer: "Doculan employs bank-level security with 256-bit encryption for all documents. We're compliant with major regulations including GDPR, HIPAA, and SOC 2, ensuring your sensitive information remains protected. All data is stored in secure, redundant data centers with continuous monitoring."
    },
    {
      question: "Are electronic signatures legally binding?",
      answer: "Yes, electronic signatures created through Doculan are legally binding in most countries. Our platform complies with major e-signature laws including ESIGN and eIDAS, providing the same legal standing as handwritten signatures. Each signature is accompanied by a detailed audit trail for added legal validity."
    },
    {
      question: "Can I customize forms to match my brand?",
      answer: "Absolutely! Doculan offers extensive customization options for forms. You can add your company logo, use your brand colors, customize fonts, and create templates that reflect your brand identity. Professional and Enterprise plans include advanced white-labeling options."
    },
    {
      question: "How many documents can I store on my plan?",
      answer: "Storage limits vary by plan. The Starter plan includes 50 document uploads, Professional allows 500 documents, and Enterprise offers unlimited document storage. All documents are securely stored and easily accessible through our intuitive interface."
    },
    {
      question: "Is there a limit to how many signatures I can collect?",
      answer: "Yes, signature limits depend on your plan. The Starter plan includes 10 e-signatures per month, Professional allows 100 e-signatures monthly, and Enterprise offers unlimited e-signatures. You can always upgrade your plan if you need more signatures."
    },
    {
      question: "Can I integrate Doculan with other tools we use?",
      answer: "Doculan offers seamless integration with popular business tools including Google Workspace, Microsoft Office 365, Dropbox, Salesforce, and more. We also provide a robust API for custom integrations with your existing systems. Enterprise customers receive dedicated integration support."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="light">
      <SectionTitle 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Doculan features and services."
        centered
      />
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleFAQ(index)}
          />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Still have questions?</p>
        <div className="inline-flex bg-white rounded-lg shadow-md p-1">
          <a href="#contact" className="px-6 py-3 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            Contact Support
          </a>
          <div className="border-r border-gray-200"></div>
          <a href="#" className="px-6 py-3 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            Visit Help Center
          </a>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;