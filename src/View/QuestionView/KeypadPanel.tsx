import * as React from 'react';
import { EventHandler } from '../../util/ehandler';
import './KeypadPanel.css';

export function KeypadPanel(props:{clickHandler:EventHandler}) {
  return (
    <div className="keypad">
      <button onClick={props.clickHandler}>1</button>
      <button onClick={props.clickHandler}>2</button>
      <button onClick={props.clickHandler}>3</button>
      <button onClick={props.clickHandler}>4</button>
      <button onClick={props.clickHandler}>5</button>
      <button onClick={props.clickHandler}>6</button>
      <button onClick={props.clickHandler}>7</button>
      <button onClick={props.clickHandler}>8</button>
      <button onClick={props.clickHandler}>9</button>
      <button onClick={props.clickHandler}>←</button>
      <button onClick={props.clickHandler}>0</button>
      <button onClick={props.clickHandler}>C</button>
    </div>
  );
}