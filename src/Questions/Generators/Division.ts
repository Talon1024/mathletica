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

  public generate(difficulty: number): void {
    const [min, max] = [difficulty * 6 + 1, (difficulty + 1) * 7];
    [this.firstOperand, this.secondOperand] = DivisionQuestion.generateOperands(min, max);
    this.correctAnswer = this.firstOperand / this.secondOperand;
    this.questionText = this.getQuestionText();
  }
}
