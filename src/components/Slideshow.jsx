import React, { useState, useEffect } from 'react'
import Img1 from '../assets/images/slideshowImages/img1.png'
import Img2 from '../assets/images/slideshowImages/img2.png'
import Img3 from '../assets/images/slideshowImages/img3.png'
import Img4 from '../assets/images/slideshowImages/img4.png'
import Img5 from '../assets/images/slideshowImages/img5.png'
import Img6 from '../assets/images/slideshowImages/img6.png'
import Img7 from '../assets/images/slideshowImages/img7.png'


const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      image: Img1,
      alt: "Your Greater Start - Iced Coffee Promotion"
    },
    {
      id: 2,
      image: Img2,
      alt: "Sun-Fizzed Sips - Summer Beverage Collection"
    },
    {
      id: 3,
      image: Img3,
      alt: "Cupid's Specials - Valentine's Day Drinks"
    },
    {
      id: 4,
      image: Img4,
      alt: "Season's Staples - Holiday Coffee Collection"
    },
     {
      id: 5,
      image: Img5,
      alt: "Boo Rista Specials - Hallowen Coffee Collection"
    },
     {
      id: 6,
      image: Img6,
      alt: "Sip and Save"
    },
     {
      id: 7,
      image: Img7,
      alt: "Everyday Coffee For As Low As P60!"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, currentSlide]);

  return (
    <div className="mt-16 overflow-hidden h-[50vh] md:h-[70vh] z-10">
      {/* Main slide container */}
      <div className="w-full h-full overflow-hidden relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              className="w-full h-full object-fill"
            />
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:text-[var(--primary-color)] p-2 rounded-full transition-all duration-200 cursor-pointer"
          aria-label="Previous slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-[var(--primary-color)] p-2 rounded-full transition-all duration-200 cursor-pointer"
          aria-label="Next slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-1 space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                index === currentSlide 
                  ? 'bg-[#d4af37] scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow