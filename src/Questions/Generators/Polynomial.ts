import { getRandom } from '../../util/random';
import { repeat } from '../../util/repeat';
import { MathQuestion } from './Base/MathQuestion';

export class PolynomialQuestion extends MathQuestion {
  protected terms:number[]; // Subscript is power, value is multiplier (e.g. terms[0] = 2 -> 2, terms[1] = 3 -> 3x)
  protected readonly MAX_TERMS = [1, 2, 3];
  protected termName = "x";
  protected lhs:number;
  public generate(difficulty:number) {
    const numTerms = this.MAX_TERMS[difficulty];
    const [min, max] = [difficulty * 6 + 1, (difficulty + 1) * 7];
    this.terms = this.getTerms(numTerms, min, max);
    this.lhs = Math.round(getRandom(min, max));
  }
  public getTerms(termCount:number, min:number, max:number):number[] {
    const results = repeat(() => Math.round(getRandom(min, max)), termCount);
    for (let i = 0; i < termCount; i++) {
      if (Math.random() > .5) {
        results[i] *= -1;
      }
    }
    return results;
  }
  public getQuestionText():string {
    const termStrs = this.terms.map((val, idx) => this.termToString(val, this.termName, idx, idx === 0));
    return `${termStrs.join(" ")}`;
  }
  public isAvailable():boolean {
    return false;
  }
  protected termToString(factor:number, name:string, power:number = 1, first:boolean = false):string {
    const powStrs = {
      2: "²",
      3: "³"
    };
    const powStr = powStrs[power] || "";
    let prefix = "";

    // Negative factor
    if (factor < 0) {
      factor = Math.abs(factor);
      if (first) {
        prefix = "-";
      } else {
        prefix = "- ";
      }
    } else {
      if (!first) {
        prefix = "+ ";
      }
    }

    // Power of 0
    if (power === 0) {
      name = "";
    }

    return `${prefix}${factor}${name}${powStr}`;
  }
}
