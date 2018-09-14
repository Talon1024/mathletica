import * as React from 'react';
import { EventHandler } from '../../util/ehandler';

interface IMultipleChoicePanelProps {
  onClick:EventHandler;
  choices:string[];
}

export function MultipleChoicePanel(props:IMultipleChoicePanelProps) {
  const choiceBtns = props.choices.map((choice, i) =>
    <button key={`mc-choice-${i}`}
      data-index={i}
      onClick={props.onClick}
      className="choice">{choice}</button>
  );
  return (
    <div>
      {choiceBtns}
    </div>
  );
}
