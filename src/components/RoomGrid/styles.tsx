import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 25px);
  grid-template-columns: repeat(5, 25px);
  column-gap: 5px;
  row-gap: 5px;
`;

export const GridItem = styled.div`
  border: 1px solid black;
`;
