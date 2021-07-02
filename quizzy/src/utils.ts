// Contain small function to randomise answers from questions

export const shuffleAnswers = (answers: any[]) => [...answers.sort(() => Math.random() - 0.5)];
