import React, {useState, useEffect} from 'react';

const CountdownComponent = ({nb, onDone, question}) => {
  const [counter, setCounter] = useState(30);
  
  useEffect(() => {
    setCounter(30)
  },[nb]);
  
  useEffect(() => {
    if (counter > 0) {
      const timer= setTimeout(() => setCounter(counter - 1), 1000);
      // Add a clearTimeout method and pass in the variable timer as a parameter: eliminate the potential of stacking timeouts
      return () => clearTimeout(timer);
    }
    else if (counter===0){
      onDone()
    }
  }, [counter, onDone]);
  
  return <div>
    <h1>Question {nb}: {question} </h1>
    <div>Countdown: {counter}s</div>
  </div>
}

export default CountdownComponent;
