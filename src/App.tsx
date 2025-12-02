import React, { useState } from 'react';
import { GenderSelection } from './components/GenderSelection';
import { QuizQuestion } from './components/QuizQuestion';
import { Results } from './components/Results';
import { MemphisShapes } from './components/MemphisShapes';
import { Gender, AnswerValue, QuizState } from './types/quiz';
import { getFilteredQuestions, calculateResults } from './utils/quizLogic';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    gender: null,
    currentQuestionIndex: 0,
    answers: {},
    isComplete: false,
  });

  const handleSelectGender = (gender: Gender) => {
    setQuizState(prev => ({ ...prev, gender }));
  };

  const handleSelectAnswer = (value: AnswerValue) => {
    if (!quizState.gender) return;
    
    const questions = getFilteredQuestions(quizState.gender);
    const currentQuestion = questions[quizState.currentQuestionIndex];
    
    setQuizState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: value,
      },
    }));
  };

  const handleNext = () => {
    if (!quizState.gender) return;
    
    const questions = getFilteredQuestions(quizState.gender);
    
    if (quizState.currentQuestionIndex < questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    } else {
      setQuizState(prev => ({ ...prev, isComplete: true }));
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      }));
    }
  };

  const handleRestart = () => {
    setQuizState({
      gender: null,
      currentQuestionIndex: 0,
      answers: {},
      isComplete: false,
    });
  };

  if (!quizState.gender) {
    return (
      <div className="memphis-pattern min-h-screen">
        <MemphisShapes />
        <GenderSelection onSelectGender={handleSelectGender} />
      </div>
    );
  }

  const questions = getFilteredQuestions(quizState.gender);
  const currentQuestion = questions[quizState.currentQuestionIndex];
  const currentAnswer = quizState.answers[currentQuestion.id];

  if (quizState.isComplete) {
    const results = calculateResults(quizState.gender, quizState.answers);
    return (
      <div className="memphis-pattern min-h-screen">
        <MemphisShapes />
        <Results results={results} onRestart={handleRestart} />
      </div>
    );
  }

  return (
    <div className="memphis-pattern min-h-screen">
      <MemphisShapes />
      <QuizQuestion
        question={currentQuestion}
        questionNumber={quizState.currentQuestionIndex + 1}
        totalQuestions={questions.length}
        selectedAnswer={currentAnswer}
        onSelectAnswer={handleSelectAnswer}
        onNext={handleNext}
        onPrevious={handlePrevious}
        canGoNext={currentAnswer !== undefined}
        canGoPrevious={quizState.currentQuestionIndex > 0}
      />
    </div>
  );
}

export default App;
