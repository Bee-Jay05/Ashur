// components/CategoryGrid.tsx

'use client';

import Image from 'next/image';

const categories = [
  {
    label: 'MEN',
    image: '/stylish-man-posing-mysterious-way.jpg', // replace with your actual image paths
  },
  {
    label: 'WOMEN',
    image: '/portrait-african-woman-wearing-traditional-accessories-yellow-veil.jpg',
  },
  {
    label: 'KIDS',
    image: '/portrait-cool-teenage-boy-posing-chair.jpg',
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 !w-[95vw] md:grid-cols-3 gap-3 mx-auto relative top-8 py-16">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-[500px] rounded-2xl overflow-hidden group shadow-md"
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
          <div className="absolute bottom-6 px-6 z-10 flex justify-between items-center w-full">
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
