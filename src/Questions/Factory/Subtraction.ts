import { MathQuestion } from '../Generators/Base/MathQuestion';
import { SubtractionQuestion } from '../Generators/Subtraction';
import { IQuestionFactory } from './Base';

export class SubtractionQuestionFactory implements IQuestionFactory {
  public makeQuestion(difficulty:number):MathQuestion {
    const q = new SubtractionQuestion();
    q.generate(difficulty);
    return q;
  }
}