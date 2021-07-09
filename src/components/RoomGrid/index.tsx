import { useState } from 'react';
import { GridContainer, GridItem } from './styles';

type RoomGridProps = {};
type DeskType = { [key: string]: { x: number; y: number } };

const RoomGrid = (props: RoomGridProps) => {
  const [desks, setDesks] = useState<DeskType>({});
  const columns = 25;
  const rows = 25;
  const calcIndex = (i: number, y: number) => rows * i + 1 + y;

  const handleOnClick = (x: number, y: number) => {
    console.log(x, y);
    setDesks({ [`${x}${y}`]: { x, y } });
  };
  const getClassName = (x: number, y: number) => {
    console.log(desks[`${x}${y}`]);
    if (typeof desks[`${x}${y}`] !== 'undefined') {
      return 'Mark';
    }
  };
  return (
    <GridContainer columns={columns} rows={rows} {...props}>
      {[...Array(columns)].map((e, i) =>
        [...Array(rows)].map((e, y) => (
          <GridItem
            className={getClassName(i, y)}
            key={calcIndex(i, y)}
            onClick={() => {
              handleOnClick(i, y);
            }}
          >
            {calcIndex(i, y)}
          </GridItem>
        ))
      )}
    </GridContainer>
  );
};

export default RoomGrid;
