// Fetching logic from API
import axios from "axios";
import { shuffleAnswers } from './utils';
import { IQuestion } from '../types/QuestionModels';

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export const getQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    let config = {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    }
    const res = await axios.get(endpoint, config); 
    return res.data.results.map((question: IQuestion) => (
        {
            ...question,
            answers: shuffleAnswers([
                ...question.incorrect_answers, 
                question.correct_answer
            ]) 
        }
    ));
}