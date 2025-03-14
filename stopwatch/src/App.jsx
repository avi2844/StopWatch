import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState({ seconds: 0, minutes: 0 });
  const [isStarted, setIsStarted] = useState(false);
  const intervalRef = useRef(null);


  function incrementTimer() {
    setTime((prevTime) => {
      const { seconds, minutes } = prevTime;
      if (seconds === 59) {
        return { seconds: 0, minutes: minutes + 1 };
      }
      return { seconds: seconds + 1, minutes };
    });
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

  function resetTimer(){
    clearInterval(intervalRef.current);
    setTime({ seconds: 0, minutes: 0});
    setIsStarted(false);
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <span>Time: {time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
      {time.seconds < 10 ? `0${time.seconds}` : time.seconds}</span>
      {isStarted ? <button onClick={stopTimer}>Stop</button> : <button onClick={startTimer}>Start</button>}
      <button onClick={resetTimer}>Reset</button>
    </>
  )
}

export default App
