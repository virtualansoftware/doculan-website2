import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  position,
  company,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md relative">
      <Quote className="h-10 w-10 text-blue-100 absolute top-4 left-4" />
      <div className="relative z-10">
        <p className="text-gray-700 mb-6 italic leading-relaxed">{quote}</p>
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-gray-600 text-sm">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Doculan has completely transformed how we handle our contracts and agreements. The e-signature feature alone has cut our closing time by 75%.",
      author: "Sarah Johnson",
      position: "Operations Director",
      company: "Nexus Technologies",
    },
    {
      quote: "The form builder is intuitive and has allowed us to digitize all our paperwork. Our clients love the modern experience and our team saves hours every week.",
      author: "Michael Chen",
      position: "CTO",
      company: "Bright Innovations",
    },
    {
      quote: "We've tried several document management solutions, but Doculan stands out with its security features and ease of use. It's become essential to our workflow.",
      author: "Emily Rodriguez",
      position: "Legal Counsel",
      company: "Global Partners Ltd",
    },
    {
      quote: "The customer support team is exceptional. They helped us implement a custom workflow that perfectly matched our specific requirements.",
      author: "David Wilson",
      position: "Project Manager",
      company: "Advance Solutions",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialsPerView = typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : 1;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerView);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const currentTestimonials = [];
  for (let i = 0; i < testimonialsPerView; i++) {
    const index = (currentIndex * testimonialsPerView + i) % testimonials.length;
    if (index < testimonials.length) {
      currentTestimonials.push(testimonials[index]);
    }
  }

  return (
    <Section id="testimonials" background="white">
      <SectionTitle 
        title="What Our Customers Say"
        subtitle="Join thousands of satisfied businesses that have transformed their document workflows."
        centered
      />
      
      <div className="relative max-w-6xl mx-auto">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {currentTestimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <button 
            onClick={goToPrev}
            className="mx-2 p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex space-x-2 items-center">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={goToNext}
            className="mx-2 p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-gray-400 font-medium">Trusted by companies like</div>
          {['Acme Inc.', 'Globex', 'Initech', 'Umbrella', 'Stark Industries'].map((company, index) => (
            <div key={index} className="text-gray-500 font-bold text-lg">{company}</div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;