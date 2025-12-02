export type Gender = 'male' | 'female';

export type ScoreCategory = 'T' | 'H' | 'S';

export type AnswerValue = 0 | 1 | 2 | 3;

export interface Answer {
  label: string;
  value: AnswerValue;
}

export interface Question {
  id: number;
  text: string;
  category: ScoreCategory;
  gender: Gender | 'both';
}

export interface QuizState {
  gender: Gender | null;
  currentQuestionIndex: number;
  answers: Record<number, AnswerValue>;
  isComplete: boolean;
}

export interface CategoryScore {
  category: ScoreCategory;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface QuizResults {
  gender: Gender;
  categoryScores: CategoryScore[];
  totalScore: number;
  maxTotalScore: number;
}
