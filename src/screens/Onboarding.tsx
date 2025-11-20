import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Book, Users, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '../components/Button';

interface OnboardingSlide {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export const Onboarding: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: OnboardingSlide[] = [
    {
      icon: <Book size={80} />,
      title: 'Learn New Skills',
      description: 'Access courses on stitching, cooking, digital literacy, and more. Learn at your own pace.',
      color: 'text-[#A78BFA]',
    },
    {
      icon: <Users size={80} />,
      title: 'Teach & Earn',
      description: 'Share your knowledge with others. Teach what you know and earn money from home.',
      color: 'text-[#10B981]',
    },
    {
      icon: <ShoppingBag size={80} />,
      title: 'Showcase & Sell',
      description: 'Display your talents and sell your crafts, food, or services in our marketplace.',
      color: 'text-[#F59E0B]',
    },
    {
      icon: <Heart size={80} />,
      title: 'Grow Together',
      description: 'Join a supportive community of women. Share experiences, find work, and thrive together.',
      color: 'text-[#EF4444]',
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-[#F5F3FF] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <div className={`${slide.color} mb-6`}>{slide.icon}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{slide.title}</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md">{slide.description}</p>

            <div className="flex gap-2 mb-8">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-[#A78BFA]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-4 w-full max-w-md">
              {currentSlide > 0 && (
                <Button variant="outline" onClick={handlePrev} fullWidth>
                  <ChevronLeft size={20} />
                  Previous
                </Button>
              )}
              <Button onClick={handleNext} fullWidth>
                {currentSlide < slides.length - 1 ? (
                  <>
                    Next
                    <ChevronRight size={20} />
                  </>
                ) : (
                  'Get Started'
                )}
              </Button>
            </div>

            {currentSlide === 0 && (
              <button onClick={onComplete} className="mt-4 text-gray-500 hover:text-gray-700 underline">
                Skip
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
