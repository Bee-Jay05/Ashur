'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState, useRef } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: '600', 
  variable: '--font-poppins' 
});

const slides = [
  {
    image: '/medium-shot-man-with-braids-portrait.jpg',
    heading: 'TOLUS SPRING COLLECTION',
    subtext: 'Find out our best spring collection. Offering our best quality product in a Tolus Spring Collection.',
    buttonText: 'Buy Now',
  },
  {
    image: '/medium-shot-black-women-posing-together.jpg',
    heading: 'FALL ESSENTIALS',
    subtext: 'Discover the textures and tones of modern Nigerian fashion.',
    buttonText: 'Explore',
  },
  {
    image: '/medium-shot-black-women-posing-together.jpg',
    heading: 'MODERN. BOLD. NAIJA.',
    subtext: 'Ashur brings Nigerian luxury fashion to the world.',
    buttonText: 'Shop Now',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: NodeJS.Timeout;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 4000); // autoplay speed
        }

        slider.on('created', () => {
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <div className={`${poppins.className} relative top-16`}>
      <div ref={sliderRef} className="keen-slider !w-[95vw] mx-auto h-[90vh] overflow-hidden rounded-2xl">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide relative flex items-end pb-16 justify-start px-12 text-white"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 z-0"></div>

            <div className="z-10 max-w-xl">
              <h1 className="text-4xl sm:text-6xl font-bold">{slide.heading}</h1>
              <p className="mt-4 text-lg">{slide.subtext}</p>
              <button className="mt-6 absolute px-6 py-3 right-16 bottom-16 bg-white text-black rounded-full hover:bg-gray-200 transition">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => slider?.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === idx ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
