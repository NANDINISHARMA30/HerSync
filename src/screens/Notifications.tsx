import React from 'react';
import { Bell, Heart, MessageCircle, ShoppingBag, BookOpen, Briefcase, CheckCircle } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface Notification {
  id: number;
  type: 'like' | 'message' | 'purchase' | 'course' | 'job' | 'system';
  title: string;
  description: string;
  time: string;
  read: boolean;
  icon: React.ReactNode;
  color: string;
}

export const Notifications: React.FC = () => {
  const notifications: Notification[] = [
    {
      id: 1,
      type: 'message',
      title: 'New Message',
      description: 'Priya Sharma sent you a message about your stitching class',
      time: '5 minutes ago',
      read: false,
      icon: <MessageCircle size={20} />,
      color: 'bg-[#A78BFA]',
    },
    {
      id: 2,
      type: 'like',
      title: 'Your work was liked',
      description: '15 people liked your embroidery showcase',
      time: '1 hour ago',
      read: false,
      icon: <Heart size={20} />,
      color: 'bg-[#EF4444]',
    },
    {
      id: 3,
      type: 'purchase',
      title: 'Item Sold',
      description: 'Your handmade saree has been purchased for ₹1,200',
      time: '2 hours ago',
      read: false,
      icon: <ShoppingBag size={20} />,
      color: 'bg-[#10B981]',
    },
    {
      id: 4,
      type: 'course',
      title: 'Course Progress',
      description: 'You completed "Basic Stitching Module 3" - Keep going!',
      time: '5 hours ago',
      read: true,
      icon: <BookOpen size={20} />,
      color: 'bg-[#F59E0B]',
    },
    {
      id: 5,
      type: 'job',
      title: 'New Job Match',
      description: 'A home cooking job in your area matches your skills',
      time: '1 day ago',
      read: true,
      icon: <Briefcase size={20} />,
      color: 'bg-[#8B5CF6]',
    },
    {
      id: 6,
      type: 'system',
      title: 'Weekly Summary',
      description: 'You earned ₹2,500 this week! Great progress!',
      time: '2 days ago',
      read: true,
      icon: <CheckCircle size={20} />,
      color: 'bg-[#10B981]',
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-[#F5F3FF]">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Notifications</h1>
            <p className="text-gray-600">
              {unreadCount > 0 ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
            </p>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" size="sm">
              Mark all as read
            </Button>
          )}
        </div>

        {unreadCount > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">New</h2>
            <div className="space-y-3">
              {notifications
                .filter((n) => !n.read)
                .map((notification) => (
                  <Card
                    key={notification.id}
                    hover
                    className="bg-gradient-to-r from-[#F5F3FF] to-white border-l-4 border-[#A78BFA]"
                  >
                    <div className="flex gap-4">
                      <div className={`${notification.color} w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                        {notification.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-semibold text-gray-800">{notification.title}</h3>
                          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{notification.time}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{notification.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Earlier</h2>
          <div className="space-y-3">
            {notifications
              .filter((n) => n.read)
              .map((notification) => (
                <Card key={notification.id} hover className="opacity-75 hover:opacity-100 transition-opacity">
                  <div className="flex gap-4">
                    <div className={`${notification.color} w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                      {notification.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-gray-800">{notification.title}</h3>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{notification.time}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{notification.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {notifications.length === 0 && (
          <Card className="text-center py-12">
            <Bell size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No notifications yet</h3>
            <p className="text-gray-600">When you get notifications, they'll show up here</p>
          </Card>
        )}
      </div>
    </div>
  );
};
