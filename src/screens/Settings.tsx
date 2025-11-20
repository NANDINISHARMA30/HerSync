import React, { useState } from 'react';
import { User, Bell, Lock, Globe, HelpCircle, Info, ChevronRight, LogOut } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    courses: true,
    messages: true,
    jobs: false,
    marketplace: true,
  });

  const settingsSections = [
    {
      title: 'Account',
      icon: <User size={24} className="text-[#A78BFA]" />,
      items: [
        { label: 'Edit Profile', action: () => console.log('Edit Profile') },
        { label: 'Change Password', action: () => console.log('Change Password') },
        { label: 'Privacy Settings', action: () => console.log('Privacy') },
      ],
    },
    {
      title: 'Preferences',
      icon: <Bell size={24} className="text-[#F59E0B]" />,
      items: [
        { label: 'Notifications', action: () => console.log('Notifications') },
        { label: 'Language', action: () => console.log('Language') },
        { label: 'Accessibility', action: () => console.log('Accessibility') },
      ],
    },
    {
      title: 'Support',
      icon: <HelpCircle size={24} className="text-[#10B981]" />,
      items: [
        { label: 'Help Center', action: () => console.log('Help') },
        { label: 'Report a Problem', action: () => console.log('Report') },
        { label: 'Contact Us', action: () => console.log('Contact') },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3FF]">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        <Card className="mb-6">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b">
            <div className="w-20 h-20 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-full flex items-center justify-center">
              <User size={40} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">Priya Sharma</h3>
              <p className="text-gray-600">priya.sharma@example.com</p>
              <p className="text-sm text-gray-500 mt-1">+91 98765 43210</p>
            </div>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>

          <div className="space-y-6">
            {settingsSections.map((section, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-3">
                  {section.icon}
                  <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
                </div>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      onClick={item.action}
                      className="w-full flex items-center justify-between p-3 bg-[#F5F3FF] hover:bg-[#EDE9FE] rounded-xl transition-colors text-left"
                    >
                      <span className="text-gray-700">{item.label}</span>
                      <ChevronRight size={18} className="text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell size={24} className="text-[#A78BFA]" />
            <h3 className="text-lg font-semibold text-gray-800">Notification Settings</h3>
          </div>
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                <button
                  onClick={() => setNotifications({ ...notifications, [key]: !value })}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    value ? 'bg-[#A78BFA]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      value ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  ></div>
                </button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe size={24} className="text-[#10B981]" />
            <h3 className="text-lg font-semibold text-gray-800">Language</h3>
          </div>
          <div className="space-y-2">
            {['English', 'हिंदी (Hindi)', 'বাংলা (Bengali)'].map((lang, index) => (
              <button
                key={index}
                className={`w-full p-3 rounded-xl text-left transition-colors ${
                  index === 0
                    ? 'bg-[#A78BFA] text-white'
                    : 'bg-[#F5F3FF] text-gray-700 hover:bg-[#EDE9FE]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </Card>

        <Card className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Info size={24} className="text-[#F59E0B]" />
            <h3 className="text-lg font-semibold text-gray-800">About</h3>
          </div>
          <div className="space-y-3 text-gray-600">
            <div className="flex justify-between">
              <span>Version</span>
              <span className="font-semibold">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span>Terms of Service</span>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
            <div className="flex justify-between">
              <span>Privacy Policy</span>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
          </div>
        </Card>

        <Card className="border-2 border-red-200">
          <Button variant="outline" fullWidth className="text-red-600 border-red-600 hover:bg-red-50">
            <LogOut size={18} />
            Logout
          </Button>
        </Card>
      </div>
    </div>
  );
};
