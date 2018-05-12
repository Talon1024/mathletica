// Use this interface for the view
export abstract class MathQuestion {
  public correctAnswer:number;
  public abstract generate(min:number, max:number):void;
  public checkAnswer(answer:number):boolean {
    return answer === this.correctAnswer;
  };
}