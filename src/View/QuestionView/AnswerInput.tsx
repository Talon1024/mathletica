import * as React from 'react';
import { HTMLInputType } from '../../util/htmlinput';

interface IAnswerInputState {
  curValue:string;
}
interface IAnswerInputProps {
  type:HTMLInputType;
}

export class AnswerInput extends React.Component<IAnswerInputProps,IAnswerInputState> {
  constructor(props:IAnswerInputProps) {
    super(props);
    this.state = {
      curValue: ""
    };
  }

  public render() {
    return (<input type={this.props.type} value={this.state.curValue} className="answerInput" maxLength={5}/>);
  }
}
