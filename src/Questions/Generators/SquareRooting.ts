import { getRandom } from '../../util/random';
import { IntegralMathQuestion } from './Base/IntegralMathQuestion';

export class SquareRootQuestion extends IntegralMathQuestion {
  public static generateOperands(min:number, max:number):number[] {
    const firstOperand = Math.round(getRandom(min, max));
    const secondOperand = firstOperand * firstOperand;
    return [secondOperand, firstOperand];
  }

  constructor() {
    super();
    this.operator = "\u221A";
  }

  public generate(min: number, max: number): void {
    const [firstOperand, secondOperand] = SquareRootQuestion.generateOperands(min, max);
    this.correctAnswer = secondOperand;
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
    this.questionText = this.getQuestionText();
  }

  public getQuestionText():string {
    return `${this.operator}${this.firstOperand}`;
  }
}
