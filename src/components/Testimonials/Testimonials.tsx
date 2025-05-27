import React, { useState } from 'react';
import { testimonials } from '../../data/profileData';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-[#0A2463] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            What clients say about their experience working with me on their financial journey.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden rounded-xl bg-gray-50">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 p-6 md:p-10"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <Quote size={36} className="text-[#D4AF37]/20 mb-4" />
                      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="mt-auto">
                        <p className="font-semibold text-gray-900 text-lg">{testimonial.author}</p>
                        <p className="text-[#0A2463]">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-2 md:px-4">
            <button 
              onClick={goToPrevious}
              className="bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md focus:outline-none transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={goToNext}
              className="bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md focus:outline-none transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-300 ${
                  index === currentIndex ? 'bg-[#0A2463]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;