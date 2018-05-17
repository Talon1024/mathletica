import { MathQuestion } from '../Generators/Base/MathQuestion';

export interface IQuestionFactory {
  makeQuestion(difficulty:number):MathQuestion;
}