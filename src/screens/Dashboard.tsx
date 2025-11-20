import React from 'react';
import { Book, Users, Sparkles, Briefcase, ShoppingBag, Heart, Bell, User } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface QuickAccessCard {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
  onClick: () => void;
}

export const Dashboard: React.FC = () => {
  const quickAccessCards: QuickAccessCard[] = [
    {
      icon: <Book size={32} />,
      title: 'Learn',
      subtitle: 'Explore courses',
      color: 'text-[#A78BFA]',
      onClick: () => console.log('Learn'),
    },
    {
      icon: <Users size={32} />,
      title: 'Teach',
      subtitle: 'Share your skills',
      color: 'text-[#10B981]',
      onClick: () => console.log('Teach'),
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Showcase',
      subtitle: 'Display your talent',
      color: 'text-[#F59E0B]',
      onClick: () => console.log('Showcase'),
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Find Work',
      subtitle: 'Discover opportunities',
      color: 'text-[#8B5CF6]',
      onClick: () => console.log('Find Work'),
    },
    {
      icon: <ShoppingBag size={32} />,
      title: 'Marketplace',
      subtitle: 'Buy & sell items',
      color: 'text-[#EC4899]',
      onClick: () => console.log('Marketplace'),
    },
    {
      icon: <Heart size={32} />,
      title: 'Wellness',
      subtitle: 'Take care of yourself',
      color: 'text-[#EF4444]',
      onClick: () => console.log('Wellness'),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3FF]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
            <p className="text-gray-600 mt-1">Let's continue your journey</p>
          </div>
          <div className="flex gap-3">
            <button className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all">
              <Bell className="text-[#A78BFA]" size={24} />
            </button>
            <button className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all">
              <User className="text-[#A78BFA]" size={24} />
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] rounded-3xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-3">Empowering Rural Women</h2>
              <p className="text-lg opacity-90 mb-6">
                Learn, Grow, Earn, and Inspire - Your journey to independence starts here
              </p>
              <Button variant="secondary" size="lg">
                Start Your Journey
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                <Sparkles size={80} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quick Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickAccessCards.map((card, index) => (
              <Card key={index} hover onClick={card.onClick}>
                <div className="flex flex-col items-center text-center">
                  <div className={`${card.color} mb-4`}>{card.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">{card.title}</h4>
                  <p className="text-gray-600">{card.subtitle}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Today's Motivation</h4>
            <p className="text-gray-700 text-lg italic mb-4">
              "You are capable of amazing things. Every small step forward is progress."
            </p>
            <p className="text-gray-600">- Keep going, you're doing great!</p>
          </Card>

          <Card className="bg-gradient-to-br from-[#F0FDFA] to-[#CCFBF1]">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Success Story</h4>
            <p className="text-gray-700 mb-2">
              <strong>Priya from Bihar</strong> started teaching stitching online and now earns ₹15,000/month
            </p>
            <Button variant="outline" size="sm">
              Read More Stories
            </Button>
          </Card>
        </div>

        <Card>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Your Progress</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-[#F5F3FF] rounded-2xl">
              <p className="text-3xl font-bold text-[#A78BFA]">12</p>
              <p className="text-gray-600 mt-1">Courses Completed</p>
            </div>
            <div className="text-center p-4 bg-[#FFF7ED] rounded-2xl">
              <p className="text-3xl font-bold text-[#F59E0B]">5</p>
              <p className="text-gray-600 mt-1">Items Sold</p>
            </div>
            <div className="text-center p-4 bg-[#F0FDFA] rounded-2xl">
              <p className="text-3xl font-bold text-[#10B981]">₹8,500</p>
              <p className="text-gray-600 mt-1">Earned This Month</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
