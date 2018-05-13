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

  public generate(difficulty: number): void {
    const [min, max] = [difficulty * 6 + 1, (difficulty + 1) * 7];
    [this.firstOperand, this.secondOperand] = SquareRootQuestion.generateOperands(min, max);
    this.correctAnswer = this.secondOperand;
    this.questionText = this.getQuestionText();
  }

  public getQuestionText():string {
    return `${this.operator}${this.firstOperand}`;
  }
}
