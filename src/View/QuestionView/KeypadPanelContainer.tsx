import * as React from 'react';
import { ReactEvent } from '../../util/ehandler';
import { KeypadPanel } from './KeypadPanel';

interface IKeypadPanelContainerProps {
  onChange?: (val:string) => void;
}

interface IKeypadPanelContainerState {
  value:string;
}

export class KeypadPanelContainer extends React.Component<IKeypadPanelContainerProps,IKeypadPanelContainerState> {
  constructor(props:IKeypadPanelContainerProps) {
    super(props);
    this.state = {
      value: ""
    };
  }

  public append = (val:string) => {
    const newValue = this.state.value + val;

    if (this.props.onChange) {
      this.props.onChange(newValue);
    }

    this.setState({
      value: newValue
    });
  }

  public clear = () => {
    const newValue = "";

    if (this.props.onChange) {
      this.props.onChange(newValue);
    }

    this.setState({
      value: newValue
    });
  }

  public backspace = () => {
    const newValue = this.state.value.substring(0, this.state.value.length - 1);

    if (this.props.onChange) {
      this.props.onChange(newValue);
    }

    this.setState({
      value: newValue
    });
  }

  public handleKeypadInput = (e:ReactEvent) => {
    const newValue = (e.target as HTMLInputElement).value;

    if (this.props.onChange) {
      this.props.onChange(newValue);
    }

    this.setState({
      value: newValue
    });
  }

  public handleKeypadClick = (e:ReactEvent) => {
    const el = e.target as HTMLElement;
    if (el.innerText === "C") {
      this.clear();
    } else if (el.innerText === "←") {
      this.backspace();
    } else {
      this.append(el.innerText);
    }
  }

  public render() {
    return (<KeypadPanel
      clickHandler={this.handleKeypadClick}
      inputHandler={this.handleKeypadInput}
      value={this.state.value}/>);
  }
}
