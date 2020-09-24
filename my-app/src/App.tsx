import React from 'react';
//Components
import QuestionCard from './components/QuestionCard';

const App = () => {

  const startTrivia = async () => { 

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }

  const nextQuestion = () => {
    
  }

  return (
    <div className='App'>
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>Começar</button>
      <p className="score">Pontos:</p>
      <p>Carregando questões... </p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Próxima Questão
      </button>
    </div>
  );
}

export default App;
