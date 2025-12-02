import { questions } from '../data/questions';
import { Gender, AnswerValue, CategoryScore, QuizResults } from '../types/quiz';

export const getFilteredQuestions = (gender: Gender) => {
  return questions.filter(q => q.gender === 'both' || q.gender === gender);
};

export const calculateResults = (
  gender: Gender,
  answers: Record<number, AnswerValue>
): QuizResults => {
  const filteredQuestions = getFilteredQuestions(gender);
  
  const categoryScores: Record<string, { score: number; maxScore: number }> = {
    T: { score: 0, maxScore: 0 },
    H: { score: 0, maxScore: 0 },
    S: { score: 0, maxScore: 0 },
  };

  filteredQuestions.forEach(question => {
    const answer = answers[question.id] || 0;
    categoryScores[question.category].score += answer;
    categoryScores[question.category].maxScore += 3;
  });

  const categoryScoresArray: CategoryScore[] = Object.entries(categoryScores).map(
    ([category, { score, maxScore }]) => ({
      category: category as 'T' | 'H' | 'S',
      score,
      maxScore,
      percentage: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0,
    })
  );

  const totalScore = categoryScoresArray.reduce((sum, cat) => sum + cat.score, 0);
  const maxTotalScore = categoryScoresArray.reduce((sum, cat) => sum + cat.maxScore, 0);

  return {
    gender,
    categoryScores: categoryScoresArray,
    totalScore,
    maxTotalScore,
  };
};

export const getCategoryName = (category: 'T' | 'H' | 'S'): string => {
  const names = {
    T: 'Thyroid Health',
    H: 'Hormonal Balance',
    S: 'Stress & Adrenal Function',
  };
  return names[category];
};

export const getCategoryDescription = (category: 'T' | 'H' | 'S', percentage: number): string => {
  if (percentage < 30) {
    return 'Your symptoms in this area are minimal. Keep maintaining healthy habits!';
  } else if (percentage < 60) {
    return 'You have some symptoms in this area. Consider lifestyle modifications and monitoring.';
  } else {
    return 'You have significant symptoms in this area. Consider consulting with a healthcare provider.';
  }
};
