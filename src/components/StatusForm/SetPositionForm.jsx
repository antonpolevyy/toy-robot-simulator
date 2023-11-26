import { useState } from 'react';
import styled from 'styled-components';

import { GRID_SIZE } from '../../constants/constValues';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 50px;
  margin-right: 5px;
  padding: 8px;
`;

const SetPositionButton = styled.button`
  flex: 1; /* Stretch for the whole length of the element */
  padding: 8px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: coral;
`;

const SetPositionForm = ({ onSetPosition }) => {
  const [xCoord, setXCoord] = useState('');
  const [yCoord, setYCoord] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleXChange = (event) => {
    setXCoord(event.target.value);
    setErrorMessage('');
  };

  const handleYChange = (event) => {
    setYCoord(event.target.value);
    setErrorMessage('');
  };

  const handleSetPosition = () => {
    const position = { x: Number(xCoord), y: Number(yCoord) };

    if (position.x < 0 || position.x >= GRID_SIZE || position.y < 0 || position.y >= GRID_SIZE) {
      setErrorMessage('Error: Failed to set new position. Coordinates are out of range');
      return;
    } else setErrorMessage('');

    onSetPosition(position);
  };

  return (
    <Container>
      <Row>
        <Input
          type="number"
          placeholder="X"
          value={xCoord}
          // onChange={(e) => setXCoord(e.target.value)}
          onChange={handleXChange}
        />
        <Input
          type="number"
          placeholder="Y"
          value={yCoord}
          // onChange={(e) => setYCoord(e.target.value)}
          onChange={handleYChange}
        />
        <SetPositionButton onClick={handleSetPosition}>Set Position</SetPositionButton>
      </Row>
      {errorMessage && (
        <Row>
          {/* <ErrorMessage name="y" component="div" className="error-message" /> */}
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </Row>
      )}
    </Container>
  );
};

SetPositionForm.defaultProps = {
  onSetPosition: () => {},
};

export default SetPositionForm;
