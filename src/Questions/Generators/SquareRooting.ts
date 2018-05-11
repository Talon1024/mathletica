import { IntegralMathQuestion } from './Base';
import { getRandom } from '../../util/random';

export class SquareRootQuestion extends IntegralMathQuestion {
  generate(min: number, max: number): void {
    [this.firstOperand, this.secondOperand] = SquareRootQuestion.generateOperands(min, max);
    this.correctAnswer = this.secondOperand;
  }
  static generateOperands(min:number, max:number):number[] {
    const firstOperand = Math.round(getRandom(min, max));
    const secondOperand = firstOperand * firstOperand;
    return [secondOperand, firstOperand];
  }
}