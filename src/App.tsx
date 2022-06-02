import { BsAlarm, BsAlarmFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./App.css";

function App() {
  return (
    <IconContext.Provider value={{ size: "10rem" }}>
      <div className="App">
        <BsAlarm color="green" size="1.5rem" />
        <BsAlarmFill />
      </div>
    </IconContext.Provider>
  );
}

export default App;
