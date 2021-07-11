import styled from 'styled-components';

type GridContainerType = {
  rows: number;
  columns: number;
};

export const GridContainer = styled.div<GridContainerType>`
  display: grid;
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 30px)`};
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 30px)`};
  column-gap: 1px;
  row-gap: 1px;
  justify-content: center;
`;

export const GridItem = styled.div`
  border: 1px solid black;
  font-size: 8px;
  color: #d9d9d9;
  &.Mark {
    background-color: #d9d9d9;
  }
  &.Desk {
    background-color: #fff67a;
  }
`;
