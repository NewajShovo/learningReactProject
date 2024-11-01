import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Greet name="Everyone">
        <button>Action</button>
      </Greet>
      <Greet name="Shovo" />
      <Welcome name=" Hello Shovo"></Welcome>
      {/* <Hello /> */}
    </div>
  );
}

export default App;
