import { MathQuestion } from './MathQuestion';

// For math questions that don't involve calculating real numbers
export abstract class IntegralMathQuestion extends MathQuestion {
  // For random question
  public static generateOperands(min:number, max:number):number[] {
    return [0, 1];
  }
  protected firstOperand:string;
  protected secondOperand?:string;
}