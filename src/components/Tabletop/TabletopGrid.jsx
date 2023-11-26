import styled, { keyframes, css } from 'styled-components';
import RobotAvatar from './RobotAvatar';

import { GRID_SIZE } from '../../constants/constValues';

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(${GRID_SIZE}, 1fr);
  gap: 0;
`;

const flashAnimation = keyframes`
  0%, 100% {
    background-color: inherit;
  }
  50% {
    background-color: red;
  }
`;

const Cell = styled.div`
  height: 50px;
  background-color: ${(props) => (props.selected ? 'orange' : 'white')};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  position: relative;
  animation: ${(props) => (props.isflashing === "true" && props.selected ? css`${flashAnimation} 0.5s ease-out` : '')};
`;

function TabletopGrid({ position, isInvalidMoveAnimation }) {

  const renderTable = () => {
    const rows = [];
    for (let i = 0; i < GRID_SIZE; i++) {
      const cells = [];
      for (let j = 0; j < GRID_SIZE; j++) {
        const isSelected = i === position.x && j === position.y;
        cells.push(
          <Cell 
            key={`${i}-${j}`} 
            selected={isSelected}
            isflashing={isInvalidMoveAnimation.toString()}
          >
            {isSelected && <RobotAvatar />}
            {`${i}x${j}`}
          </Cell>,
        );
      }
      rows.push(<div key={i}>{cells}</div>);
    }
    return rows;
  };

  return <Table>{renderTable()}</Table>;
}

TabletopGrid.defaultProps = {
  position: { x: 0, y: 0 },
  isInvalidMoveAnimation: false
};

export default TabletopGrid;
