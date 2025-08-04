

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShirt,
  faShoePrints,
  faTshirt,
  faUserTie,
  faBoxesPacking,
  faPersonDress,
  faSocks,
  faVest,
  
} from "@fortawesome/free-solid-svg-icons";



const categories = [
  {
    name: "Shirts",
    link: "/category/shirts",
    icon: faShirt,
  },
  {
    name: "Skirts",
    link: "/category/skirts",
    icon: faShoePrints,
  },
  {
    name: "Sweatpants",
    link: "/category/sweatpants",
    icon: faTshirt,
  },
  {
    name: "Underwear",
    link: "/category/underwear",
    icon: faShirt,
  },
  {
    name: "Jeans",
    link: "/category/jeans",
    icon: faShirt,
  },
  {
    name: "Glasses",
    link: "/category/cropped-tops",
    icon: faShirt, // or use Shirt if there's no Crop icon
  },
  {
    name: "Jerseys",
    link: "/category/jerseys",
    icon: faShirt,
  },
  {
    name: "Shoes",
    link: "/category/shoes",
    icon: faShirt,
  },
];


export default function CategorySection() {
  return (
    <section className="py-16 !w-[90vw] mx-auto flex relative">
      <h2 className="text-4xl font-normal mb-8 w-1/2">Shop by Category</h2>
      <a href="" className="absolute bottom-16 text-cyan-500 hover:text-cyan-800 transition">See All</a>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-1/2">
        {categories.map(({ name, link, icon }, index) => (
          <a
            href={link}
            key={index}
            className="py-3 px-3 rounded-lg overflow-hidden hover:scale-[1.02] transition border border-gray-200 text-gray-600 !hover:text-black flex items-center group justify-start space-y-2"
          >
            <FontAwesomeIcon icon={icon} className="w-6 me-2 mb-0 h-6 text-cyan-300 group-hover:text-cyan-600 transition" />
            <h3 className="text-md !font-light">{name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

