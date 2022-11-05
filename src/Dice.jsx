import React from "react";
import "./Dice.css";

export default function (props) {
  const styles = {
    background: props.change ? "white" : "#59e391",
  };
  const one = () => {
    return (
      <div
        style={styles}
        className="dice"
        onClick={() => props.handleClick(props.id)}
      >
        <div className="dice--dot mid center"></div>
      </div>
    );
  };
  const two = () => {
    return (
      <div
        style={styles}
        className="dice"
        onClick={() => props.handleClick(props.id)}
      >
        <div className="dice--dot mid right"></div>
        <div className="dice--dot mid left"></div>
      </div>
    );
  };
  const three = () => {
    return (
      <div
        style={styles}
        className="dice"
        onClick={() => props.handleClick(props.id)}
      >
        <div className="dice--dot bot right"></div>
        <div className="dice--dot mid center"></div>
        <div className="dice--dot top left"></div>
      </div>
    );
  };
  const four = () => {
    return (
      <div
        style={styles}
        className="dice"
        onClick={() => props.handleClick(props.id)}
      >
        <div className="dice--dot bot right"></div>
        <div className="dice--dot top right"></div>
        <div className="dice--dot top left"></div>
        <div className="dice--dot bot left"></div>
      </div>
    );
  };
  const five = () => {
    return (
      <div
        style={styles}
        className="dice"
        onClick={() => props.handleClick(props.id)}
      >
        <div className="dice--dot bot right"></div>
        <div className="dice--dot top right"></div>
        <div className="dice--dot top left"></div>
        <div className="dice--dot bot left"></div>
        <div className="dice--dot mid center"></div>
      </div>
    );
  };
  const six = () => {
    return (
      <div
        style={styles}
        className="dice"
        onClick={() => props.handleClick(props.id)}
      >
        <div className="dice--dot bot right"></div>
        <div className="dice--dot top right"></div>
        <div className="dice--dot top left"></div>
        <div className="dice--dot bot left"></div>
        <div className="dice--dot mid right"></div>
        <div className="dice--dot mid left"></div>
      </div>
    );
  };

  let diceToShow;
  switch (props.number) {
    case 1:
      diceToShow = one();
      break;
    case 2:
      diceToShow = two();
      break;
    case 3:
      diceToShow = three();
      break;
    case 4:
      diceToShow = four();
      break;
    case 5:
      diceToShow = five();
      break;
    case 6:
      diceToShow = six();
  }
  return <div>{diceToShow}</div>;
}
