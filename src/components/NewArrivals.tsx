import Image from "next/image";

const newArrivals = [
  {
    name: "Oversized Graphic Tee",
    brand: 'Tolus',
    image: "/Men Short Sleeved Y2k T-Shirt With Slogan_Character Print For Summer, School.jpeg",
    price: "₦14,000",
    link: "/product/oversized-graphic-tee",
  },
  {
    name: "Baggy Jeans",
    brand: 'Tolus',
    image: "/SHEIN.jpeg",
    price: "₦19,500",
    link: "/product/slim-fit-trousers",
  },
  {
    name: "Zipper Hoodie",
    brand: 'Tolus',
    image: "/Entire Studios Eternal Zip.jpeg",
    price: "₦25,000",
    link: "/product/zipper-hoodie",
  },
  {
    name: "Core Streetwear Cap",
    brand: 'Tolus',
    image: "/_ (8).jpeg",
    price: "₦8,000",
    link: "/product/streetwear-cap",
  },
];

export default function NewArrivals() {
  return (
    <section className="py-12 w-[90vw] mx-auto">
      <h2 className="text-5xl font-normal mb-2 text-start mb-12 relative after:w-[250px] after:h-[4px] after:bg-cyan-500 after:content-[''] after:absolute after:-top-[4px] after:left-0 after:rounded-xs">New Arrivals</h2>
      {/* <h3 className="text-sm text-gray-500 font-normal mb-16 text-center w-2/3 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iste iusto ratione similique corrupti distinctio nemo odio doloribus eius ex, esse assumenda voluptas ducimus suscipit quibusdam laudantium fugit totam? Quia, molestiae dolorum.</h3> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
        {newArrivals.map((item, index) => (
          <a href={item.link} key={index} className="group relative overflow-hidden hover:scale-[1.02] transition-all">
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
              <h5 className="text-sm text-gray-400">{item.brand}</h5>
              <p className="text-gray-700">{item.price}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

