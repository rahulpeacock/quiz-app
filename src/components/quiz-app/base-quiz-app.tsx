import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { QUESTIONS } from './questions';

export function QuizApp() {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<string[]>(new Array(QUESTIONS.length).fill(''));

  function calculateScore() {
    return answers.filter((answer, index) => answer === QUESTIONS[index].answer).length;
  }

  function Score() {
    return (
      <div className='text-center'>
        <p>
          Your Score: {calculateScore()}/{QUESTIONS.length}
        </p>
        <Button
          type='button'
          className='mt-3'
          onClick={() => {
            setQuestionIndex(0);
            setAnswers(new Array(QUESTIONS.length).fill(''));
          }}
        >
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <main>
      <section className='min-h-screen flex items-start justify-center font-poppins'>
        <div className='py-24'>
          {questionIndex > QUESTIONS.length - 1 ? (
            <Score />
          ) : (
            <div>
              <div className='flex items-end justify-between pb-3'>
                <h2 className='text-xl font-semibold'>Question {questionIndex + 1}</h2>
                <div className='flex items-center gap-2'>
                  <Button
                    type='button'
                    className='size-8'
                    size='icon'
                    variant='secondary'
                    onClick={() => setQuestionIndex((prev) => Math.max(prev - 1, 0))}
                    disabled={questionIndex === 0}
                  >
                    <ChevronLeft size={14} />
                  </Button>
                  <Button
                    type='button'
                    className='size-8'
                    size='icon'
                    variant='secondary'
                    onClick={() => setQuestionIndex((prev) => Math.min(prev + 1, QUESTIONS.length - 1))}
                    disabled={questionIndex === QUESTIONS.length - 1}
                  >
                    <ChevronRight size={14} />
                  </Button>
                </div>
              </div>
              <div className='bg-muted min-w-[600px] rounded-md'>
                <div className='p-5'>
                  <p className='font-medium pb-3'>{QUESTIONS[questionIndex].question}</p>
                  <RadioGroup
                    key={questionIndex}
                    className='space-y-1'
                    value={answers[questionIndex]}
                    onValueChange={(value) => setAnswers((prev) => prev.map((val, index) => (index === questionIndex ? value : val)))}
                  >
                    {QUESTIONS[questionIndex].options.map((option) => {
                      return (
                        <div key={`${option}-${questionIndex}`} className='flex items-center justify-start gap-2'>
                          <RadioGroupItem key={questionIndex} value={option} id={option} />
                          <Label htmlFor={option}>{option}</Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </div>
                <div className='w-max ml-auto p-3 pt-0'>
                  <Button type='button' onClick={() => setQuestionIndex((prev) => prev + 1)} size='lg'>
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
