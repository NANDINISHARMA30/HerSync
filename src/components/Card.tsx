import React from 'react';

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, onClick, className = '', hover = false }) => {
  const hoverClass = hover ? 'hover:shadow-lg hover:scale-105 cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-3xl p-6 shadow-md transition-all duration-200 ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
};
