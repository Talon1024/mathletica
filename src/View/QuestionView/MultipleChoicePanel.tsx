import * as React from 'react';

interface IMultipleChoicePanelProps {
  onClick:(n:number, v:string) => void;
  choices:string[];
}

export function MultipleChoicePanel(props:IMultipleChoicePanelProps) {
  const clickHandler = (n:number, v:string) => {
    return () => {
      props.onClick(n, v);
    };
  };

  const choiceBtns = props.choices.map((choice, i) =>
    <button key={`mc-choice-${i}`}
      onClick={clickHandler(i, choice)}
      className="choice">{choice}</button>
  );
  return (
    <div>
      {choiceBtns}
    </div>
  );
}
