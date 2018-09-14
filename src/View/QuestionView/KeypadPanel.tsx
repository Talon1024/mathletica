import * as React from 'react';
import { EventHandler } from '../../util/ehandler';
import './KeypadPanel.css';

interface IKeypadPanelProps {
  clickHandler: EventHandler;
  inputHandler: EventHandler;
  value: string;
}

export function KeypadPanel(props:IKeypadPanelProps) {
  return (
    <div className="keypad">
      <input className="display" type="number" onChange={props.inputHandler} value={props.value} />
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
