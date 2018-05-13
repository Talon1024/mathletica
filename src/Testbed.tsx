import * as React from 'react';
import { PolynomialQuestion } from './Questions/Generators/Polynomial';
import { repeat } from './util/repeat';

export function PolynomialTestbed(props:{}) {
  const polynomials = repeat((i:number) => {
    const x = new PolynomialQuestion();
    x.generate(i);
    return x;
  }, 3);
  const polyEl:JSX.Element[] = polynomials.map((p, i) => {
    return (
      <p key={`poly${i}`}>{p.getQuestionText()}<br/>{p.termName} = {p.correctAnswer}</p>
    );
  });
  return (
    <div>{polyEl}</div>
  );
}
