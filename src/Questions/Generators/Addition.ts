import { getRandom } from '../../util/random';
import { IntegralMathQuestion } from './Base/IntegralMathQuestion';

export class AdditionQuestion extends IntegralMathQuestion {
  public static generateOperands(min:number, max:number):number[] {
    const firstOperand = Math.round(getRandom(min, max));
    const secondOperand = Math.round(getRandom(min, max));
    return [firstOperand, secondOperand];
  }
  public generate(min: number, max: number): void {
    const [firstOperand, secondOperand] = AdditionQuestion.generateOperands(min, max);
    this.correctAnswer = firstOperand + secondOperand;
    this.firstOperand = firstOperand.toString(10);
    this.secondOperand = secondOperand.toString(10);
  }
}