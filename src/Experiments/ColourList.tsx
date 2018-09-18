import * as React from 'react';

interface IColourListProps {
  colours:string[];
  onSelect:(col:string) => void;
}

export function ColourList(props:IColourListProps) {
  // How to pass values with event handlers without using lambdas 101
  // FUKC YOU TSLINT
  // But seriously, you shouldn't refuse to compile my app over the slightest nitpick
  const clickHandler = (val:string) => {
    // Currying FTW.
    // Maybe whoever wrote the React TSLint rules should forbid this kind of thing as well?
    return () => {
      props.onSelect(val);
    };
  };

  const opts = props.colours.map((c,i) => (<option key={`colour_${i}`} onClick={clickHandler(c)} value={c}>{c}</option>));

  return (
    <select>
      {opts}
    </select>
  );
}
