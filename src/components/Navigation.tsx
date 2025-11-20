import React from 'react';
import { Home, Book, Users, Sparkles, ShoppingBag, Briefcase, MessageCircle, Heart } from 'lucide-react';

interface NavigationProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Home' },
    { id: 'learning', icon: Book, label: 'Learn' },
    { id: 'teaching', icon: Users, label: 'Teach' },
    { id: 'showcase', icon: Sparkles, label: 'Showcase' },
    { id: 'marketplace', icon: ShoppingBag, label: 'Shop' },
    { id: 'jobs', icon: Briefcase, label: 'Jobs' },
    { id: 'chat', icon: MessageCircle, label: 'Chat' },
    { id: 'wellness', icon: Heart, label: 'Wellness' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-around items-center px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center px-3 py-2 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#A78BFA] text-white scale-105'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
