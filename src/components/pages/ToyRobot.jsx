import './ToyRobot.css';

import Tabletop from '../Tabletop';
import StatusForm from '../StatusForm';

export default function ToyRobot() {
  return (
    <div>
      <h1>Toy Robot Page</h1>
      <div className="toy-robot-page">
        <div className="box one-third">
          <Tabletop />
        </div>
        <div className="box two-third">
          <StatusForm />
        </div>
      </div>
    </div>
  );
}
