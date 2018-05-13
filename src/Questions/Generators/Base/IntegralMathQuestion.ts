import { MathQuestion } from './MathQuestion';

// For math questions that don't involve calculating real numbers
export abstract class IntegralMathQuestion extends MathQuestion {
  // For random question
  public static generateOperands(min:number, max:number):number[] {
    return [0, 1];
  }
  public operator:string;
  public firstOperand:string;
  public secondOperand?:string;
  public getQuestionText():string {
    return `${this.firstOperand} ${this.operator} ${this.secondOperand}`;
  }
}