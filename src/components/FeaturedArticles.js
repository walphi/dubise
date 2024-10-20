import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const featuredArticles = [
  {
    title: "The Architectural Marvel of Burj Khalifa",
    description: "Discover the engineering feat and luxury experiences at the world's tallest building.",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
    url: "/articles/burj-khalifa"
  },
  {
    title: "Dubai's Skyline: A Testament to Luxury",
    description: "Explore the iconic skyline that defines Dubai's luxurious and futuristic landscape.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    url: "/articles/dubai-skyline"
  },
  {
    title: "Desert Adventures: Luxury Meets Nature",
    description: "Experience the perfect blend of opulence and natural beauty in Dubai's desert escapes.",
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    url: "/articles/desert-adventures"
  },
  {
    title: "The Culinary Delights of Dubai",
    description: "Indulge in the diverse and exquisite flavors of Dubai's world-class dining scene.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    url: "/articles/dubai-culinary-delights"
  },
  {
    title: "Dubai's Art Scene: A Cultural Renaissance",
    description: "Discover the thriving art galleries and exhibitions that make Dubai a cultural hub.",
    image: "https://images.unsplash.com/photo-1594784053305-3b3c83d6d5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    url: "/articles/dubai-art-scene"
  }
];

export default function FeaturedArticles() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const slider = document.getElementById('article-slider');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    scrollLeftBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -320, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
      slider.scrollBy({ left: 320, behavior: 'smooth' });
    });

    slider.addEventListener('scroll', () => {
      setScrollPosition(slider.scrollLeft);
    });
  }, []);

  return (
    <section class="featured-articles py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-serif mb-8 text-center">Featured Articles</h2>
        <div class="relative">
          <div class="overflow-x-auto pb-4 hide-scrollbar" id="article-slider">
            <div class="flex space-x-6">
              {featuredArticles.map((article) => (
                <div class="flex-none w-80">
                  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={article.image} alt={article.title} class="w-full h-48 object-cover" />
                    <div class="p-6">
                      <h3 class="text-xl font-serif mb-2">{article.title}</h3>
                      <p class="text-gray-600 mb-4">{article.description}</p>
                      <a href={article.url} class="text-dubise-gold hover:underline">Read More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button id="scroll-left" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button id="scroll-right" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}