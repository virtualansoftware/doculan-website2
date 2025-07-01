import React from 'react';
import { Check, X } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import Button from './Button';

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: Array<{
    text: string;
    included: boolean;
  }>;
  isPopular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
}) => {
  return (
    <div className={`
      bg-white rounded-lg shadow-md overflow-hidden border
      ${isPopular ? 'border-blue-400 transform scale-105 relative z-10' : 'border-gray-200'}
      transition-all duration-300 hover:shadow-lg
    `}>
      {isPopular && (
        <div className="bg-blue-600 text-white text-sm font-semibold py-1 text-center">
          Most Popular
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600 ml-1">/month</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button 
          variant={isPopular ? "primary" : "outline"} 
          fullWidth
        >
          Get Started
        </Button>
      </div>
      <div className="bg-gray-50 p-6 md:p-8">
        <h4 className="font-medium text-gray-900 mb-4">What's included:</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
              )}
              <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for individuals and small teams getting started.',
      features: [
        { text: '50 document uploads', included: true },
        { text: '10 e-signatures per month', included: true },
        { text: '5 form submissions per form', included: true },
        { text: 'Basic document templates', included: true },
        { text: 'Email notifications', included: true },
        { text: 'Advanced analytics', included: false },
        { text: 'Custom branding', included: false },
        { text: 'Priority support', included: false },
      ],
    },
    {
      name: 'Professional',
      price: '79',
      description: 'Ideal for growing businesses with moderate needs.',
      features: [
        { text: '500 document uploads', included: true },
        { text: '100 e-signatures per month', included: true },
        { text: 'Unlimited form submissions', included: true },
        { text: 'Advanced document templates', included: true },
        { text: 'Email & SMS notifications', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Priority support', included: false },
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: '199',
      description: 'Complete solution for large organizations with complex needs.',
      features: [
        { text: 'Unlimited document uploads', included: true },
        { text: 'Unlimited e-signatures', included: true },
        { text: 'Unlimited form submissions', included: true },
        { text: 'Custom document templates', included: true },
        { text: 'Advanced notifications', included: true },
        { text: 'Advanced analytics & reports', included: true },
        { text: 'Custom branding & white-label', included: true },
        { text: '24/7 priority support', included: true },
      ],
    },
  ];

  return (
    <Section id="pricing" background="blue">
      <SectionTitle 
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that works best for your needs. All plans include a 14-day free trial."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingPlan
            key={index}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            isPopular={plan.isPopular}
          />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">Need a custom solution for your enterprise?</p>
        <Button variant="secondary" size="lg">Contact Sales</Button>
      </div>
    </Section>
  );
};

export default Pricing;