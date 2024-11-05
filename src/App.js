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

import ParentComponent from "./components/ParentComponent";

import UserGretting from "./components/UserGretting";

import NameList from "./components/NameList";

import Stylesheet from "./components/stylesheet";

import Inline from "./components/inline";

import "./appStyles.css";

import styles from "./appStyles.module.css"; // can't apply into the child component

import Form from "./components/Form";

import LifecycleA from "./components/LifecycleA";

import LifecycleB from "./components/LifecycleB";

import FragmentDeom from "./components/FragmentDeom";
import Table from "./components/Table";
import PureComponent from "./components/PureComponent";

import ParentComp from "./components/ParentComp";

import RefsDeomo from "./components/RefsDeomo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      {/* <JustCounter /> */}
      {/* <Greet name="Everyone"><button>Action</button></Greet> */}

      {/* <ClassClick /> */}

      {/* <EventBind /> */}

      {/* <ParentComponent /> */}
      {/* <UserGretting /> */}

      {/* <NameList /> */}

      {/* <Stylesheet primary={true} /> */}
      {/* 
      <h1 className="error"> Error</h1>
      <h1 className={styles.success}> success</h1>
      <Inline /> */}

      {/* <Form /> */}

      {/* <FunctionClick /> */}

      {/* <Greet name="Shovo" /> */}
      {/* <Welcome name=" Hello Shovo"></Welcome> */}
      {/* <Hello /> */}
      {/* <Message /> */}

      {/* <LifecycleA /> */}

      {/* <LifecycleB /> */}

      {/* <FragmentDeom /> */}
      {/* <Table></Table> */}
      {/* <PureComponent /> */}
      {/* <ParentComp /> */}
      {/* <RefsDeomo /> */}

      {/* <FocusInput /> */}
      {/* <FRParentInput />
       */}
      {/* <PortalDemo /> */}
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Shovo" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
