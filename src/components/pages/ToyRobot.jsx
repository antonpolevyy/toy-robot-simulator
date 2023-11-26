import { useState } from 'react';

import './ToyRobot.css';

import Tabletop from '../Tabletop';
import StatusForm from '../StatusForm';

import { GRID_SIZE, MOVE_BUTTONS } from '../../constants/constValues';

export default function ToyRobot() {

  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  const getStepPosition = (coordinate, step) => {
    const newCoordinate = coordinate + step;
    if (newCoordinate < 0) return 0;
    if (newCoordinate >= GRID_SIZE) return GRID_SIZE - 1;
    return newCoordinate;
  };

  const changeDirection = (direction) => {
    console.log(`Move ${direction}`);
    switch (direction) {
      case MOVE_BUTTONS.UP:
        setCurrentPosition((prevState) => ({
          x: prevState.x,
          y: getStepPosition(currentPosition.y, -1)
        }));
        break;
      case MOVE_BUTTONS.DOWN:
        setCurrentPosition((prevState) => ({
          x: prevState.x,
          y: getStepPosition(currentPosition.y, 1)
        }));
        break;
      case MOVE_BUTTONS.RIGHT:
        setCurrentPosition((prevState) => ({
          x: getStepPosition(currentPosition.x, 1),
          y: prevState.y
        }));
        break;
      case MOVE_BUTTONS.LEFT:
        setCurrentPosition((prevState) => ({
          x: getStepPosition(currentPosition.x, -1),
          y: prevState.y
        }));
        break;
      default:
        console.log(`Stay put`);
    }
  };

  const handleDirectionClick = (direction) => {
    changeDirection(direction);
  };

  const handleSetPosition = (newPosition) => {
    console.log(`clicked SetPosition: `, newPosition);
    setCurrentPosition(newPosition);
  };

  return (
    <div>
      <h1>Toy Robot</h1>
      <div className="toy-robot-page">
        <div className="box one-third">
          <Tabletop position={currentPosition} />
        </div>
        <div className="box two-thirds">
          <StatusForm 
            position={currentPosition}
            onDirectionClick={handleDirectionClick}
            onSetPosition={handleSetPosition}
          />
        </div>
      </div>
    </div>
  );
}
