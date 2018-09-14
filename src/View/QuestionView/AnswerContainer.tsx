import * as React from 'react';
import { MathQuestion } from '../../Questions/Generators/Base/MathQuestion';
import { MultipleChoiceMathQuestion } from '../../Questions/Generators/Base/MultipleChoiceMathQuestion';
import { KeypadPanelContainer } from './KeypadPanelContainer';

interface IAnswerContainerProps {
  question: MathQuestion;
}

interface IAnswerContainerState {
  answer: string;
}

export class AnswerContainer extends React.Component<IAnswerContainerProps,IAnswerContainerState> {
  private debug = true;

  constructor(props:IAnswerContainerProps) {
    super(props);
    this.state = {
      answer: ""
    };
  }

  public setAnswer = (val:string) => {
    this.setState({
      answer: val
    });
  }

  public render() {
    const answerDisplay = this.debug ? <p>Current answer: {this.state.answer}</p> : null;
    const answerInterface = this.isMultipleChoice(this.props.question) ? null : <KeypadPanelContainer onChange={this.setAnswer}/>;
    return (
      <div>
        {answerDisplay}
        {answerInterface}
      </div>
    );
  }

  private isMultipleChoice(q:MathQuestion):q is MultipleChoiceMathQuestion {
    return q.hasOwnProperty('choices');
  }

}
