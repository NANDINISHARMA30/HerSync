import React from 'react';
import { Heart, Phone, Video, MessageCircle, Book, Users, Smile } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Wellness: React.FC = () => {
  const quotes = [
    {
      text: "You are stronger than you think. Every challenge makes you more powerful.",
      author: "Daily Inspiration",
    },
    {
      text: "Taking care of yourself is not selfish. You deserve love and care.",
      author: "Self-Care Reminder",
    },
    {
      text: "Your dreams are valid. Keep moving forward, one step at a time.",
      author: "Motivation",
    },
  ];

  const videos = [
    { title: 'Morning Yoga - 10 Minutes', duration: '10 min', category: 'Exercise', icon: '🧘‍♀️' },
    { title: 'Breathing & Relaxation', duration: '15 min', category: 'Meditation', icon: '🌸' },
    { title: 'Building Confidence', duration: '20 min', category: 'Motivation', icon: '💪' },
    { title: 'Stress Relief Exercises', duration: '12 min', category: 'Wellness', icon: '🌺' },
  ];

  const supportGroups = [
    { name: 'New Mothers Support', members: 142, topic: 'Parenting & Family' },
    { name: 'Career Growth Circle', members: 98, topic: 'Professional Development' },
    { name: 'Mental Health Warriors', members: 234, topic: 'Mental Wellness' },
    { name: 'Entrepreneurs Unite', members: 167, topic: 'Business & Finance' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3FF]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Wellness & Support</h1>
          <p className="text-gray-600">Take care of your mental and physical well-being</p>
        </div>

        <Card className="mb-8 bg-gradient-to-br from-[#EF4444] to-[#DC2626] text-white">
          <div className="flex items-start gap-4">
            <Phone className="flex-shrink-0 mt-1" size={28} />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Help</h3>
              <p className="mb-4 opacity-90">
                If you are in crisis or need immediate help, please reach out to these helplines:
              </p>
              <div className="space-y-2 mb-4">
                <div className="bg-white/20 rounded-xl p-3">
                  <p className="font-semibold">Women Helpline: 181</p>
                </div>
                <div className="bg-white/20 rounded-xl p-3">
                  <p className="font-semibold">Mental Health Helpline: 1800-599-0019</p>
                </div>
              </div>
              <Button variant="secondary" size="sm">
                <Phone size={16} />
                Call Now
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {quotes.map((quote, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#F5F3FF] to-white border-2 border-[#DDD6FE]"
            >
              <Smile className="text-[#A78BFA] mb-4" size={32} />
              <p className="text-gray-700 italic mb-3 text-lg">{quote.text}</p>
              <p className="text-sm text-gray-600 font-medium">— {quote.author}</p>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Wellness Videos</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <Card key={index} hover>
                <div className="aspect-video bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-5xl">{video.icon}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-[#FEF9C3] text-yellow-700 rounded-full text-xs font-medium mb-2">
                  {video.category}
                </span>
                <h3 className="font-semibold text-gray-800 mb-1">{video.title}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-gray-600">{video.duration}</span>
                  <Button size="sm">
                    <Video size={14} />
                    Watch
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-[#A78BFA]" size={28} />
              <h2 className="text-2xl font-semibold text-gray-800">Support Groups</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Join women-only support groups where you can share experiences, seek advice, and build meaningful connections.
            </p>
            <div className="space-y-3">
              {supportGroups.map((group, index) => (
                <div key={index} className="p-4 bg-[#F5F3FF] rounded-xl hover:bg-[#EDE9FE] transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{group.name}</h4>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                      {group.members} members
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{group.topic}</p>
                </div>
              ))}
            </div>
            <Button fullWidth className="mt-4">
              <Users size={18} />
              Browse All Groups
            </Button>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-6">
              <Book className="text-[#10B981]" size={28} />
              <h2 className="text-2xl font-semibold text-gray-800">Self-Care Resources</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-[#F0FDFA] to-white rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Daily Meditation</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Start your day with 10 minutes of guided meditation for peace and clarity.
                </p>
                <Button variant="outline" size="sm">
                  Start Session
                </Button>
              </div>

              <div className="p-4 bg-gradient-to-br from-[#FFF7ED] to-white rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Gratitude Journal</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Write down three things you're grateful for today.
                </p>
                <Button variant="outline" size="sm">
                  Open Journal
                </Button>
              </div>

              <div className="p-4 bg-gradient-to-br from-[#F5F3FF] to-white rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Talk to a Counselor</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Connect with a trained counselor for confidential support.
                </p>
                <Button variant="outline" size="sm">
                  <MessageCircle size={16} />
                  Book Session
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-[#F0FDFA] to-[#CCFBF1]">
          <div className="text-center max-w-2xl mx-auto">
            <Heart className="text-[#10B981] mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold text-gray-800 mb-3">You Are Not Alone</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Our community is here to support you. Whether you need someone to talk to, advice on a challenge,
              or just want to connect with others who understand your journey - we're here for you.
            </p>
            <Button size="lg">
              <Users size={18} />
              Join Community
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
