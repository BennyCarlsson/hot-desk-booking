import { useEffect, useState } from 'react';
import { fetchRooms, SaveNewDesk } from '../../services/Firebase';
import { GridContainer, GridItem } from './styles';

type RoomGridProps = {};
type CurrentMarkedSquareType = { x: number; y: number };

const RoomGrid = (props: RoomGridProps) => {
  const [currentMarkedSquare, setCurrentMarkedSquare] =
    useState<CurrentMarkedSquareType | null>(null);
  const columns = 25;
  const rows = 25;

  useEffect(() => {
    fetchRooms();
  });

  const calcIndex = (i: number, y: number) => rows * i + 1 + y;

  const handleOnClick = (x: number, y: number) => {
    console.log(x, y);
    if (currentMarkedSquare && isNeighbourToCurrentMarkedSquare(x, y)) {
      console.log('MATCH!');
      SaveNewDesk({
        id: `${currentMarkedSquare.x}:${currentMarkedSquare.y}`,
        coordinates: [
          { x: currentMarkedSquare.x, y: currentMarkedSquare.y },
          { x, y }
        ]
      });
      setCurrentMarkedSquare(null);
    } else {
      setCurrentMarkedSquare({ x, y });
    }
  };

  const isNeighbourToCurrentMarkedSquare = (x: number, y: number) => {
    if (!currentMarkedSquare) return false;
    if (currentMarkedSquare.x === x - 1 && currentMarkedSquare.y === y) {
      return true;
    }
    if (currentMarkedSquare.x === x + 1 && currentMarkedSquare.y === y) {
      return true;
    }
    if (currentMarkedSquare.x === x && currentMarkedSquare.y === y - 1) {
      return true;
    }
    if (currentMarkedSquare.x === x && currentMarkedSquare.y === y + 1) {
      return true;
    }
    return false;
  };

  const getClassName = (x: number, y: number) => {
    if (currentMarkedSquare && currentMarkedSquare.x === x && currentMarkedSquare.y === y) {
      return 'Mark';
    }
  };

  return (
    <GridContainer columns={columns} rows={rows} {...props}>
      {[...Array(columns)].map((e, x) =>
        [...Array(rows)].map((e, y) => (
          <GridItem
            className={getClassName(x, y)}
            key={calcIndex(x, y)}
            onClick={() => {
              handleOnClick(x, y);
            }}
          >
            <p>{calcIndex(x, y)}</p>
          </GridItem>
        ))
      )}
    </GridContainer>
  );
};

export default RoomGrid;
