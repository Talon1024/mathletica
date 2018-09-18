import * as React from 'react';
import './App.css';
// import {ColourDisplay} from './Experiments/ColourDisplay';
import {PolynomialTestbed} from './Testbed';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <ColourDisplay/> */}
        <PolynomialTestbed/>
      </div>
    );
  }
}

export default App;
