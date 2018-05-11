import { IntegralMathQuestion } from './MathQuestion';
import { getRandom } from '../../util/random';


export class MultiplicationQuestion extends IntegralMathQuestion {
  generate(min: number, max: number): void {
    [this.firstOperand, this.secondOperand] = MultiplicationQuestion.generateOperands(min, max);
    this.correctAnswer = this.firstOperand * this.secondOperand;
  }
  static generateOperands(min:number, max:number):number[] {
    const firstOperand = Math.round(getRandom(min, max));
    const secondOperand = Math.round(getRandom(min, max));
    return [firstOperand, secondOperand];
  }
}