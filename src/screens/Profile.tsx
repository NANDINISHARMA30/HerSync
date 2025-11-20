import React from 'react';
import { User, Award, TrendingUp, Edit, Settings, Star } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Profile: React.FC = () => {
  const badges = [
    { name: 'Learner', icon: '📚', color: 'bg-blue-100' },
    { name: 'Teacher', icon: '👩‍🏫', color: 'bg-green-100' },
    { name: 'Seller', icon: '🛍️', color: 'bg-yellow-100' },
    { name: 'Mentor', icon: '⭐', color: 'bg-purple-100' },
  ];

  const skills = ['Stitching', 'Cooking', 'Handicrafts', 'Digital Literacy', 'Teaching'];

  return (
    <div className="min-h-screen bg-[#F5F3FF] pb-8">
      <div className="bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] h-32"></div>

      <div className="max-w-4xl mx-auto px-4 -mt-16">
        <Card className="mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-[#FED7AA] to-[#FFEDD5] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <User size={60} className="text-[#F59E0B]" />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-[#A78BFA] rounded-full text-white shadow-lg hover:bg-[#8B5CF6] transition-colors">
                <Edit size={16} />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                <h2 className="text-3xl font-bold text-gray-800">Priya Sharma</h2>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#FEF9C3] text-yellow-700 rounded-full text-sm font-medium">
                  <Star size={14} fill="currentColor" />
                  4.8 Rating
                </span>
              </div>
              <p className="text-gray-600 mb-4">Bihar • Member since Jan 2024</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className={`${badge.color} px-4 py-2 rounded-full flex items-center gap-2 font-medium text-gray-700`}
                  >
                    <span>{badge.icon}</span>
                    <span>{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="outline" size="sm">
              <Settings size={18} />
              Settings
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="text-center bg-gradient-to-br from-[#F5F3FF] to-white">
            <Award className="text-[#A78BFA] mx-auto mb-3" size={32} />
            <p className="text-3xl font-bold text-gray-800 mb-1">24</p>
            <p className="text-gray-600">Courses Completed</p>
          </Card>

          <Card className="text-center bg-gradient-to-br from-[#FFF7ED] to-white">
            <TrendingUp className="text-[#F59E0B] mx-auto mb-3" size={32} />
            <p className="text-3xl font-bold text-gray-800 mb-1">15</p>
            <p className="text-gray-600">Students Taught</p>
          </Card>

          <Card className="text-center bg-gradient-to-br from-[#F0FDFA] to-white">
            <div className="text-[#10B981] mx-auto mb-3 text-3xl">₹</div>
            <p className="text-3xl font-bold text-gray-800 mb-1">18,500</p>
            <p className="text-gray-600">Total Earnings</p>
          </Card>
        </div>

        <Card className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#F5F3FF] text-[#A78BFA] rounded-full font-medium border-2 border-[#DDD6FE]"
              >
                {skill}
              </span>
            ))}
            <button className="px-4 py-2 border-2 border-dashed border-[#A78BFA] text-[#A78BFA] rounded-full font-medium hover:bg-[#F5F3FF] transition-colors">
              + Add Skill
            </button>
          </div>
        </Card>

        <Card>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Earnings Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">This Month</span>
                <span className="text-[#A78BFA] font-bold">₹8,500 / ₹10,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] h-3 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
              <div>
                <p className="text-gray-600 text-sm">Teaching</p>
                <p className="text-xl font-bold text-gray-800">₹5,000</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Marketplace</p>
                <p className="text-xl font-bold text-gray-800">₹2,500</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Freelance</p>
                <p className="text-xl font-bold text-gray-800">₹1,000</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Bonuses</p>
                <p className="text-xl font-bold text-gray-800">₹0</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
