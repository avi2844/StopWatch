import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [isStarted, setIsStarted] = useState(false);
  const intervalRef = useRef(null);


  function incrementTimer(){
    setSeconds((prevSeconds) => {
      if(Number(prevSeconds) + 1 > 59){
        setMinutes((prevMinute) => {
          let currMinutes = Number(prevMinute) + 1;
          return currMinutes < 10 ? `0${currMinutes}` : `${currMinutes}`
        })
        return "00";
      }
      let currSeconds = Number(prevSeconds) + 1;
      return currSeconds < 10 ? `0${currSeconds}` : `${currSeconds}`;
    })
  }

  function startTimer(){
    if (!isStarted) {
      setIsStarted(true);
      intervalRef.current = setInterval(incrementTimer, 1000);
    }
  }

  function stopTimer(){
    setIsStarted(false);
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <span>Time: {minutes}:{seconds}</span>
      {isStarted ? <button onClick={stopTimer}>Stop</button> : <button onClick={startTimer}>Start</button>}
      <button>Reset</button>
    </>
  )
}

export default App
