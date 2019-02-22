import styled from 'styled-components';
import { timesBasePx } from './mixins';

const containerSidePadding = timesBasePx(2);

export const Container = styled.div`
  width: ${timesBasePx(100)};
  padding-top: ${timesBasePx(4)};
  padding-left: ${containerSidePadding};
  padding-right: ${containerSidePadding};
  margin: 0 auto;
`;
