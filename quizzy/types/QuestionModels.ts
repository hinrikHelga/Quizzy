export interface IQuestionCard {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: IAnswer | undefined; 
    questionNr: number;
    totalQuestions: number;
}

export interface IQuestion {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export type QuestionState = IQuestion & { answers: string[] }

export interface IAnswer {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}