import React, { useState } from 'react';
import { Send, Paperclip, Mic, Shield, Search } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface Contact {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
}

interface Message {
  id: number;
  sender: 'me' | 'other';
  text: string;
  time: string;
  type: 'text' | 'voice' | 'file';
}

export const Chat: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messageText, setMessageText] = useState('');

  const contacts: Contact[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      lastMessage: 'Thank you for the stitching tips!',
      time: '10:30 AM',
      unread: 2,
      avatar: '👩',
    },
    {
      id: 2,
      name: 'Meera Patel',
      lastMessage: 'Can you share the recipe?',
      time: 'Yesterday',
      unread: 0,
      avatar: '👩‍🦱',
    },
    {
      id: 3,
      name: 'Community Center',
      lastMessage: 'New workshop starting next week',
      time: 'Monday',
      unread: 1,
      avatar: '🏛️',
    },
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: 'other',
      text: 'Hello! I saw your embroidery work. It looks beautiful!',
      time: '10:15 AM',
      type: 'text',
    },
    {
      id: 2,
      sender: 'me',
      text: 'Thank you so much! I would love to teach you if you are interested.',
      time: '10:20 AM',
      type: 'text',
    },
    {
      id: 3,
      sender: 'other',
      text: 'Yes, please! When are you available?',
      time: '10:25 AM',
      type: 'text',
    },
    {
      id: 4,
      sender: 'me',
      text: 'I can do evenings after 4 PM. Which day works for you?',
      time: '10:30 AM',
      type: 'text',
    },
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessageText('');
    }
  };

  if (!selectedContact) {
    return (
      <div className="min-h-screen bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Messages</h1>
            <p className="text-gray-600">Connect with other women in our community</p>
          </div>

          <Card className="mb-6 bg-[#FFF7ED]">
            <div className="flex items-start gap-3">
              <Shield className="text-[#F59E0B] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Safety First</h3>
                <p className="text-gray-600 text-sm">
                  Never share personal banking details, passwords, or OTPs. Report any suspicious behavior immediately.
                  Our team monitors for safety, but please be cautious when sharing contact information.
                </p>
              </div>
            </div>
          </Card>

          <Card className="mb-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#A78BFA] focus:outline-none"
              />
            </div>
          </Card>

          <div className="space-y-3">
            {contacts.map((contact) => (
              <Card key={contact.id} hover onClick={() => setSelectedContact(contact)}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {contact.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-800">{contact.name}</h3>
                      <span className="text-sm text-gray-500">{contact.time}</span>
                    </div>
                    <p className="text-gray-600 text-sm truncate">{contact.lastMessage}</p>
                  </div>
                  {contact.unread > 0 && (
                    <div className="w-6 h-6 bg-[#A78BFA] rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                      {contact.unread}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F3FF] flex flex-col">
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={() => setSelectedContact(null)}>
              ← Back
            </Button>
            <div className="w-12 h-12 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-full flex items-center justify-center text-xl">
              {selectedContact.avatar}
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-gray-800">{selectedContact.name}</h2>
              <p className="text-sm text-gray-600">Online</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="mb-4 p-3 bg-[#FFF7ED] rounded-xl text-center">
            <p className="text-sm text-gray-600">
              <Shield className="inline mr-1" size={14} />
              Keep your conversations safe. Never share sensitive personal information.
            </p>
          </div>

          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === 'me'
                      ? 'bg-[#A78BFA] text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="mb-1">{message.text}</p>
                  <p
                    className={`text-xs ${
                      message.sender === 'me' ? 'text-white/70' : 'text-gray-500'
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
              <Paperclip className="text-gray-600" size={20} />
            </button>
            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
              <Mic className="text-gray-600" size={20} />
            </button>
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#A78BFA] focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="p-3 bg-[#A78BFA] hover:bg-[#8B5CF6] rounded-full transition-colors"
            >
              <Send className="text-white" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
