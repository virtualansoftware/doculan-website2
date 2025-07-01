import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'blue';
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  background = 'white',
}) => {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-gray-50',
    blue: 'bg-blue-50',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;