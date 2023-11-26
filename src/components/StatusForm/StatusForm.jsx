import styled from 'styled-components';

import SetPositionForm from './SetPositionForm';

import { MOVE_BUTTONS } from '../../constants/constValues';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  // align-items: center;
  padding: 5px 10px;
`;

const StatusField = styled.div`
  font-weight: bold;
  flex: 1; /* Take up remaining width */
  justify-content: start;
  text-align: start;
  border: 1px solid black;
  padding: 10px;
`;

const Button = styled.button`
  flex: 1; /* Stretch for the whole length of the element */
  padding: 8px;
  cursor: pointer;
`;

const StatusForm = ({ position, onDirectionClick, onSetPosition }) => {
  return (
    <Container>
      <Row>
        <StatusField>
          {' '}
          Status: {position.x} x {position.y}
        </StatusField>
      </Row>
      <Row>
        <Button onClick={() => onDirectionClick(MOVE_BUTTONS.UP)}>{MOVE_BUTTONS.UP}</Button>
        <Button onClick={() => onDirectionClick(MOVE_BUTTONS.DOWN)}>{MOVE_BUTTONS.DOWN}</Button>
        <Button onClick={() => onDirectionClick(MOVE_BUTTONS.LEFT)}>{MOVE_BUTTONS.LEFT}</Button>
        <Button onClick={() => onDirectionClick(MOVE_BUTTONS.RIGHT)}>{MOVE_BUTTONS.RIGHT}</Button>
      </Row>
      <Row>
        <SetPositionForm onSetPosition={onSetPosition} />
      </Row>
    </Container>
  );
};

StatusForm.defaultProps = {
  position: { x: 0, y: 0 },
  onDirectionClick: () => {},
  onSetPosition: () => {},
};

export default StatusForm;
