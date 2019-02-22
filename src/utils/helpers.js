import { assert } from 'chai';
import { colorsArray } from '../components/styled_components/constants';

const helpers = {
  indexArrayOfLength(num) {
    assert.isNumber(num);

    const array = Array(num);

    for (let i = 0; i < array.length; i++) {
      array[i] = i;
    }

    return array;
  },

  randomColor() {
    return colorsArray[Math.floor(Math.random() * colorsArray.length)];
  },

  randomColorsArray(num) {
    assert.isNumber(num);

    const array = Array(num);

    for (let i = 0; i < array.length; i++) {
      array[i] = helpers.randomColor();
    }

    return array;
  }
};

export default helpers;
