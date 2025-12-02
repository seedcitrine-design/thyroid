import { Question } from '../types/quiz';

export const questions: Question[] = [
  // Thyroid Questions (T)
  { id: 1, text: "I feel cold when others feel warm", category: 'T', gender: 'both' },
  { id: 2, text: "I have cold hands and feet", category: 'T', gender: 'both' },
  { id: 3, text: "I need more than 8 hours of sleep to feel rested", category: 'T', gender: 'both' },
  { id: 4, text: "I gain weight easily", category: 'T', gender: 'both' },
  { id: 5, text: "I have trouble losing weight", category: 'T', gender: 'both' },
  { id: 6, text: "I feel fatigued or sluggish", category: 'T', gender: 'both' },
  { id: 7, text: "I feel depressed", category: 'T', gender: 'both' },
  { id: 8, text: "I have difficulty concentrating", category: 'T', gender: 'both' },
  { id: 9, text: "My hair is dry or coarse", category: 'T', gender: 'both' },
  { id: 10, text: "I am losing hair", category: 'T', gender: 'both' },
  { id: 11, text: "My skin is dry", category: 'T', gender: 'both' },
  { id: 12, text: "I have constipation", category: 'T', gender: 'both' },
  { id: 13, text: "I have heavy menstrual bleeding", category: 'T', gender: 'female' },
  { id: 14, text: "I have fluid retention", category: 'T', gender: 'both' },
  { id: 15, text: "I have high cholesterol", category: 'T', gender: 'both' },
  
  // Hormonal Balance Questions (H)
  { id: 16, text: "I have PMS (premenstrual syndrome)", category: 'H', gender: 'female' },
  { id: 17, text: "I have irregular periods", category: 'H', gender: 'female' },
  { id: 18, text: "I have painful periods", category: 'H', gender: 'female' },
  { id: 19, text: "I have hot flashes", category: 'H', gender: 'female' },
  { id: 20, text: "I have night sweats", category: 'H', gender: 'both' },
  { id: 21, text: "I have mood swings", category: 'H', gender: 'both' },
  { id: 22, text: "I have decreased libido", category: 'H', gender: 'both' },
  { id: 23, text: "I have vaginal dryness", category: 'H', gender: 'female' },
  { id: 24, text: "I have breast tenderness", category: 'H', gender: 'female' },
  { id: 25, text: "I have difficulty sleeping", category: 'H', gender: 'both' },
  { id: 26, text: "I have anxiety or nervousness", category: 'H', gender: 'both' },
  { id: 27, text: "I have irritability", category: 'H', gender: 'both' },
  { id: 28, text: "I have memory problems", category: 'H', gender: 'both' },
  { id: 29, text: "I have headaches", category: 'H', gender: 'both' },
  { id: 30, text: "I have acne", category: 'H', gender: 'both' },
  
  // Stress/Adrenal Questions (S)
  { id: 31, text: "I feel stressed or overwhelmed", category: 'S', gender: 'both' },
  { id: 32, text: "I have difficulty handling stress", category: 'S', gender: 'both' },
  { id: 33, text: "I feel tired but wired", category: 'S', gender: 'both' },
  { id: 34, text: "I crave salty foods", category: 'S', gender: 'both' },
  { id: 35, text: "I crave sweet foods", category: 'S', gender: 'both' },
  { id: 36, text: "I feel dizzy when standing up quickly", category: 'S', gender: 'both' },
  { id: 37, text: "I have low blood pressure", category: 'S', gender: 'both' },
  { id: 38, text: "I have difficulty waking up in the morning", category: 'S', gender: 'both' },
  { id: 39, text: "I need caffeine to get going", category: 'S', gender: 'both' },
  { id: 40, text: "I have afternoon energy crashes", category: 'S', gender: 'both' },
  { id: 41, text: "I have decreased tolerance to stress", category: 'S', gender: 'both' },
  { id: 42, text: "I have muscle weakness", category: 'S', gender: 'both' },
  { id: 43, text: "I have joint pain", category: 'S', gender: 'both' },
  { id: 44, text: "I get sick frequently", category: 'S', gender: 'both' },
  { id: 45, text: "I have allergies or sensitivities", category: 'S', gender: 'both' },
];

export const answerOptions = [
  { label: 'Never', value: 0 as const },
  { label: 'Rarely', value: 1 as const },
  { label: 'Often', value: 2 as const },
  { label: 'Very Often / Almost Everyday', value: 3 as const },
];
