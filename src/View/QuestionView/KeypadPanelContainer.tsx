import * as React from 'react';
import { ReactEvent } from '../../util/ehandler';
import { KeypadPanel } from './KeypadPanel';

interface IKeypadPanelContainerProps {
  onChange?: (ans:number) => void;
}

interface IKeypadPanelContainerState {
  value:string;
}

export class KeypadPanelContainer extends React.Component<IKeypadPanelContainerProps,IKeypadPanelContainerState> {
  constructor(props:IKeypadPanelContainerProps) {
    super(props);
    this.state = {
      value: "0"
    };
  }

  public append = (val:string) => {
    const oldValue = this.state.value;
    const newValue = oldValue === "0" ? val : oldValue + val;
    const newAnswer = Number.parseInt(newValue, 10);

    if (this.props.onChange) {
      this.props.onChange(newAnswer);
    }

    this.setState({
      value: newValue
    });
  }

  public clear = () => {
    const newValue = "0";
    const newAnswer = Number.parseInt(newValue, 10);

    if (this.props.onChange) {
      this.props.onChange(newAnswer);
    }

    this.setState({
      value: newValue
    });
  }

  public backspace = () => {
    let newValue = this.state.value.substring(0, this.state.value.length - 1);
    if (newValue === "") {
      newValue = "0";
    }
    const newAnswer = Number.parseInt(newValue, 10);

    if (this.props.onChange) {
      this.props.onChange(newAnswer);
    }

    this.setState({
      value: newValue
    });
  }

  public handleKeypadInput = (e:ReactEvent) => {
    const oldValue = this.state.value;
    let newValue = (e.target as HTMLInputElement).value;
    if (oldValue === "0") {
      newValue = newValue.substr(1); // The user will most likely have entered something.
    }

    let newAnswer = Number.parseInt(newValue, 10);
    if (Number.isNaN(newAnswer)) {
      /*
      // If the input type is "text"
      if (newValue === "") {
        newValue = "0";
        newAnswer = 0;
      } else {
        newValue = oldValue;
        newAnswer = Number.parseInt(oldValue, 10);
      }
      */
      // If the input type is "number"
      if (oldValue.length === 1) {
        newValue = "0";
        newAnswer = 0;
      } else {
        newValue = oldValue;
        newAnswer = Number.parseInt(oldValue, 10);
      }
    }

    if (this.props.onChange) {
      this.props.onChange(newAnswer);
    }

    this.setState({
      value: newValue
    });
  }

  public handleKeypadClick = (text:string) => {
    if (text === "C") {
      this.clear();
    } else if (text === "←") {
      this.backspace();
    } else {
      this.append(text);
    }
  }

  public shouldComponentUpdate() {
    return true;
  }

  public render() {
    return (<KeypadPanel
      onClick={this.handleKeypadClick}
      onInput={this.handleKeypadInput}
      value={this.state.value}/>);
  }
}
