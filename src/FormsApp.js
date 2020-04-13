import React, { Component } from 'react';
import Forms from './sections/forms';

class Box extends Component {
  render() {
    return (
        <div style = {{border:"1px solid #000", margin: 5, padding: 5}} >
        {this.props.children}
        </div>
    )
  }
}
class App extends Component {
  render () {
   return (
        <div className="App">

          <h4>Formulario</h4>
          <Box>
            <Forms />
          </Box>


        </div>
    );
  }
}

export default App;
