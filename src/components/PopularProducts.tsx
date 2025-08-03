import Image from "next/image";

const popularProducts = [
  {
    name: "Oversized Graphic Tee",
    image: "/Men Short Sleeved Y2k T-Shirt With Slogan_Character Print For Summer, School.jpeg",
    price: "₦14,000",
    link: "/product/oversized-graphic-tee",
    column: "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Sun shades",
    image: "/_ (9).jpeg",
    price: "₦19,500",
    link: "/product/slim-fit-trousers",
    column: "col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    name: "Zipper Hoodie",
    image: "/Entire Studios Eternal Zip.jpeg",
    price: "₦25,000",
    link: "/product/zipper-hoodie",
    column: "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Core Streetwear Cap",
    image: "/_ (8).jpeg",
    price: "₦8,000",
    link: "/product/streetwear-cap",
    column: "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Baggy Jeans",
    image: "/SHEIN.jpeg",
    price: "₦19,500",
    link: "/product/slim-fit-trousers",
    column: "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Zipper Hoodie",
    image: "/Entire Studios Eternal Zip.jpeg",
    price: "₦25,000",
    link: "/product/zipper-hoodie",
    column: "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    name: "Core Streetwear Cap",
    image: "/_ (8).jpeg",
    price: "₦8,000",
    link: "/product/streetwear-cap",
    column: "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1",
  },
];

export default function PopularProducts() {
  return (
    <section className="py-12 w-[95vw] mx-auto">
      <h2 className="text-5xl font-normal mb-2 text-start mb-12">Popular Products</h2>
      {/* <h3 className="text-sm text-gray-500 font-normal mb-16 text-center w-2/3 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iste iusto ratione similique corrupti distinctio nemo odio doloribus eius ex, esse assumenda voluptas ducimus suscipit quibusdam laudantium fugit totam? Quia, molestiae.</h3> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
        {popularProducts.map((item, index) => (
          <a href={item.link} key={index} className={`${item.column} group relative overflow-hidden hover:scale-[1.02] transition-all`}>
            <div className="relative w-full h-75">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 group-hover:brightness-75 rounded-lg"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500">{item.price}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

