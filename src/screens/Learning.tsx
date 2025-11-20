import React, { useState } from 'react';
import { Book, Clock, Users, Star, Play, FileText, Mic } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  thumbnail: string;
  category: string;
  price: string;
}

export const Learning: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [inClass, setInClass] = useState(false);

  const courses: Course[] = [
    {
      id: 1,
      title: 'Basic Stitching & Tailoring',
      instructor: 'Rekha Devi',
      duration: '8 weeks',
      students: 245,
      rating: 4.8,
      thumbnail: '🧵',
      category: 'Craft',
      price: 'Free',
    },
    {
      id: 2,
      title: 'Digital Literacy Basics',
      instructor: 'Sunita Sharma',
      duration: '4 weeks',
      students: 180,
      rating: 4.9,
      thumbnail: '💻',
      category: 'Technology',
      price: 'Free',
    },
    {
      id: 3,
      title: 'Traditional Cooking',
      instructor: 'Meera Patel',
      duration: '6 weeks',
      students: 320,
      rating: 4.7,
      thumbnail: '🍳',
      category: 'Cooking',
      price: 'Free',
    },
    {
      id: 4,
      title: 'Handicraft Making',
      instructor: 'Lakshmi Bai',
      duration: '10 weeks',
      students: 156,
      rating: 4.6,
      thumbnail: '🎨',
      category: 'Craft',
      price: '₹500',
    },
    {
      id: 5,
      title: 'Financial Literacy',
      instructor: 'Anjali Singh',
      duration: '5 weeks',
      students: 198,
      rating: 4.9,
      thumbnail: '💰',
      category: 'Business',
      price: 'Free',
    },
    {
      id: 6,
      title: 'Basic English Speaking',
      instructor: 'Preeti Kumar',
      duration: '12 weeks',
      students: 410,
      rating: 4.8,
      thumbnail: '🗣️',
      category: 'Language',
      price: 'Free',
    },
  ];

  if (inClass) {
    return (
      <div className="min-h-screen bg-[#F5F3FF]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Button variant="outline" onClick={() => setInClass(false)} className="mb-4">
            ← Back to Courses
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="mb-4">
                <div className="aspect-video bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-4">
                  <Play size={80} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedCourse?.title}</h2>
                <p className="text-gray-600 mb-4">Lesson 3: Understanding Basic Patterns</p>

                <div className="flex gap-3">
                  <Button>
                    <Play size={18} />
                    Play
                  </Button>
                  <Button variant="outline">
                    <Mic size={18} />
                    Voice Instructions
                  </Button>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Course Content</h3>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((lesson) => (
                    <div
                      key={lesson}
                      className="flex items-center justify-between p-3 bg-[#F5F3FF] rounded-xl hover:bg-[#EDE9FE] cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#A78BFA] rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {lesson}
                        </div>
                        <span className="font-medium text-gray-700">Lesson {lesson}</span>
                      </div>
                      <Clock size={16} className="text-gray-400" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div>
              <Card className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Instructor</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FED7AA] to-[#FFEDD5] rounded-full flex items-center justify-center">
                    <span className="text-2xl">👩‍🏫</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{selectedCourse?.instructor}</p>
                    <p className="text-sm text-gray-600">Expert Teacher</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  15+ years of experience in teaching stitching and tailoring. Helped 500+ women start their own businesses.
                </p>
                <Button variant="outline" fullWidth size="sm">
                  View Profile
                </Button>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Notes</h3>
                <textarea
                  className="w-full h-32 p-3 border-2 border-gray-200 rounded-xl focus:border-[#A78BFA] focus:outline-none resize-none"
                  placeholder="Take your notes here..."
                ></textarea>
                <Button size="sm" fullWidth className="mt-3">
                  <FileText size={16} />
                  Save Notes
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedCourse) {
    return (
      <div className="min-h-screen bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Button variant="outline" onClick={() => setSelectedCourse(null)} className="mb-4">
            ← Back to Courses
          </Button>

          <Card>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="text-6xl mb-4">{selectedCourse.thumbnail}</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3">{selectedCourse.title}</h2>
                <p className="text-gray-600 mb-4">
                  Learn professional {selectedCourse.category.toLowerCase()} skills from experienced instructors. This comprehensive course
                  covers everything you need to know to start your journey.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={18} />
                    <span>{selectedCourse.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={18} />
                    <span>{selectedCourse.students} students</span>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-600">
                    <Star size={18} fill="currentColor" />
                    <span>{selectedCourse.rating}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">What you'll learn:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#A78BFA] mt-1">✓</span>
                      <span className="text-gray-600">Basic to advanced techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#A78BFA] mt-1">✓</span>
                      <span className="text-gray-600">Practical hands-on projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#A78BFA] mt-1">✓</span>
                      <span className="text-gray-600">Certificate upon completion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#A78BFA] mt-1">✓</span>
                      <span className="text-gray-600">Lifetime access to materials</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <Card className="bg-[#F5F3FF] border-2 border-[#A78BFA]">
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold text-[#A78BFA] mb-2">{selectedCourse.price}</p>
                    <p className="text-gray-600 text-sm">Full course access</p>
                  </div>
                  <Button fullWidth size="lg" onClick={() => setInClass(true)}>
                    <Play size={18} />
                    Start Learning
                  </Button>
                </Card>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Instructor</h4>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FED7AA] to-[#FFEDD5] rounded-full flex items-center justify-center">
                      <span className="text-xl">👩‍🏫</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{selectedCourse.instructor}</p>
                      <div className="flex items-center gap-1 text-sm text-yellow-600">
                        <Star size={12} fill="currentColor" />
                        <span>{selectedCourse.rating}</span>
                      </div>
                    </div>
                  </div>
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Learn New Skills</h1>
          <p className="text-gray-600">Choose from our wide range of courses designed for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} hover onClick={() => setSelectedCourse(course)}>
              <div className="text-6xl mb-4">{course.thumbnail}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.instructor}</p>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{course.students}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-yellow-600">
                  <Star size={16} fill="currentColor" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <span className="text-[#A78BFA] font-bold text-lg">{course.price}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
