import { React, useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Dice from "./Dice";
import data from "./DiceData.js";
import Confetti from "react-confetti";
function App() {
  //variables
  
  const [dices, setDices] = useState(
    data.map((item) => {
      return {
        ...item,
        num: Math.floor(Math.random() * 6) + 1,
      };
    })
  );
  const equal = isEqual();
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  const currentBest = localStorage.getItem("bestTime") 
  const [best,setBest] = useState(currentBest)
  //functions
  useEffect(() => {
    if (!equal) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      return () => clearInterval(interval); //This is important
    }
    
  }, [timer]);
  useEffect(()=>{
    if(equal){
      
      if(timer < best || best === null ){
        localStorage.setItem('bestTime',JSON.stringify(timer))
        setBest(timer)
      }
    }
  },[timer])
  function isEqual() {
    const equal = dices.every((val) => {
      return val.num === dices[0].num && val.isChanging === dices[0].isChanging;
    });

    return equal;
  }

  function roll() {
    setDices(
      (prevDices) =>
        prevDices.map((item) => {
          if (item.isChanging)
            return {
              ...item,
              num: Math.floor(Math.random() * 6) + 1,
            };
          return item;
        }),
      setCounter((prevCounter) => prevCounter + 1)
    );
  }

  function toggleChange(id) {
    setDices((prevDices) => {
      const newDices = [];
      for (let i = 0; i < prevDices.length; i++) {
        const currentDice = prevDices[i];
        if (i === id) {
          const upadtedDice = {
            ...currentDice,
            isChanging: !currentDice.isChanging,
          };
          newDices.push(upadtedDice);
        } else {
          newDices.push(currentDice);
        }
      }
      return newDices;
    });
  }
  const diceElements = dices.map((dice, index) => {
    return (
      <Dice
        key={index}
        id={index}
        number={dice.num}
        change={dice.isChanging}
        handleClick={toggleChange}
      />
    );
  });
  function reset() {
    setDices(
      data.map((item) => {
        return {
          ...item,
          num: Math.floor(Math.random() * 6) + 1,
        };
      })
    );
    setCounter(0);
    setTimer(0);
  }
  return (
    <div className="app">
      {equal && <Confetti 
        className="confetti"
      />}
      <Header />
      <div className="app--dices">{diceElements}</div>
      <div className="app--btnAndRes">
        {!equal && (
          <button className="app--btnAndRes--roll" onClick={roll}>
            Roll
          </button>
        )}
        {equal && (
          <button className="app--btnAndRes--roll" onClick={reset}>
            New Game
          </button>
        )}
        <div className="app--btnAndRes--res">
        <h1 className="app--btnAndRes--res--view">Time = {timer}</h1>
        <h1 className="app--btnAndRes--res--view">You Rolled : {counter}</h1>
        <h1 className="app--btnAndRes--res--view">Best Time: {currentBest}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
