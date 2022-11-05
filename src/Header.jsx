import React from 'react'
import "./Header.css";

export default function () {
  return (
    <header>
      <h1 className="header--gameTitle">Tenzies</h1>
      <p className="header--instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
    </header>
  );
}
