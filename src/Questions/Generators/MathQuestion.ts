// Use this interface for the view
abstract class MathQuestion {
  correctAnswer:number;
  abstract generate(min:number, max:number):void;
  checkAnswer(answer:number):boolean {
    return answer === this.correctAnswer;
  };
}

// For math questions that don't involve calculating real numbers
export abstract class IntegralMathQuestion extends MathQuestion {
  firstOperand:number;
  secondOperand?:number;
  // For random question
  static generateOperands(min:number, max:number):number[] {
    return [0, 1];
  }
}

// Use multiple choice questions if generating real number answers
export abstract class MultipleChoiceMathQuestion extends MathQuestion {
  choices:number[];
}