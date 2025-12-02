import React from 'react';

export const MemphisShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-10 left-10 w-32 h-32 bg-memphis-coral rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-memphis-purple opacity-20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-memphis-green rounded-full opacity-15"></div>
      <div className="absolute top-1/3 right-10 w-28 h-28 bg-memphis-yellow opacity-20" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
      <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-memphis-pink rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-memphis-blue opacity-25" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-memphis-orange opacity-20"></div>
      
      <svg className="absolute top-20 right-1/4 w-40 h-40 opacity-15" viewBox="0 0 100 100">
        <path d="M 10 50 Q 30 10, 50 50 T 90 50" stroke="#FF6F61" strokeWidth="4" fill="none" />
        <path d="M 10 60 Q 30 20, 50 60 T 90 60" stroke="#6B5B95" strokeWidth="4" fill="none" />
      </svg>
      
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-4 border-memphis-coral opacity-30 rotate-45"></div>
      <div className="absolute top-2/3 right-1/4 w-24 h-24 border-4 border-memphis-purple opacity-25 rounded-full"></div>
    </div>
  );
};
