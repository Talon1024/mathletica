import { QuestionInputType } from '../../../util/mathinput';
import { MathQuestion } from './MathQuestion';

// For math questions that don't involve calculating real numbers
export abstract class IntegralMathQuestion extends MathQuestion {
  public static generateOperands(min:number, max:number):number[] {
    return [0, 1];
  }
  public readonly inputType:QuestionInputType = "keypad";
  public operator:string;
  public firstOperand:number;
  public secondOperand?:number;
  public getQuestionText():string {
    return `${this.firstOperand} ${this.operator} ${this.secondOperand}`;
  }
}
