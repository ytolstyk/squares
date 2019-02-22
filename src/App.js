import React, { Component } from 'react';
import SquaresComponent from './components/squares_component';
import { Container } from './components/styled_components/common';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <SquaresComponent />
        </Container>
      </div>
    );
  }
}

export default App;
