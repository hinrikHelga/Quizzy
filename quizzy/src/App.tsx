import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard/QuestionCard';
import { TOTAL_QUESTIONS } from './constants';

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  return (
    <div className="App">
      <h1> QUIZZY </h1>
      <p> Get ready to answer all kinds of questions from random categories! </p>
      <button className="start" onClick={startTrivia}>Start</button>
      <p>Loading questions...</p>
      <QuestionCard 
          questionNr={ number + 1 }
          totalQuestions={ TOTAL_QUESTIONS }
          question={ questions[number].question }
          answers={ questions[number].answers }
          userAnswer={ userAnswers ? userAnswers[number] : undefined }
          callback={ checkAnswers }
      />
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

const startTrivia = async () => {

}

const checkAnswers = async (e: React.MouseEvent<HTMLButtonElement>) => {

}


const nextQuestion = () => {

}

export default App;
