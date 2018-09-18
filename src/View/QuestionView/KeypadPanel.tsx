import * as React from 'react';
import { EventHandler } from '../../util/ehandler';
import './KeypadPanel.css';

interface IKeypadPanelProps {
  onClick: (text:string) => void;
  onInput: EventHandler;
  value: string;
}

export function KeypadPanel(props:IKeypadPanelProps) {
  const clickHandler = (s:string) => {
    return () => {
      props.onClick(s);
    };
  };

  const buttonStrs:string[] = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '←', '0', 'C'
  ];

  const buttons = buttonStrs.map((s) => (<button onClick={clickHandler(s)}>{s}</button>));

  return (
    <div className="keypad">
      <input className="display" type="number" onChange={props.onInput} value={props.value} />
      {buttons}
    </div>
  );
}
