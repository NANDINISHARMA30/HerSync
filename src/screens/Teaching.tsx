import React, { useState } from 'react';
import { Upload, Video, FileText, TrendingUp, Calendar, Users, DollarSign } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Teaching: React.FC = () => {
  const [isTeacher, setIsTeacher] = useState(true);

  if (!isTeacher) {
    return (
      <div className="min-h-screen bg-[#F5F3FF] flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <Card>
            <div className="text-center">
              <div className="text-6xl mb-6">👩‍🏫</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Become a Teacher</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Share your knowledge and skills with others while earning money from home. Join our community of empowered women teachers.
              </p>

              <div className="bg-[#F5F3FF] rounded-2xl p-6 mb-6 text-left">
                <h3 className="font-semibold text-gray-800 mb-3">Requirements:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A78BFA]">✓</span>
                    <span>Expert knowledge in any skill (stitching, cooking, crafts, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A78BFA]">✓</span>
                    <span>Basic smartphone or computer for recording</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A78BFA]">✓</span>
                    <span>Passion for teaching and helping others</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A78BFA]">✓</span>
                    <span>Minimum age: 18 years</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#A78BFA] focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">Skills You Can Teach</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#A78BFA] focus:outline-none"
                    placeholder="e.g., Stitching, Cooking, Crafts"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">Years of Experience</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#A78BFA] focus:outline-none"
                    placeholder="Enter years"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">Tell us about yourself</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#A78BFA] focus:outline-none h-32 resize-none"
                    placeholder="Share your experience and why you want to teach..."
                  ></textarea>
                </div>

                <Button fullWidth size="lg" onClick={() => setIsTeacher(true)}>
                  Submit Application
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Teaching Dashboard</h1>
          <p className="text-gray-600">Manage your courses and track your earnings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-[#F5F3FF] to-white">
            <TrendingUp className="text-[#A78BFA] mb-3" size={28} />
            <p className="text-3xl font-bold text-gray-800 mb-1">₹12,500</p>
            <p className="text-gray-600 text-sm">This Week</p>
          </Card>

          <Card className="bg-gradient-to-br from-[#FFF7ED] to-white">
            <Users className="text-[#F59E0B] mb-3" size={28} />
            <p className="text-3xl font-bold text-gray-800 mb-1">42</p>
            <p className="text-gray-600 text-sm">Active Students</p>
          </Card>

          <Card className="bg-gradient-to-br from-[#F0FDFA] to-white">
            <Calendar className="text-[#10B981] mb-3" size={28} />
            <p className="text-3xl font-bold text-gray-800 mb-1">8</p>
            <p className="text-gray-600 text-sm">Classes This Week</p>
          </Card>

          <Card className="bg-gradient-to-br from-[#FEF9C3] to-white">
            <Video className="text-[#F59E0B] mb-3" size={28} />
            <p className="text-3xl font-bold text-gray-800 mb-1">5</p>
            <p className="text-gray-600 text-sm">Total Courses</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Weekly Earnings</h3>
            <div className="space-y-3">
              {[
                { day: 'Monday', amount: 2500 },
                { day: 'Tuesday', amount: 1800 },
                { day: 'Wednesday', amount: 3200 },
                { day: 'Thursday', amount: 2100 },
                { day: 'Friday', amount: 2900 },
              ].map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600">{day.day}</span>
                  <div className="flex items-center gap-3 flex-1 mx-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] h-2 rounded-full"
                        style={{ width: `${(day.amount / 3200) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-[#A78BFA] font-semibold">₹{day.amount}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Classes</h3>
            <div className="space-y-3">
              {[
                { title: 'Basic Stitching', time: 'Today, 3:00 PM', students: 12 },
                { title: 'Advanced Patterns', time: 'Tomorrow, 10:00 AM', students: 8 },
                { title: 'Embroidery Workshop', time: 'Friday, 2:00 PM', students: 15 },
              ].map((class_item, index) => (
                <div key={index} className="p-3 bg-[#F5F3FF] rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{class_item.title}</h4>
                    <span className="text-xs bg-[#A78BFA] text-white px-2 py-1 rounded-full">{class_item.students} students</span>
                  </div>
                  <p className="text-sm text-gray-600">{class_item.time}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Your Courses</h3>
            <Button size="sm">
              <Upload size={16} />
              Upload New Course
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Basic Stitching & Tailoring', students: 42, revenue: 21000, rating: 4.8 },
              { title: 'Advanced Embroidery', students: 28, revenue: 14000, rating: 4.9 },
              { title: 'Pattern Making', students: 35, revenue: 17500, rating: 4.7 },
            ].map((course, index) => (
              <Card key={index} className="bg-[#F5F3FF]">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-800 flex-1">{course.title}</h4>
                  <span className="text-yellow-600 text-sm font-semibold">⭐ {course.rating}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Students:</span>
                    <span className="font-semibold text-gray-800">{course.students}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Revenue:</span>
                    <span className="font-semibold text-[#10B981]">₹{course.revenue}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" fullWidth>
                    Edit
                  </Button>
                  <Button size="sm" fullWidth>
                    View
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
