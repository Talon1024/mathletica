import { AdditionQuestion } from '../Generators/Addition';
import { MathQuestion } from '../Generators/Base/MathQuestion';
import { IQuestionFactory } from './Base';

export class AdditionQuestionFactory implements IQuestionFactory {
  public makeQuestion(difficulty:number):MathQuestion {
    const q = new AdditionQuestion();
    q.generate(difficulty);
    return q;
  }
}