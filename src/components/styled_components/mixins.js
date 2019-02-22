import { assert } from 'chai';
import constants from './constants';

export function timesBasePx(num) {
  assert.isNumber(num);

  return `${num * constants.base}px`;
};
