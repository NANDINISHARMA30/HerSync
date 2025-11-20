import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Filter } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface Product {
  id: number;
  seller: string;
  title: string;
  description: string;
  category: string;
  price: string;
  thumbnail: string;
  condition: 'new' | 'used';
}

export const Marketplace: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Clothing', 'Crafts', 'Food', 'Second-Hand', 'Farming Tools'];

  const products: Product[] = [
    {
      id: 1,
      seller: 'Priya Sharma',
      title: 'Handmade Cotton Saree',
      description: 'Beautiful handwoven cotton saree with traditional patterns. Perfect for daily wear.',
      category: 'Clothing',
      price: '₹1,200',
      thumbnail: '👗',
      condition: 'new',
    },
    {
      id: 2,
      seller: 'Meera Patel',
      title: 'Homemade Pickle Jar',
      description: 'Traditional mango pickle made with organic ingredients. 500g jar.',
      category: 'Food',
      price: '₹150',
      thumbnail: '🥒',
      condition: 'new',
    },
    {
      id: 3,
      seller: 'Lakshmi Bai',
      title: 'Decorative Wall Hanging',
      description: 'Handcrafted wall hanging with mirror work and embroidery.',
      category: 'Crafts',
      price: '₹800',
      thumbnail: '🎨',
      condition: 'new',
    },
    {
      id: 4,
      seller: 'Sunita Devi',
      title: 'Gently Used Sewing Machine',
      description: 'Manual sewing machine in good working condition. 5 years old.',
      category: 'Second-Hand',
      price: '₹2,500',
      thumbnail: '🧵',
      condition: 'used',
    },
    {
      id: 5,
      seller: 'Anjali Singh',
      title: 'Handmade Jewelry Set',
      description: 'Earrings and necklace set with traditional beadwork.',
      category: 'Crafts',
      price: '₹600',
      thumbnail: '💍',
      condition: 'new',
    },
    {
      id: 6,
      seller: 'Rekha Kumari',
      title: 'Organic Honey',
      description: 'Pure organic honey from local farms. 1kg bottle.',
      category: 'Food',
      price: '₹400',
      thumbnail: '🍯',
      condition: 'new',
    },
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Button variant="outline" onClick={() => setSelectedProduct(null)} className="mb-4">
            ← Back to Marketplace
          </Button>

          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="aspect-square bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-3xl flex items-center justify-center mb-4">
                  <span className="text-9xl">{selectedProduct.thumbnail}</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-300"
                    >
                      <span className="text-2xl">{selectedProduct.thumbnail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedProduct.condition === 'new'
                        ? 'bg-[#F0FDFA] text-[#10B981]'
                        : 'bg-[#FFF7ED] text-[#F59E0B]'
                    }`}
                  >
                    {selectedProduct.condition === 'new' ? 'New' : 'Used'}
                  </span>
                  <span className="px-3 py-1 bg-[#F5F3FF] text-[#A78BFA] rounded-full text-xs font-medium">
                    {selectedProduct.category}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedProduct.title}</h2>
                <p className="text-4xl font-bold text-[#A78BFA] mb-6">{selectedProduct.price}</p>

                <div className="bg-[#F5F3FF] rounded-2xl p-4 mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Seller Story</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FED7AA] to-[#FFEDD5] rounded-full flex items-center justify-center">
                      <span className="text-xl">👩</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{selectedProduct.seller}</p>
                      <p className="text-sm text-gray-600">Verified Seller</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    I create each item with love and care. Your support helps me provide for my family and continue my craft.
                  </p>
                </div>

                <p className="text-gray-600 mb-6">{selectedProduct.description}</p>

                <div className="space-y-3">
                  <Button fullWidth size="lg">
                    <ShoppingBag size={18} />
                    Contact Seller
                  </Button>
                  <Button variant="outline" fullWidth size="lg">
                    <Heart size={18} />
                    Add to Wishlist
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-[#FFF7ED] rounded-2xl">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Please contact the seller directly for payment and delivery arrangements.
                    We recommend meeting in safe public places for exchanges.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F3FF]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Marketplace</h1>
            <p className="text-gray-600">Buy and sell items within our community</p>
          </div>
          <Button>
            <ShoppingBag size={18} />
            Sell Item
          </Button>
        </div>

        <Card className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for items..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#A78BFA] focus:outline-none"
              />
            </div>
            <Button variant="outline">
              <Filter size={18} />
              Filters
            </Button>
          </div>
        </Card>

        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                category === selectedCategory
                  ? 'bg-[#A78BFA] text-white'
                  : 'bg-white text-gray-600 hover:bg-[#F5F3FF]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} hover onClick={() => setSelectedProduct(product)}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-7xl">{product.thumbnail}</span>
                </div>
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                  <Heart size={18} className="text-[#A78BFA]" />
                </button>
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                    product.condition === 'new'
                      ? 'bg-[#F0FDFA] text-[#10B981]'
                      : 'bg-[#FFF7ED] text-[#F59E0B]'
                  }`}
                >
                  {product.condition === 'new' ? 'New' : 'Used'}
                </span>
              </div>

              <span className="inline-block px-3 py-1 bg-[#F5F3FF] text-[#A78BFA] rounded-full text-xs font-medium mb-2">
                {product.category}
              </span>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

              <div className="flex items-center justify-between pt-3 border-t">
                <p className="text-2xl font-bold text-[#A78BFA]">{product.price}</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#FED7AA] to-[#FFEDD5] rounded-full flex items-center justify-center">
                    <span className="text-sm">👩</span>
                  </div>
                  <span className="text-sm text-gray-600">{product.seller}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
