import styled from 'styled-components';

type GridContainerType = {
  rows: number;
  columns: number;
};

export const GridContainer = styled.div<GridContainerType>`
  display: grid;
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 25px)`};
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 25px)`};
  column-gap: 1px;
  row-gap: 1px;
  justify-content: center;
`;

export const GridItem = styled.div`
  border: 1px solid black;
  font-size: 8px;
  color: gray;
  &.Mark {
    background-color: gray;
  }
`;
