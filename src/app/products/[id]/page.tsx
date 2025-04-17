'use client';

import { useState } from 'react';
import Image from 'next/image';

// Mock product data - in a real app, this would come from your database
const product = {
  id: 1,
  name: 'Performance Exhaust System',
  price: 299.99,
  category: 'Exhaust',
  description: 'High-performance exhaust system designed to improve engine efficiency and sound. Made from premium stainless steel with a polished finish.',
  features: [
    'Stainless steel construction',
    'Improved exhaust flow',
    'Deep, aggressive sound',
    'Easy installation',
    'Includes all necessary hardware',
  ],
  images: [
    '/products/exhaust-1.jpg',
    '/products/exhaust-2.jpg',
    '/products/exhaust-3.jpg',
  ],
  rating: 4.5,
  reviews: 128,
  inStock: true,
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="relative h-96 mb-4">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-20 w-20 rounded-md overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-red-600' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-2xl font-bold text-red-600 mb-6">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-3 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                className={`flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors ${
                  !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-2">Shipping & Returns</h3>
              <p className="text-gray-600">
                Free shipping on orders over $100. Returns accepted within 30 days of purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 