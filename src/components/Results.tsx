import React from 'react';
import { RotateCcw, Download, Share2 } from 'lucide-react';
import { QuizResults } from '../types/quiz';
import { getCategoryName, getCategoryDescription } from '../utils/quizLogic';

interface ResultsProps {
  results: QuizResults;
  onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({ results, onRestart }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'T': return { bg: 'bg-memphis-blue', text: 'text-memphis-blue', border: 'border-memphis-blue' };
      case 'H': return { bg: 'bg-memphis-coral', text: 'text-memphis-coral', border: 'border-memphis-coral' };
      case 'S': return { bg: 'bg-memphis-green', text: 'text-memphis-green', border: 'border-memphis-green' };
      default: return { bg: 'bg-memphis-purple', text: 'text-memphis-purple', border: 'border-memphis-purple' };
    }
  };

  const overallPercentage = Math.round((results.totalScore / results.maxTotalScore) * 100);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-6 relative">
            <div className="absolute -inset-8 bg-memphis-yellow rounded-full opacity-30 animate-pulse"></div>
            <div className="relative bg-white rounded-full p-8 shadow-2xl border-8 border-memphis-purple">
              <div className="text-6xl font-bold text-memphis-coral">{overallPercentage}%</div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-memphis-purple mb-4 drop-shadow-lg">
            Your Results
          </h1>
          <p className="text-2xl text-gray-700 font-medium">
            {results.gender === 'male' ? 'Male' : 'Female'} Health Assessment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {results.categoryScores.map((categoryScore, index) => {
            const colors = getCategoryColor(categoryScore.category);
            const delay = index * 100;
            
            return (
              <div
                key={categoryScore.category}
                className={`bg-white rounded-3xl shadow-2xl p-8 border-8 ${colors.border} relative overflow-hidden transform transition-all duration-500 hover:scale-105`}
                style={{ animationDelay: `${delay}ms` }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} rounded-full opacity-20 -mr-16 -mt-16`}></div>
                
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>
                    {getCategoryName(categoryScore.category)}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-4xl font-bold text-gray-800">
                        {categoryScore.percentage}%
                      </span>
                      <span className="text-lg text-gray-600 font-medium">
                        {categoryScore.score}/{categoryScore.maxScore}
                      </span>
                    </div>
                    
                    <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden border-4 border-gray-300">
                      <div
                        className={`absolute top-0 left-0 h-full ${colors.bg} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${categoryScore.percentage}%`,
                          transitionDelay: `${delay}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {getCategoryDescription(categoryScore.category, categoryScore.percentage)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-8 border-memphis-yellow mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-memphis-pink rounded-full opacity-20 -ml-20 -mt-20"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-memphis-blue opacity-20 -mr-16 -mb-16" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-memphis-purple mb-6">Important Note</h2>
            <div className="space-y-4 text-lg text-gray-700 font-medium leading-relaxed">
              <p>
                This quiz is designed to help you identify potential symptoms related to thyroid function, 
                hormonal balance, and stress levels. It is <strong>not a diagnostic tool</strong> and should 
                not replace professional medical advice.
              </p>
              <p>
                If you scored high in any category or have concerns about your health, please consult with 
                a qualified healthcare provider who can perform appropriate tests and provide personalized 
                treatment recommendations.
              </p>
              <p className="text-memphis-coral font-bold">
                🏥 Always seek professional medical guidance for health concerns
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onRestart}
            className="flex items-center gap-3 px-8 py-4 bg-memphis-purple text-white rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-all duration-300 border-4 border-memphis-yellow"
          >
            <RotateCcw className="w-6 h-6" />
            Take Quiz Again
          </button>
          
          <button
            onClick={() => window.print()}
            className="flex items-center gap-3 px-8 py-4 bg-memphis-coral text-white rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-all duration-300 border-4 border-memphis-green"
          >
            <Download className="w-6 h-6" />
            Save Results
          </button>
          
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Thyroid & Hormonal Health Quiz',
                  text: `I completed the health quiz! My overall score: ${overallPercentage}%`,
                  url: window.location.href,
                });
              }
            }}
            className="flex items-center gap-3 px-8 py-4 bg-memphis-green text-white rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-all duration-300 border-4 border-memphis-blue"
          >
            <Share2 className="w-6 h-6" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};
