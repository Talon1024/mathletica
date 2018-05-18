import { MathQuestion } from '../Generators/Base/MathQuestion';
import { DivisionQuestion } from '../Generators/Division';
import { IQuestionFactory } from './Base';

export class DivisionQuestionFactory implements IQuestionFactory {
  public makeQuestion(difficulty:number):MathQuestion {
    const q = new DivisionQuestion();
    q.generate(difficulty);
    return q;
  }
}