import React from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
}
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
    <div>
      <p className="number">
        Questões: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map(answer => (
          <div key={answer}>
            <button disabled={userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer}} />
            </button>
          </div>
        ))}
      </div>
  </div>
);

export default QuestionCard;