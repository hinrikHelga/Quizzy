import React from 'react';
import { IQuestionCard } from '../../../types/QuestionModels';

const QuestionCard: React.FC<IQuestionCard> = ({ 
    question,
    answers,
    callback,
    questionNr,
    userAnswer,
    totalQuestions 
}) => {
    return (
        <div>
            <p className="number">
                Question: { questionNr } / { totalQuestions }
            </p>
            { question }

            <div>
                { answers.map((answer) => 
                    <div key={answer}>
                        <button onClick={ callback } disabled={!!userAnswer} value={ answer }>
                            <span>{ answer }</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default QuestionCard;