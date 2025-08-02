'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState } from 'react';

const slides = [
  {
    image: '/medium-shot-man-with-braids-portrait.jpg', // your actual image path
    heading: 'TOLUS SPRING COLLECTION',
    subtext: 'Find out our best spring collection. Offering our best quality product in a Tolus Spring Collection.',
    buttonText: 'Buy Now',
  },
  {
    image: '/another-slide.jpg',
    heading: 'FALL ESSENTIALS',
    subtext: 'Discover the textures and tones of modern Nigerian fashion.',
    buttonText: 'Explore',
  },
  // Add more slides as needed
];

export default function HeroCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
    drag: true,
  });

  return (
    <div ref={sliderRef} className="keen-slider top-16 !w-[95vw] mx-auto h-[90vh] overflow-hidden rounded-3xl">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="keen-slider__slide relative flex items-end pb-12 justify-start px-12 bg-black text-white"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-6xl font-bold">{slide.heading}</h1>
            <p className="mt-4 text-lg">{slide.subtext}</p>
            <button className="mt-6 absolute px-6 py-3 right-16 bottom-16 bg-white text-black rounded-full hover:bg-gray-200 transition">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
