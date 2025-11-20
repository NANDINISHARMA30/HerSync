import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Eye } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface ShowcaseItem {
  id: number;
  creator: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  likes: number;
  comments: number;
  views: number;
}

export const Showcase: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);

  const items: ShowcaseItem[] = [
    {
      id: 1,
      creator: 'Priya Sharma',
      title: 'Handmade Embroidered Saree',
      description: 'Beautiful traditional embroidery work on pure silk saree. Took 2 months to complete.',
      category: 'Stitching',
      thumbnail: '🧵',
      likes: 145,
      comments: 23,
      views: 892,
    },
    {
      id: 2,
      creator: 'Meera Patel',
      title: 'Traditional Pickle Collection',
      description: 'Homemade pickles made with authentic recipes passed down through generations.',
      category: 'Cooking',
      thumbnail: '🥒',
      likes: 98,
      comments: 15,
      views: 567,
    },
    {
      id: 3,
      creator: 'Lakshmi Bai',
      title: 'Clay Pot Decorations',
      description: 'Hand-painted decorative clay pots with traditional designs.',
      category: 'Handicraft',
      thumbnail: '🏺',
      likes: 167,
      comments: 31,
      views: 1024,
    },
    {
      id: 4,
      creator: 'Sunita Devi',
      title: 'Crochet Baby Clothes',
      description: 'Soft and comfortable crochet baby clothes in various colors and designs.',
      category: 'Stitching',
      thumbnail: '🧶',
      likes: 203,
      comments: 42,
      views: 1345,
    },
    {
      id: 5,
      creator: 'Anjali Singh',
      title: 'Handmade Jewelry',
      description: 'Unique handcrafted jewelry pieces using beads and traditional techniques.',
      category: 'Handicraft',
      thumbnail: '💍',
      likes: 189,
      comments: 28,
      views: 976,
    },
    {
      id: 6,
      creator: 'Rekha Kumari',
      title: 'Organic Homemade Sweets',
      description: 'Delicious sweets made with organic ingredients and no preservatives.',
      category: 'Cooking',
      thumbnail: '🍬',
      likes: 134,
      comments: 19,
      views: 743,
    },
  ];

  if (selectedItem) {
    return (
      <div className="min-h-screen bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Button variant="outline" onClick={() => setSelectedItem(null)} className="mb-4">
            ← Back to Gallery
          </Button>

          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="aspect-square bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-3xl flex items-center justify-center mb-4">
                  <span className="text-9xl">{selectedItem.thumbnail}</span>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" fullWidth>
                    <Heart size={18} />
                    {selectedItem.likes}
                  </Button>
                  <Button variant="outline" fullWidth>
                    <Share2 size={18} />
                    Share
                  </Button>
                </div>
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-[#FEF9C3] text-yellow-700 rounded-full text-sm font-medium mb-3">
                  {selectedItem.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mb-3">{selectedItem.title}</h2>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FED7AA] to-[#FFEDD5] rounded-full flex items-center justify-center">
                    <span className="text-xl">👩‍🎨</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{selectedItem.creator}</p>
                    <p className="text-sm text-gray-600">Creator</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-lg">{selectedItem.description}</p>

                <div className="flex gap-6 mb-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Eye size={18} />
                    <span>{selectedItem.views} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    <span>{selectedItem.comments} comments</span>
                  </div>
                </div>

                <Button fullWidth size="lg">
                  Contact Creator
                </Button>
              </div>
            </div>

            <div className="border-t mt-6 pt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>
              <div className="space-y-4">
                {[
                  { user: 'Radha K.', comment: 'This is absolutely beautiful! Great work!', time: '2 hours ago' },
                  { user: 'Seema P.', comment: 'I would love to learn this technique. Do you teach?', time: '5 hours ago' },
                  { user: 'Kavita M.', comment: 'Amazing craftsmanship! 👏', time: '1 day ago' },
                ].map((comment, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#CCFBF1] to-[#99F6E4] rounded-full flex items-center justify-center flex-shrink-0">
                      <span>{comment.user[0]}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800 text-sm">{comment.user}</span>
                        <span className="text-xs text-gray-500">{comment.time}</span>
                      </div>
                      <p className="text-gray-600">{comment.comment}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <textarea
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#A78BFA] focus:outline-none resize-none"
                  placeholder="Add a comment..."
                  rows={3}
                ></textarea>
                <Button size="sm" className="mt-2">
                  Post Comment
                </Button>
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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Talent Showcase</h1>
            <p className="text-gray-600">Discover amazing creations from our community</p>
          </div>
          <Button>
            <Share2 size={18} />
            Share Your Work
          </Button>
        </div>

        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {['All', 'Stitching', 'Cooking', 'Handicraft', 'Art'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                category === 'All'
                  ? 'bg-[#A78BFA] text-white'
                  : 'bg-white text-gray-600 hover:bg-[#F5F3FF]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.id} hover onClick={() => setSelectedItem(item)}>
              <div className="aspect-square bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-4">
                <span className="text-7xl">{item.thumbnail}</span>
              </div>

              <span className="inline-block px-3 py-1 bg-[#FEF9C3] text-yellow-700 rounded-full text-xs font-medium mb-2">
                {item.category}
              </span>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Heart size={16} />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={16} />
                    <span>{item.comments}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#FED7AA] to-[#FFEDD5] rounded-full flex items-center justify-center">
                    <span className="text-sm">👩‍🎨</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
