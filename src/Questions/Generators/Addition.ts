import { IntegralMathQuestion } from './Base';
import { getRandom } from '../../util/random';

export class AdditionQuestion extends IntegralMathQuestion {
  generate(min: number, max: number): void {
    [this.firstOperand, this.secondOperand] = AdditionQuestion.generateOperands(min, max);
    this.correctAnswer = this.firstOperand + this.secondOperand;
  }
  static generateOperands(min:number, max:number):number[] {
    let firstOperand = Math.round(getRandom(min, max));
    let secondOperand = Math.round(getRandom(min, max));
    return [firstOperand, secondOperand];
  }
}