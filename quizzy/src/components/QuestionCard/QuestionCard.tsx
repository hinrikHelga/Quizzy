import React from 'react';
import { IQuestionCard } from '../../../types/QuestionModels';
import { QuestionCardWrapper, ButtonWrapper } from './QuestionCard.styles';

const QuestionCard: React.FC<IQuestionCard> = ({ 
    question,
    answers,
    callback,
    questionNr,
    userAnswer,
    totalQuestions 
}) => {
    return (
        <QuestionCardWrapper>
            <p className="number">
                Question: { questionNr } / { totalQuestions }
            </p>
            { question }
            <div>
                { answers.map((answer) => (
                    <ButtonWrapper 
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                    >
                        <button onClick={ callback } disabled={!!userAnswer} value={ answer }>
                            <span>{ answer }</span>
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </QuestionCardWrapper>
    );
}

export default QuestionCard;