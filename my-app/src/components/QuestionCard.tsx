import React from 'react';

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: string;
  questionNr: number;
  totalQuestions: number;
}
const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>Cartão de Questões</div>
);

export default QuestionCard;