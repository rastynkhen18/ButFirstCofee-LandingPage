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
    <div className="relative w-full max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
      {/* Main slide container */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
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
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Bottom controls */}
      <div className="bg-gray-800 p-4 flex items-center justify-between">
        {/* Dot indicators */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-blue-500 scale-110' 
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play toggle */}
        <button
          onClick={toggleAutoPlay}
          className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm transition-all duration-200 ${
            isAutoPlay 
              ? 'bg-green-600 hover:bg-green-700 text-white' 
              : 'bg-gray-600 hover:bg-gray-500 text-gray-200'
          }`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            {isAutoPlay ? (
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            ) : (
              <path d="M8 5v14l11-7z" />
            )}
          </svg>
          <span>{isAutoPlay ? 'Pause' : 'Play'}</span>
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-700">
        <div 
          className="h-full bg-blue-500 transition-all duration-100 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default Slideshow