import { getRandom } from '../../util/random';
import { repeat } from '../../util/repeat';
import { MultipleChoiceMathQuestion } from './Base/MultipleChoiceMathQuestion';

export class RealSquareRootQuestion extends MultipleChoiceMathQuestion {
  public generate(difficulty: number): void {
    const [min, max] = [difficulty * 6 + 1, (difficulty + 1) * 7];
    let baseNum = Math.round(getRandom(min, max));
    while (Number.isInteger(Math.sqrt(baseNum))) {
      baseNum = Math.round(getRandom(min, max));
    }

    this.correctAnswer = Math.round(getRandom(0, 3));

    this.choices = repeat<number>((i) => {
      if (i === this.correctAnswer) { return Math.sqrt(baseNum); }
      return Math.sqrt(baseNum) + Math.random() * 2;
    }, 4);
  }
}
