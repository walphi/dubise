import { h } from 'preact';

const luxuryProperties = [
  {
    title: "Opulent Villa on Palm Jumeirah",
    price: "$15,000,000",
    bedrooms: 6,
    bathrooms: 7,
    area: "10,000 sq ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    url: "/properties/palm-jumeirah-villa"
  },
  {
    title: "Luxurious Penthouse in Dubai Marina",
    price: "$8,500,000",
    bedrooms: 4,
    bathrooms: 5,
    area: "6,500 sq ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80",
    url: "/properties/dubai-marina-penthouse"
  },
  {
    title: "Elegant Mansion in Emirates Hills",
    price: "$20,000,000",
    bedrooms: 7,
    bathrooms: 9,
    area: "15,000 sq ft",
    image: "https://images.unsplash.com/photo-1600566753851-f0384d8f7fca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    url: "/properties/emirates-hills-mansion"
  }
];

export default function LuxuryProperties() {
  return (
    <section class="luxury-properties py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-serif mb-8 text-center">Luxury Properties</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {luxuryProperties.map((property) => (
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={property.image} alt={property.title} class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-serif mb-2">{property.title}</h3>
                <p class="text-dubise-gold text-xl mb-4">{property.price}</p>
                <div class="flex justify-between text-gray-600 mb-4">
                  <span>{property.bedrooms} Bedrooms</span>
                  <span>{property.bathrooms} Bathrooms</span>
                  <span>{property.area}</span>
                </div>
                <a href={property.url} class="block w-full text-center bg-dubise-black text-white py-2 rounded hover:bg-opacity-80 transition-colors duration-200">
                  View Property
                </a>
              </div>
            </div>
          ))}
        </div>
        <div class="text-center mt-8">
          <a href="/properties" class="inline-block bg-dubise-green text-white py-3 px-6 rounded-full hover:bg-opacity-80 transition-colors duration-200">
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
}