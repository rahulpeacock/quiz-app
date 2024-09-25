import { QuizApp } from '@/components/quiz-app/base-quiz-app';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: QuizApp,
});
