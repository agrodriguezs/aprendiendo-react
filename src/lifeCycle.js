import React, { Component } from 'react';
//import Constructor from './sections/life-cycle/constructor';
import ComponentWillMount from './sections/life-cycle/componentWillMount';


class App extends Component {
  render () {
   return (
        <div className="App">
          <ComponentWillMount />
        </div>
    );
  }
}

export default App;
