import { getRandom } from '../../util/random';
import { repeat } from '../../util/repeat';
import { MultipleChoiceMathQuestion } from './Base/MultipleChoiceMathQuestion';

export class RealSquareRootQuestion extends MultipleChoiceMathQuestion {
  protected baseNum:number;
  public generate(difficulty: number): void {
    const [min, max] = [difficulty * 6 + 1, (difficulty + 1) * 7];
    this.baseNum = Math.round(getRandom(min, max));
    while (Number.isInteger(Math.sqrt(this.baseNum))) {
      this.baseNum = Math.round(getRandom(min, max));
    }

    this.correctAnswer = Math.round(getRandom(0, 3));

    this.internalChoices = repeat<number>((i) => {
      if (i === this.correctAnswer) { return Math.sqrt(this.baseNum); }
      return Math.sqrt(this.baseNum) + Math.random() * 2;
    }, 4);
  }
  public getQuestionText():string {
    return `\u221A${this.baseNum}`;
  }
}
