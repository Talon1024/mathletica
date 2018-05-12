import { getRandom } from '../../util/random';
import { IntegralMathQuestion } from './Base/IntegralMathQuestion';

export class SquareRootQuestion extends IntegralMathQuestion {
  public static generateOperands(min:number, max:number):number[] {
    const firstOperand = Math.round(getRandom(min, max));
    const secondOperand = firstOperand * firstOperand;
    return [secondOperand, firstOperand];
  }
  public generate(min: number, max: number): void {
    const [firstOperand, secondOperand] = SquareRootQuestion.generateOperands(min, max);
    this.correctAnswer = secondOperand;
    this.firstOperand = firstOperand.toString(10);
    this.secondOperand = secondOperand.toString(10);
  }
}