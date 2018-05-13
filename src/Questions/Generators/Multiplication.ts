import { getRandom } from '../../util/random';
import { IntegralMathQuestion } from './Base/IntegralMathQuestion';

export class MultiplicationQuestion extends IntegralMathQuestion {
  public static generateOperands(min:number, max:number):number[] {
    const firstOperand = Math.round(getRandom(min, max));
    const secondOperand = Math.round(getRandom(min, max));
    return [firstOperand, secondOperand];
  }

  constructor() {
    super();
    this.operator = "\xD7";
  }

  public generate(min: number, max: number): void {
    const [firstOperand, secondOperand] = MultiplicationQuestion.generateOperands(min, max);
    this.correctAnswer = firstOperand * secondOperand;
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
    this.questionText = this.getQuestionText();
  }
}
