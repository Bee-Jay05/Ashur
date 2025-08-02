// components/CategoryGrid.tsx

'use client';

import Image from 'next/image';

const categories = [
  {
    label: 'MAN',
    image: '/images/man.jpg', // replace with your actual image paths
  },
  {
    label: 'WOMAN',
    image: '/images/woman.jpg',
  },
  {
    label: 'KIDS',
    image: '/images/kids.jpg',
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 py-16">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-[500px] rounded-3xl overflow-hidden group shadow-md"
        >
          <Image
            src={category.image}
            alt={category.label}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Text + Button */}
          <div className="absolute bottom-6 left-6 z-10">
            <h2 className="text-white text-3xl font-semibold mb-4">
              {category.label}
            </h2>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              See Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
