import { getRandom } from '../../util/random';
import { IntegralMathQuestion } from './Base/IntegralMathQuestion';

export class DivisionQuestion extends IntegralMathQuestion {
  public static generateOperands(min:number, max:number):number[] {
    const secondOperand = Math.round(getRandom(min, max));
    const firstOperand = secondOperand * Math.round(getRandom(min, max));
    return [firstOperand, secondOperand];
  }

  constructor() {
    super();
    this.operator = "\xF7";
  }

  public generate(min: number, max: number): void {
    const [firstOperand, secondOperand] = DivisionQuestion.generateOperands(min, max);
    this.correctAnswer = firstOperand / secondOperand;
    this.firstOperand = firstOperand.toString(10);
    this.secondOperand = secondOperand.toString(10);
    this.questionText = this.getQuestionText();
  }
}