import Image from "next/image";

const categories = [
  {
    name: "Shirts",
    link: "/category/shirts",
  },
  {
    name: "Trousers",
    link: "/category/trousers",
  },
  {
    name: "Sweatpants",
    link: "/category/sweatpants",
  },
  {
    name: "Underwear",
    link: "/category/underwear",
  },
  {
    name: "Shirts",
    link: "/category/shirts",
  },
  {
    name: "Trousers",
    link: "/category/trousers",
  },
  {
    name: "Sweatpants",
    link: "/category/sweatpants",
  },
  {
    name: "Underwear",
    link: "/category/underwear",
  },
  // Add more categories as needed
];

export default function CategorySection() {
  return (
    <section className="py-12 !w-[95vw] mx-auto flex">
      <h2 className="text-4xl font-normal mb-8 w-1/2">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 w-1/2">
        {categories.map((cat, index) => (
          <a href={cat.link} key={index} className="relative py-6 rounded-lg overflow-hidden hover:scale-[1.02] transition border border-gray-200">
            <h3 className="text-md font-normal absolute top-1/2 left-1/2 -translate-1/2">{cat.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

