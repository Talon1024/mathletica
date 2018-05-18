import { MathQuestion } from '../Generators/Base/MathQuestion';
import { SquareQuestion } from '../Generators/Squaring';
import { IQuestionFactory } from './Base';

export class SquareQuestionFactory implements IQuestionFactory {
  public makeQuestion(difficulty:number):MathQuestion {
    const q = new SquareQuestion();
    q.generate(difficulty);
    return q;
  }
}