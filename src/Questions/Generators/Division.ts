import { IntegralMathQuestion } from './MathQuestion';
import { getRandom } from '../../util/random';

export class DivisionQuestion extends IntegralMathQuestion {
  generate(min: number, max: number): void {
    [this.firstOperand, this.secondOperand] = DivisionQuestion.generateOperands(min, max);
    this.correctAnswer = this.firstOperand / this.secondOperand;
  }
  static generateOperands(min:number, max:number):number[] {
    const secondOperand = Math.round(getRandom(min, max));
    const firstOperand = secondOperand * Math.round(getRandom(min, max));
    return [firstOperand, secondOperand];
  }
}