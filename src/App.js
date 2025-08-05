import { Outlet } from "react-router-dom";
import "./App.css";
import FetchData from "./components/Fetch/FetchData";
import Test from "./components/Fetch/Test";
import LoginForm from "./components/LoginForm";
import CounterTime from "./components/UseEffect-Timer/CounterTime";
import DigitalClock from "./components/UseEffect-Timer/DigitalClock";
import LapTimer from "./components/UseEffect-Timer/Lap-timer";
import TimerSec from "./components/UseEffect-Timer/Timer-sec";
import ChessRoot from "./components/Chess/ChessRoot";
import TimerTow from "./components/UseEffect-Timer/TimerTow";
import RootForm from "./components/MultiStepForm/RootForm";
import Content from "./components/DilogBox/Content";
import ProjectRoot from "./components/MiniProject-BudgetCal/ProjectRoot";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="">
          <ProjectRoot />
          {/* <Content /> */}
          {/* <RootForm /> */}
          {/* <ChessRoot /> */}
          {/* <TimerSec /> */}
          {/* <TimerTow /> */}
          {/* <DigitalClock /> */}
          {/* <LapTimer /> */}
          {/* <CounterTime /> */}
          {/* <FetchData /> */}
          {/* <Test /> */}
          {/* <LoginForm /> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
