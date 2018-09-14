import { MathQuestion } from './MathQuestion';

// Use multiple choice questions if generating real number answers
export abstract class MultipleChoiceMathQuestion extends MathQuestion {
  protected internalChoices:number[];
  public get choices() { return this.internalChoices; }
  public getQuestionText():string {
    return "Select the correct answer";
  }
}
