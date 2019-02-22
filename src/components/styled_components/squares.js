import styled from 'styled-components';
import { timesBasePx } from './mixins';

const squareDimension = timesBasePx(2);

export const Square = styled.div`
  width: ${squareDimension};
  height: ${squareDimension};
  margin: ${timesBasePx(1 / 6)};
  display: inline-block;
  cursor: pointer;
  float: left;
  ${(props) => `background-color: ${props.color};`}
  ${(props) => props.isSelected ? 'opacity: 1;' : 'opacity: 0.5;' }
  ${(props) => props.isSelected ? 'transform: scale(1.1);' : 'transform: scale(1.0);' }
`;
