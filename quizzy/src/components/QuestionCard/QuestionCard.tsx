import React from 'react';
import { IQuestionCard } from '../../../types/QuestionModels';

const QuestionCard: React.FC<IQuestionCard> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions 
}) => {
    return (
        <div>
            <p className="number">
                Question: { questionNr } / { totalQuestions }
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                { answers.map((answer) => 
                    <button onClick={ callback }>
                        <span dangerouslySetInnerHTML= {{ __html: answer}} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default QuestionCard;