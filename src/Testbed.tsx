import * as React from 'react';
import { RandomQuestionFactory } from './Questions/Factory/Random';
import { PolynomialQuestion } from './Questions/Generators/Polynomial';
import { repeat } from './util/repeat';
import { AnswerContainer } from './View/QuestionView/AnswerContainer';

interface IPolynomialTestbedState {
  polynomials:PolynomialQuestion[];
  showAnswer:boolean[];
}

export class PolynomialTestbed extends React.Component<{},IPolynomialTestbedState> {
  private difficulties:string[] = ["Beginner", "Intermediate", "Expert"];

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
        <p key={`poly${i}`}>{this.difficulties[i]} question example:<br/>{p.getQuestionText()}<br/>
          <button onClick={this.toggleAnswerDisplay.bind(this, i)}>{this.state.showAnswer[i] ? "Hide" : "Show"} answer</button>
          <span className={this.state.showAnswer[i] ? "" : "hidden"}>{p.termName} = {p.correctAnswer}</span>
        </p>
      );
    });
    const qf = new RandomQuestionFactory();
    const q = qf.makeQuestion(1);
    return (
      <div>
        <p>{q.getQuestionText()}</p>
        <AnswerContainer question={q}/>
        {polyEl}
      </div>
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
