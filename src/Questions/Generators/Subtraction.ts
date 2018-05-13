import { getRandom } from '../../util/random';
import { IntegralMathQuestion } from './Base/IntegralMathQuestion';

export class SubtractionQuestion extends IntegralMathQuestion {
  public static generateOperands(min:number, max:number):number[] {
    const firstOperand = Math.round(getRandom(min, max));
    const secondOperand = Math.round(getRandom(min, max));
    const [nmin, nmax] = [
      Math.min(firstOperand, secondOperand),
      Math.max(firstOperand, secondOperand),
    ]
    return [nmax, nmin];
  }

  constructor() {
    super();
    this.operator = "-";
  }

  public generate(min: number, max: number): void {
    const [firstOperand, secondOperand] = SubtractionQuestion.generateOperands(min, max);
    this.correctAnswer = firstOperand - secondOperand;
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
    this.questionText = this.getQuestionText();
  }
}
