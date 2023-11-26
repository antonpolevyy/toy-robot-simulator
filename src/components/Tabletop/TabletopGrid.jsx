import styled from 'styled-components';
import RobotAvatar from './RobotAvatar';

import { GRID_SIZE } from '../../constants/constValues';

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(${GRID_SIZE}, 1fr);
  gap: 0;
`;

const Cell = styled.div`
  height: 50px;
  background-color: ${props => (props.selected ? 'orange' : 'white')};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};

  position: relative;
`;

function TabletopGrid({ position = { x: 0, y: 0 } }) {

  const renderTable = () => {
    const rows = [];
    for (let i = 0; i < GRID_SIZE; i++) {
      const cells = [];
      for (let j = 0; j < GRID_SIZE; j++) {
        const isSelected = i === position.x && j === position.y;
        cells.push(
          <Cell key={`${i}-${j}`} selected={isSelected}>
            {isSelected && <RobotAvatar />}
            {`${i}x${j}`}
          </Cell>
        );
      }
      rows.push(<div key={i}>{cells}</div>);
    }
    return rows;
  };

  return (
    <Table>
      {renderTable()}
    </Table>
  );
};

TabletopGrid.defaultProps = { 
  position: { x: 0, y: 0 }
};

export default TabletopGrid;
