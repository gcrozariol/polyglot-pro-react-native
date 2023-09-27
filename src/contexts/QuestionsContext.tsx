import React, {createContext, ReactNode, useEffect, useState} from 'react';
import db from 'src/lib/firestore';

interface Question {
  question: string;
  answer: string;
  fullAnswer: string;
  wordToTranslate: string;
  possibleAnswers: string[];
}

interface QuestionsContextType {
  currentQuestion: Question | null;
  goToNextQuestion: () => void;
}

export const QuestionsContext = createContext({} as QuestionsContextType);

interface QuestionsContextProviderProps {
  children: ReactNode;
}

export function QuestionsContextProvider({
  children,
}: QuestionsContextProviderProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  let questionIndex = 0;
  const totalNumberOfQuestions = questions.length;

  function goToNextQuestion() {
    questionIndex = (questionIndex + 1) % totalNumberOfQuestions;
    setCurrentQuestion(questions[questionIndex]);
  }

  useEffect(() => {
    async function fetchQuestions() {
      const questionsCollection = await db.collection('questions').get();
      const questionsDocs = questionsCollection.docs;

      const questions = [];

      for (const question of questionsDocs) {
        const questionData = question.data() as Question;
        questions.push(questionData);
      }

      setQuestions(questions);
      setCurrentQuestion(questions[0]);
    }

    fetchQuestions();
  }, []);

  return (
    <QuestionsContext.Provider value={{currentQuestion, goToNextQuestion}}>
      {children}
    </QuestionsContext.Provider>
  );
}
