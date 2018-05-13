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

  public generate(difficulty: number): void {
    const [min, max] = [difficulty * 6 + 1, (difficulty + 1) * 7];
    [this.firstOperand, this.secondOperand] = MultiplicationQuestion.generateOperands(min, max);
    this.correctAnswer = this.firstOperand * this.secondOperand;
    this.questionText = this.getQuestionText();
  }
}
