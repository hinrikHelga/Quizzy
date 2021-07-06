import React, { useState, useEffect } from 'react';
import { getQuestions, Difficulty } from './API';
import QuestionCard from './components/QuestionCard/QuestionCard';
import { TOTAL_QUESTIONS } from './constants';
import { IAnswer, QuestionState } from '../types/QuestionModels';
import { GlobalStyle, QuizWrapper } from './App.styles';

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<IAnswer[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    getQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
    .then((newQuestions: Array<QuestionState>) => {
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    })
    .catch((error: any) => {
      console.log(error);
    })
    
    console.log(questions);
  }

  const checkAnswer = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const clickedAnswer: string = e.currentTarget.value;
      const clickedAnswerCorrect: boolean =  clickedAnswer === questions[number].correct_answer;

      if (clickedAnswerCorrect) { setScore(prev => prev + 1) }

      const answerObj = {
        question: questions[number].question,
        answer: clickedAnswer,
        correct: clickedAnswerCorrect,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObj]);
    } 
  }
  
  
  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
      <GlobalStyle />
      <QuizWrapper>
        <h1> QUIZZY </h1>
        <h3> Get ready to answer all kinds of questions from totally random categories! </h3>
        {
          gameOver || userAnswers.length === TOTAL_QUESTIONS 
          ? <button className="start" onClick={ startQuiz }>Start</button>
          : null 
        }
        { !gameOver ? <p className="score">Score: { score }</p> : null }
        { loading && <p>Loading questions...</p>}
        {
          !loading && !gameOver && (
            <QuestionCard 
              questionNr={ number + 1 }
              totalQuestions={ TOTAL_QUESTIONS }
              question={ questions[number].question }
              answers={ questions[number].answers }
              userAnswer={ userAnswers ? userAnswers[number] : undefined }
              callback={ checkAnswer }
            />
          )
        }
        {
          !gameOver
          && !loading
          && userAnswers.length === number + 1
          && number !== TOTAL_QUESTIONS - 1
          ? <button className="next" onClick={ nextQuestion }>
              Next Question
            </button>
          : null
        }
      </QuizWrapper>
    </>
  );
}

export default App;