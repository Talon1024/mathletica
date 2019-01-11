import * as React from 'react';
import { AnswerContainer } from './AnswerContainer';

import { MathQuestion } from '../../Questions/Generators/Base/MathQuestion';

import { AdditionQuestionFactory } from '../../Questions/Factory/Addition';
import { DivisionQuestionFactory } from '../../Questions/Factory/Division';
import { MultiplicationQuestionFactory } from '../../Questions/Factory/Multiplication';
import { RandomQuestionFactory } from '../../Questions/Factory/Random';
import { SquareRootQuestionFactory } from '../../Questions/Factory/SquareRoot';
import { SquareQuestionFactory } from '../../Questions/Factory/Squaring';
import { SubtractionQuestionFactory } from '../../Questions/Factory/Subtraction';

interface IQuestionContainerProps {
  qtype:string;
  difficulty:number;
}

interface IQuestionContainerState {
  question:MathQuestion;
}

export class QuestionContainer extends React.Component<IQuestionContainerProps,IQuestionContainerState> {
  constructor(props:IQuestionContainerProps) {
    super(props);
    const factories = {
      'addition': AdditionQuestionFactory,
      'division': DivisionQuestionFactory,
      'multiplication': MultiplicationQuestionFactory,
      'random': RandomQuestionFactory,
      'square': SquareQuestionFactory,
      'squareRoot': SquareRootQuestionFactory,
      'subtraction': SubtractionQuestionFactory
    };
    const factory = new factories[props.qtype]();
    this.state = {
      question: factory.makeQuestion(props.difficulty)
    };
  }

  public render() {
    return (
      <div>
        <AnswerContainer question={this.state.question}/>
      </div>
    );
  }
}
