import { useState } from "react";
import CountUp, { useCountUp } from "react-countup";
import "tippy.js/dist/tippy.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CountUp end={1000} />
      <br />
      <CountUp end={1000} duration={5} />
      <br />
      <CountUp start={100} end={1000} duration={10} />

      <br />
      <h1>
        <CountUp
          decimals={2}
          end={count}
          duration={100}
          prefix="$"
          suffix="vnd"
        />
      </h1>

      <button onClick={() => setCount(1000000)}>Add count</button>
    </div>
  );
}

export default App;
