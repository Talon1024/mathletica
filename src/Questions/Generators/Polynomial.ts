import { QuestionInputType } from '../../util/mathinput';
import { getRandom } from '../../util/random';
import { repeat } from '../../util/repeat';
import { MathQuestion } from './Base/MathQuestion';

export class PolynomialQuestion extends MathQuestion {
  public termName = "x";
  public readonly inputType:QuestionInputType = "keypad";
  protected terms:number[]; // Subscript is power, value is multiplier (e.g. terms[0] = 2 -> 2, terms[1] = 3 -> 3x)
  protected readonly MAX_TERMS = [1, 2, 3];
  protected lhs:number;

  public generate(difficulty:number) {
    const numTerms = this.MAX_TERMS[difficulty];
    const [min, max] = [difficulty * 3 + 1, (difficulty + 1) * 4];
    this.terms = this.getTerms(numTerms);
    this.correctAnswer = Math.round(getRandom(min, max));

    this.lhs = this.terms.reduce((p,c,i) => {
      return p + Math.pow(this.correctAnswer, i) * c;
    });
  }

  public getTerms(termCount:number):number[] {
    const min = 1;
    const max = 5;
    const results = repeat((i) => Math.round(getRandom(min, max)) * Math.pow(2, termCount - (i + 1)), termCount);
    for (let i = 0; i < termCount; i++) {
      if (Math.random() > .5) {
        results[i] *= -1;
      }
    }
    if (results.length === 1) {
      results.push(1);
    }
    return results;
  }

  public getQuestionText():string {
    const termStrs = this.terms.map((val, idx) => this.termToString(val, this.termName, idx, idx === 0));
    return `${this.lhs} = ${termStrs.join(" ")}`;
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

    return `${prefix}${power > 0 && factor === 1 ? "" : factor}${name}${powStr}`;
  }
}
