// Use this interface for the view
export abstract class MathQuestion {
  public correctAnswer:number;
  public questionText:string;
  public abstract generate(difficulty:number):void;
  public checkAnswer(answer:number):boolean {
    return answer === this.correctAnswer;
  };
  public abstract getQuestionText():string;
  public isAvailable():boolean {
    return true;
  }
}
