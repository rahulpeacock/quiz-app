import { Header } from '@/components/header/base-header';
import { QuizApp } from '@/components/quiz-app/base-quiz-app';
import { createFileRoute } from '@tanstack/react-router';
import React from 'react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <React.Fragment>
      <Header />
      <QuizApp />
    </React.Fragment>
  );
}
