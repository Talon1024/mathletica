import { getRandom } from '../../util/random';
import { IntegralMathQuestion } from './Base/IntegralMathQuestion';

export class SquareQuestion extends IntegralMathQuestion {
  public static generateOperands(min:number, max:number):number[] {
    const firstOperand = Math.round(getRandom(min, max));
    return [firstOperand];
  }

  constructor() {
    super();
    this.operator = "\xB2";
  }

  public generate(min: number, max: number): void {
    const [firstOperand] = SquareQuestion.generateOperands(min, max);
    this.correctAnswer = firstOperand * firstOperand;
    this.firstOperand = firstOperand.toString() + "²";
    this.questionText = this.getQuestionText();
  }

  public getQuestionText():string {
    return `${this.firstOperand}${this.operator}`;
  }

}