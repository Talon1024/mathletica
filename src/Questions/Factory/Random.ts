import { AdditionQuestion } from '../Generators/Addition';
import { MathQuestion } from '../Generators/Base/MathQuestion';
import { DivisionQuestion } from '../Generators/Division';
import { MultiplicationQuestion } from '../Generators/Multiplication';
import { PolynomialQuestion } from '../Generators/Polynomial';
import { RealSquareRootQuestion } from '../Generators/RealSquareRooting';
import { SquareRootQuestion } from '../Generators/SquareRooting';
import { SquareQuestion } from '../Generators/Squaring';
import { SubtractionQuestion } from '../Generators/Subtraction';
import { IQuestionFactory } from './Base';

export class RandomQuestionFactory implements IQuestionFactory {
  public makeQuestion(difficulty:number):MathQuestion {
    let questionTypes:MathQuestion[] = [
      new AdditionQuestion(),
      new DivisionQuestion(),
      new MultiplicationQuestion(),
      new PolynomialQuestion(),
      new RealSquareRootQuestion(),
      new SquareRootQuestion(),
      new SquareQuestion(),
      new SubtractionQuestion(),
    ];
    questionTypes = questionTypes.filter((e) => e.isAvailable());
    const picked = Math.round(Math.random() * questionTypes.length);
    const q = questionTypes[picked];
    q.generate(difficulty);
    return q;
  }
}
