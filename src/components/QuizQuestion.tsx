import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Question, AnswerValue } from '../types/quiz';
import { answerOptions } from '../data/questions';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: AnswerValue | undefined;
  onSelectAnswer: (value: AnswerValue) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
}) => {
  const progress = (questionNumber / totalQuestions) * 100;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'T': return 'bg-memphis-blue';
      case 'H': return 'bg-memphis-coral';
      case 'S': return 'bg-memphis-green';
      default: return 'bg-memphis-purple';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'T': return 'Thyroid';
      case 'H': return 'Hormonal';
      case 'S': return 'Stress';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="max-w-3xl w-full relative z-10">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-memphis-purple">
              Question {questionNumber} of {totalQuestions}
            </span>
            <span className={`px-4 py-2 rounded-full text-white font-bold text-lg ${getCategoryColor(question.category)}`}>
              {getCategoryName(question.category)}
            </span>
          </div>
          
          <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden border-4 border-memphis-purple">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-memphis-coral via-memphis-yellow to-memphis-green transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
            <div className="absolute inset-0 zigzag-border opacity-20"></div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-8 border-memphis-yellow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-memphis-pink rounded-full opacity-20 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-memphis-blue opacity-20 -ml-16 -mb-16" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-memphis-purple mb-8 relative z-10">
            {question.text}
          </h2>

          <div className="space-y-4 relative z-10">
            {answerOptions.map((option, index) => {
              const isSelected = selectedAnswer === option.value;
              const colors = ['memphis-coral', 'memphis-purple', 'memphis-green', 'memphis-blue'];
              const color = colors[index % colors.length];
              
              return (
                <button
                  key={option.value}
                  onClick={() => onSelectAnswer(option.value)}
                  className={`w-full p-6 rounded-2xl text-left font-bold text-xl transition-all duration-300 transform hover:scale-105 border-4 ${
                    isSelected
                      ? `bg-${color} text-white border-${color} shadow-2xl scale-105`
                      : `bg-white text-gray-700 border-${color} hover:bg-${color} hover:text-white shadow-lg`
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option.label}</span>
                    <span className={`w-10 h-10 rounded-full border-4 flex items-center justify-center ${
                      isSelected ? 'bg-white border-white' : `border-${color}`
                    }`}>
                      {isSelected && <span className={`text-${color} text-2xl`}>✓</span>}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between mt-8 gap-4">
          <button
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 border-4 ${
              canGoPrevious
                ? 'bg-memphis-purple text-white border-memphis-yellow hover:scale-105 shadow-xl'
                : 'bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
            Previous
          </button>

          <button
            onClick={onNext}
            disabled={!canGoNext}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 border-4 ${
              canGoNext
                ? 'bg-memphis-coral text-white border-memphis-green hover:scale-105 shadow-xl'
                : 'bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed'
            }`}
          >
            {questionNumber === totalQuestions ? 'Finish' : 'Next'}
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
