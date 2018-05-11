import { IntegralMathQuestion } from './MathQuestion';
import { getRandom } from '../../util/random';

export class SquareQuestion extends IntegralMathQuestion {
  generate(min: number, max: number): void {
    [this.firstOperand] = SquareQuestion.generateOperands(min, max);
    this.correctAnswer = this.firstOperand * this.firstOperand;
  }
  static generateOperands(min:number, max:number):number[] {
    const firstOperand = Math.round(getRandom(min, max));
    return [firstOperand];
  }
}