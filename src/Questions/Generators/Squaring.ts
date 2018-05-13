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

  public generate(difficulty: number): void {
    const [min, max] = [difficulty * 6 + 1, (difficulty + 1) * 7];
    [this.firstOperand] = SquareQuestion.generateOperands(min, max);
    this.correctAnswer = this.firstOperand * this.firstOperand;
    this.questionText = this.getQuestionText();
  }

  public getQuestionText():string {
    return `${this.firstOperand}${this.operator}`;
  }

}
