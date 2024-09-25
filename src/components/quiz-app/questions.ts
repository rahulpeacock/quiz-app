import { z } from 'zod';

export const questionSchema = z.object({
  question: z.string(),
  options: z.array(z.string()),
  answer: z.string(),
});

export const QUESTIONS: z.infer<typeof questionSchema>[] = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars',
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ['Harper Lee', 'F. Scott Fitzgerald', 'J.K. Rowling', 'Mark Twain'],
    answer: 'Harper Lee',
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Great White Shark'],
    answer: 'Blue Whale',
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ['Oxygen', 'Gold', 'Osmium', 'Oganesson'],
    answer: 'Oxygen',
  },
  {
    question: 'What is the capital of Japan?',
    options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
    answer: 'Tokyo',
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'Japan', 'Thailand', 'India'],
    answer: 'Japan',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Claude Monet'],
    answer: 'Leonardo da Vinci',
  },
  {
    question: 'Which is the smallest prime number?',
    options: ['1', '2', '3', '5'],
    answer: '2',
  },
  {
    question: 'Which gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Nitrogen'],
    answer: 'Carbon Dioxide',
  },
];
