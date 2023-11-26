import { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';

import Tabletop from '../Tabletop';
import StatusForm from '../StatusForm';

import { GRID_SIZE, MOVE_BUTTONS } from '../../constants/constValues';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TabletopWrapper = styled.div`
  flex: 1;
  width: 33.33%; /* 1/3 of the available width */
  min-width: 200px; /* Set a minimum width if needed */
  // background-color: lightgreen;
  padding: 10px;
  box-sizing: border-box;
`;

const StatusFormWrapper = styled.div`
  flex: 2;
  width: 66.66%; /* 2/3 of the available width */
  min-width: 400px; /* Set a minimum width if needed */
  // background-color: pink;
  padding: 10px;
  box-sizing: border-box;
`;

export default function ToyRobot() {
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  const getStepPosition = (coordinate, step) => {
    const newCoordinate = coordinate + step;
    if (newCoordinate < 0) return 0;
    if (newCoordinate >= GRID_SIZE) return GRID_SIZE - 1;
    return newCoordinate;
  };

  const changeDirection = useCallback(
    (direction) => {
      // console.log('changeDirection:', {direction});
      switch (direction) {
        case MOVE_BUTTONS.UP:
          setCurrentPosition((prevState) => ({
            x: prevState.x,
            y: getStepPosition(currentPosition.y, -1),
          }));
          break;
        case MOVE_BUTTONS.DOWN:
          setCurrentPosition((prevState) => ({
            x: prevState.x,
            y: getStepPosition(currentPosition.y, 1),
          }));
          break;
        case MOVE_BUTTONS.RIGHT:
          setCurrentPosition((prevState) => ({
            x: getStepPosition(currentPosition.x, 1),
            y: prevState.y,
          }));
          break;
        case MOVE_BUTTONS.LEFT:
          setCurrentPosition((prevState) => ({
            x: getStepPosition(currentPosition.x, -1),
            y: prevState.y,
          }));
          break;
        default:
          console.log(`Stay put`);
      }
    },
    [currentPosition],
  );

  const handleKeyPress = useCallback(
    (event) => {
      const pressedKey = event.key;
      // console.log(`handleKeyPress: ${pressedKey}`);
      switch (pressedKey) {
        case 'ArrowUp':
          changeDirection(MOVE_BUTTONS.UP);
          break;
        case 'ArrowDown':
          changeDirection(MOVE_BUTTONS.DOWN);
          break;
        case 'ArrowRight':
          changeDirection(MOVE_BUTTONS.RIGHT);
          break;
        case 'ArrowLeft':
          changeDirection(MOVE_BUTTONS.LEFT);
          break;
        default:
          console.log(`Ignoring pressed key 🫥`);
      }
    },
    [changeDirection],
  );

  const handleDirectionClick = (direction) => {
    changeDirection(direction);
  };

  const handleSetPosition = (newPosition) => {
    console.log(`clicked SetPosition: `, newPosition);
    setCurrentPosition(newPosition);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div>
      <h1>Toy Robot</h1>
      <Container>
        <TabletopWrapper data-testid="tabletop-wrapper">
          <Tabletop position={currentPosition} />
        </TabletopWrapper>
        <StatusFormWrapper data-testid="status-form-wrapper">
          <StatusForm
            position={currentPosition}
            onDirectionClick={handleDirectionClick}
            onSetPosition={handleSetPosition}
          />
        </StatusFormWrapper>
      </Container>
    </div>
  );
}
