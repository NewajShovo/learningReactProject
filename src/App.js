import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Greet name="Everyone">{/* <button>Action</button> */}</Greet>
      {/* <Greet name="Shovo" /> */}
      <Welcome name=" Hello Shovo"></Welcome>
      {/* <Hello /> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
