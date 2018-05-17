import { MathQuestion } from '../Generators/Base/MathQuestion';
import { MultiplicationQuestion } from '../Generators/Multiplication';
import { IQuestionFactory } from './Base';

export class MultiplicationQuestionFactory implements IQuestionFactory {
  public makeQuestion(difficulty:number):MathQuestion {
    const q = new MultiplicationQuestion();
    q.generate(difficulty);
    return q;
  }
}