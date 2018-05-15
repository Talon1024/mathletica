import * as React from 'react';
import { PolynomialQuestion } from './Questions/Generators/Polynomial';
import { repeat } from './util/repeat';

interface IPolynomialTestbedState {
  polynomials:PolynomialQuestion[];
  showAnswer:boolean[];
}

export class PolynomialTestbed extends React.Component<{},IPolynomialTestbedState> {

  constructor(props:{}) {
    super(props);
    const showAnswer:boolean[] = new Array(3);
    const polynomials = repeat((i:number) => {
      const x = new PolynomialQuestion();
      x.generate(i);
      showAnswer[i] = false;
      return x;
    }, 3);
    this.state = {
      polynomials,
      showAnswer
    };
  }

  public render() {
    const polyEl:JSX.Element[] = this.state.polynomials.map((p, i) => {
      return (
        <p key={`poly${i}`}>{p.getQuestionText()}<br/>
          <button onClick={this.toggleAnswerDisplay.bind(this, i)}>{this.state.showAnswer[i] ? "Hide" : "Show"} answer</button>
          <span className={this.state.showAnswer[i] ? "" : "hidden"}>{p.termName} = {p.correctAnswer}</span>
        </p>
      );
    });
    return (
      <div>{polyEl}</div>
    );
  }

  private toggleAnswerDisplay(i:number) {
    const showAnswer = this.state.showAnswer;
    showAnswer[i] = !showAnswer[i];
    this.setState({
      showAnswer
    });
  }
}
