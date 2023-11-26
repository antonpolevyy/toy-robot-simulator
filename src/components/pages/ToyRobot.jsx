import './ToyRobot.css';

import Tabletop from '../Tabletop';
import StatusForm from '../StatusForm';

export default function ToyRobot() {
  const currentPosition = { x: 1, y: 2 };

  return (
    <div>
      <h1>Toy Robot Page</h1>
      <div className="toy-robot-page">
        <div className="box one-third">
          <Tabletop position={currentPosition} />
        </div>
        <div className="box two-thirds">
          <StatusForm />
        </div>
      </div>
    </div>
  );
}
