import React from 'react';
import { Square } from './styled_components/squares';
import helpers from '../utils/helpers';

class SquaresComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedColor: undefined,
      colorsArray: helpers.randomColorsArray(1008)
    };
  }

  handleAssignColor = (color) => () => {
    this.setState({
      selectedColor: color
    });
  };

  handleClearColor = () => {
    this.setState({
      selectedColor: undefined
    });
  };

  render() {
    return (
      <div>
        {this.renderSquares()}
      </div>
    );
  }

  renderSquares = () => {
    return this.state.colorsArray.map(this.renderSquare);
  };

  renderSquare = (color, index) => {
    return <Square
      key={index}
      color={color}
      isSelected={this.state.selectedColor === color}
      onMouseEnter={this.handleAssignColor(color)}
      onMouseLeave={this.handleClearColor}
    />;
  };
}

export default SquaresComponent;
