import React, { useState } from 'react';
import './App.css';
import CountdownComponent from './Quiz/CountdownComponent';
import { Button } from 'semantic-ui-react'

const questions = [
  'How many socks are you wearing ?',
  'Why so serious ?',
  'Can you please be quiet ?',
  ' Where is the last place you would ever go? ',
  ' What are you completely over and done with? ',
  'What memory do you just keep going back to?', 
  ' What\'s the most immature thing your parents do ?',
  'What is the most unusual fear you have?',
 ];

function App() {
  const [questionNb, setQuestionNb] = useState(1);

  const onDone= () => {
    if(questionNb < questions.length) {
      setQuestionNb(questionNb+1)
    }
  }

  return (
    <div className="App">
      <h2>QUIZ</h2>
      <CountdownComponent nb={questionNb} onDone={onDone} question={questions[questionNb-1]}/>
      <Button className="Button" onClick={onDone}>Next</Button> 
    </div>
  );
}

export default App;
