import { IntegralMathQuestion } from './MathQuestion';
import { getRandom } from '../../util/random';

export class SubtractionQuestion extends IntegralMathQuestion {
  generate(min: number, max: number): void {
    [this.firstOperand, this.secondOperand] = SubtractionQuestion.generateOperands(min, max);
    this.correctAnswer = this.firstOperand - this.secondOperand;
  }
  static generateOperands(min:number, max:number):number[] {
    let firstOperand = Math.round(getRandom(min, max));
    let secondOperand = Math.round(getRandom(min, max));
    let [nmin, nmax] = [
      Math.min(firstOperand, secondOperand),
      Math.max(firstOperand, secondOperand),
    ]
    return [nmax, nmin];
  }
}