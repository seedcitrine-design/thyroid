import React from 'react';
import { User, Users } from 'lucide-react';
import { Gender } from '../types/quiz';

interface GenderSelectionProps {
  onSelectGender: (gender: Gender) => void;
}

export const GenderSelection: React.FC<GenderSelectionProps> = ({ onSelectGender }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12 relative z-10">
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-memphis-yellow rounded-full opacity-30 animate-pulse"></div>
              <Users className="w-24 h-24 text-memphis-purple relative z-10" strokeWidth={2.5} />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-memphis-purple mb-4 drop-shadow-lg">
            Thyroid & Hormonal Health Quiz
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Discover insights about your thyroid, hormones, and stress levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          <button
            onClick={() => onSelectGender('male')}
            className="group relative overflow-hidden bg-gradient-to-br from-memphis-blue to-memphis-purple p-8 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:rotate-1 border-8 border-memphis-yellow"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-memphis-coral rounded-full opacity-20 -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-memphis-green opacity-20 -ml-12 -mb-12" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block mb-6 p-6 bg-white rounded-full shadow-lg">
                <User className="w-16 h-16 text-memphis-blue" strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl font-bold text-white mb-3 drop-shadow-md">Male</h2>
              <p className="text-white text-lg font-medium opacity-90">Start your assessment</p>
            </div>
            
            <div className="absolute inset-0 bg-memphis-yellow opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => onSelectGender('female')}
            className="group relative overflow-hidden bg-gradient-to-br from-memphis-coral to-memphis-pink p-8 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-rotate-1 border-8 border-memphis-green"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-memphis-purple rounded-full opacity-20 -ml-16 -mt-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-memphis-yellow opacity-20 -mr-12 -mb-12"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block mb-6 p-6 bg-white rounded-full shadow-lg">
                <User className="w-16 h-16 text-memphis-coral" strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl font-bold text-white mb-3 drop-shadow-md">Female</h2>
              <p className="text-white text-lg font-medium opacity-90">Start your assessment</p>
            </div>
            
            <div className="absolute inset-0 bg-memphis-green opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>

        <div className="mt-12 text-center relative z-10">
          <div className="inline-block bg-white p-6 rounded-2xl shadow-xl border-4 border-memphis-purple">
            <p className="text-gray-700 text-lg font-medium">
              📋 Answer questions about your symptoms<br />
              📊 Get personalized scores in 3 categories<br />
              💡 Receive health insights and recommendations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
