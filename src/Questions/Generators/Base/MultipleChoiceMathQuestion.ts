import { MathQuestion } from './MathQuestion';

// Use multiple choice questions if generating real number answers
export abstract class MultipleChoiceMathQuestion extends MathQuestion {
  protected choices:number[];
}