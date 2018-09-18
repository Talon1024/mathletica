import * as React from 'react';
import { MultipleChoicePanel } from './MultipleChoicePanel';

interface IMultipleChoicePanelContainerProps {
  choices: number[];
  onChange: (ans:number, val:string) => void;
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

  public setAnswer = (idx:number, val:string) => {
    this.props.onChange(idx, val);
    this.setState({selectedIndex: idx});
  }

  public render() {
    const choiceStrs = this.props.choices.map((n) => Number.isInteger(n) ? n.toString() : n.toFixed(16));
    return (
      <MultipleChoicePanel onClick={this.setAnswer} choices={choiceStrs}/>
    );
  }
}
