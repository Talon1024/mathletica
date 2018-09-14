import * as React from 'react';
import { ReactEvent } from '../../util/ehandler';
import { MultipleChoicePanel } from './MultipleChoicePanel';

interface IMultipleChoicePanelContainerProps {
  choices: number[];
  onChange: (val:string) => void;
}

interface IMultipleChoicePanelContainerState {
  selectedIndex: number;
}

export class MultipleChoicePanelContainer extends React.Component<IMultipleChoicePanelContainerProps,IMultipleChoicePanelContainerState> {
  constructor(props:IMultipleChoicePanelContainerProps) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }
  public setAnswer = (val:string) => {
    this.props.onChange(val);
  }
  public handleClick = (e:ReactEvent) => {
    const el = e.target as HTMLElement;
    this.setAnswer(el.dataset.index || "");
  }
  public render() {
    const choiceStrs = this.props.choices.map((n) => Number.isInteger(n) ? n.toString() : n.toFixed(16));
    return (
      <MultipleChoicePanel onClick={this.handleClick} choices={choiceStrs}/>
    );
  }
}
