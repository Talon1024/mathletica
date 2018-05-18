import { MathQuestion } from '../Generators/Base/MathQuestion';
import { RealSquareRootQuestion } from '../Generators/RealSquareRooting';
import { SquareRootQuestion } from '../Generators/SquareRooting';
import { IQuestionFactory } from './Base';

export class SquareRootQuestionFactory implements IQuestionFactory {
  public makeQuestion(difficulty:number):MathQuestion {
    const realq = Math.random() < ((difficulty + 1) * .2);
    let q;
    if (realq) {q = new RealSquareRootQuestion();}
    else {q = new SquareRootQuestion();}
    q.generate(difficulty);
    return q;
  }
}