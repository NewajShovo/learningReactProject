import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

import Hello from "./components/Hello";
import Message from "./components/Message";
import JustCounter from "./components/JustCounter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/classClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      {/* <JustCounter /> */}
      {/* <Greet name="Everyone"><button>Action</button></Greet> */}

      {/* <ClassClick /> */}

      <EventBind />

      {/* <FunctionClick /> */}

      {/* <Greet name="Shovo" /> */}
      {/* <Welcome name=" Hello Shovo"></Welcome> */}
      {/* <Hello /> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
