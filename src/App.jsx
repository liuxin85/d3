import "./App.css";
import Face from "./Face";
import { range } from "d3";

const width = 960;
const height = 500;

const array = range(10);

const faces = array.map(() => (
  <Face
    width={960}
    height={500}
    centerX={width / 2}
    centerY={height / 2}
    strokeWidth={20}
    eyeOffsetX={90}
    eyeOffsetY={100}
    eyeRadius={40}
    mouthWidth={20}
    mouthRadius={140}
  />
));

function App() {
  return (
    <div className="App">
      <>{faces}</>
    </div>
  );
}

export default App;
