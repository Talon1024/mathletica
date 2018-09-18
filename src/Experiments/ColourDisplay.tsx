import * as React from 'react';
import { ColourList } from './ColourList';

interface IColourDisplayState {
  colours:string[];
  curColour:string;
}

export class ColourDisplay extends React.Component<{},IColourDisplayState> {
  constructor(props:{}) {
    super(props);
    this.state = {
      colours: [
        '#00F',
        '#F0F',
        '#F00',
        '#FFF',
        '#000',
        '#0F0'
      ],
      curColour: '#FFF'
    };
  }

  public setColour = (colour:string) => {
    this.setState({
      curColour: colour
    });
  }

  public render() {
    return (
      <div>
        <ColourList colours={this.state.colours} onSelect={this.setColour}/>
        <p style={{backgroundColor: this.state.curColour}}>This is your favourite colour?</p>
      </div>
    );
  }
}
