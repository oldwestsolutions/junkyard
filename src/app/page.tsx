"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const featuredParts = [
    {
      name: "Garrett GTX3584RS Turbo",
      price: "$1,299.99",
      image: "/images/featured/garrett-turbo.jpg",
      description: "High-performance ball bearing turbocharger for maximum power gains"
    },
    {
      name: "Brembo GT-R Brake Kit",
      price: "$3,499.99",
      image: "/images/featured/brembo-brakes.jpg",
      description: "6-piston caliper brake system with 380mm rotors"
    },
    {
      name: "HKS Hi-Power Exhaust",
      price: "$899.99",
      image: "/images/featured/hks-exhaust.jpg",
      description: "Full titanium exhaust system with aggressive sound"
    },
    {
      name: "KW Variant 3 Coilovers",
      price: "$2,199.99",
      image: "/images/featured/kw-coilovers.jpg",
      description: "Adjustable suspension system for track and street"
    },
    {
      name: "AEM Infinity ECU",
      price: "$1,599.99",
      image: "/images/featured/aem-ecu.jpg",
      description: "Standalone engine management system with advanced tuning"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredParts.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredParts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredParts.length) % featuredParts.length);
  };

  return (
    <div className="min-h-screen bg-[var(--background-color)]">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-[var(--primary-color)] border-b-2 border-black">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Car parts background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black [text-shadow:3px_3px_0px_#FFFFFF]">
              JUNKYARD CAR PARTS
            </h1>
            <p className="text-2xl mb-8 text-black [text-shadow:1px_1px_0px_#FFFFFF]">
              Your Ultimate Source for Custom & Aftermarket Parts!
            </p>
            <Link
              href="/products"
              className="inline-block bg-[var(--accent-color)] hover:bg-[var(--secondary-color)] text-black px-8 py-4 rounded-md text-xl font-bold text-center transition-colors duration-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              BROWSE
            </Link>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block w-[500px]">
            <div className="bg-white/90 p-6 rounded-lg shadow-lg group">
              <h3 className="text-2xl font-bold mb-6 text-center text-black">
                FEATURED PARTS
              </h3>
              <div className="relative">
                <div className="overflow-hidden rounded-lg">
                  <div 
                    className="relative flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {featuredParts.map((part, index) => (
                      <div key={index} className="w-full flex-shrink-0 group">
                        <div className="relative h-[400px] w-full overflow-hidden">
                          <Image
                            src={part.image}
                            alt={part.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              <h4 className="text-2xl font-bold text-white mb-3">
                                {part.name}
                              </h4>
                              <p className="text-white/90 text-base mb-4">
                                {part.description}
                              </p>
                              <div className="text-[var(--accent-color)] font-bold text-xl">
                                {part.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 z-10 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 z-10 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {featuredParts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        currentSlide === index ? "bg-white scale-125" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo 1 */}
      <section className="py-12 bg-gradient-to-r from-black/90 to-black/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <div className="relative w-[400px] h-[225px] rounded-lg overflow-hidden flex-shrink-0">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/video-thumbnail-1.jpg"
              >
                <source src="/demo-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Performance Exhaust Installation Guide
              </h3>
              <p className="text-white/80 text-base mb-4">
                Watch our expert install a complete performance exhaust system in under 30 minutes
              </p>
              <button className="text-[var(--accent-color)] text-base font-bold hover:text-white transition-colors">
                Watch Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-[var(--primary-color)] border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="retro-title">SHOP BY CATEGORY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'ENGINE PARTS',
                description: 'Power Up Your Ride!',
                image: '/images/categories/engine.jpg',
                xp: '1000 XP',
                isNew: true,
              },
              {
                title: 'EXTERIOR PARTS',
                description: 'Make It Look Mean!',
                image: '/images/categories/exterior.jpg',
                xp: '800 XP',
                isNew: true,
              },
              {
                title: 'INTERIOR PARTS',
                description: 'Level Up Your Interior!',
                image: '/images/categories/interior.jpg',
                xp: '600 XP',
                isNew: true,
              },
              {
                title: 'SUSPENSION',
                description: 'Ride Like a Pro!',
                image: '/images/categories/suspension.jpg',
                xp: '900 XP',
                isNew: true,
              },
              {
                title: 'BRAKES',
                description: 'Stop on a Dime!',
                image: '/images/categories/brakes.jpg',
                xp: '750 XP',
                isNew: true,
              },
              {
                title: 'LIGHTING',
                description: 'Light Up the Night!',
                image: '/images/categories/lighting.jpg',
                xp: '500 XP',
                isNew: true,
              },
              {
                title: 'EXHAUST',
                description: 'Sound Like a Beast!',
                image: '/images/categories/exhaust.jpg',
                xp: '850 XP',
                isNew: true,
              },
              {
                title: 'WHEELS & TIRES',
                description: 'Roll in Style!',
                image: '/images/categories/wheels.jpg',
                xp: '700 XP',
                isNew: true,
              },
              {
                title: 'ELECTRONICS',
                description: 'Tech Up Your Ride!',
                image: '/images/categories/electronics.jpg',
                xp: '650 XP',
                isNew: true,
              },
            ].map((category) => (
              <div
                key={category.title}
                className="retro-card group relative overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 [text-shadow:1px_1px_0px_#000000]">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="bg-[var(--accent-color)] text-white px-3 py-1 rounded-md">
                      {category.xp}
                    </div>
                    {category.isNew && (
                      <div className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                        NEW!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo 2 */}
      <section className="py-12 bg-gradient-to-r from-black/90 to-black/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <div className="relative w-[400px] h-[225px] rounded-lg overflow-hidden flex-shrink-0">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/video-thumbnail-2.jpg"
              >
                <source src="/demo-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Turbo Kit Installation Walkthrough
              </h3>
              <p className="text-white/80 text-base mb-4">
                Step-by-step guide to installing our premium turbo kit
              </p>
              <button className="text-[var(--accent-color)] text-base font-bold hover:text-white transition-colors">
                Watch Now →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
