import * as React from 'react';
import { MathQuestion } from '../../Questions/Generators/Base/MathQuestion';
import { MultipleChoiceMathQuestion } from '../../Questions/Generators/Base/MultipleChoiceMathQuestion';
import { KeypadPanelContainer } from './KeypadPanelContainer';
import { MultipleChoicePanelContainer } from './MultipleChoicePanelContainer';

interface IAnswerContainerProps {
  question: MathQuestion;
}

interface IAnswerContainerState {
  answer: number;
  displayedAnswer: string;
}

export class AnswerContainer extends React.Component<IAnswerContainerProps,IAnswerContainerState> {
  private debug = true;

  constructor(props:IAnswerContainerProps) {
    super(props);
    this.state = {
      answer: 0,
      displayedAnswer: ""
    };
  }

  public setAnswer = (ans:number, val?:string) => {
    if (val == null) {
      // val = ans.toFixed(6);
      val = ans.toString(10);
    }
    this.setState({
      answer: ans,
      displayedAnswer: val
    });
  }

  public render() {
    const answerDisplay = this.debug ? <p>Current answer: {this.state.displayedAnswer} ({this.state.answer})</p> : null;
    const answerInterface = this.isMultipleChoice(this.props.question) ?
      <MultipleChoicePanelContainer choices={(this.props.question as MultipleChoiceMathQuestion).choices} onChange={this.setAnswer}/> :
        <KeypadPanelContainer onChange={this.setAnswer}/>;
    return (
      <div>
        {answerDisplay}
        {answerInterface}
      </div>
    );
  }

  private isMultipleChoice(q:MathQuestion):q is MultipleChoiceMathQuestion {
    return q.inputType === "choices";
  }

}
