import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Icon from "./components/Icon/Icon";
import Card from "./components/Card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Jai Shree Ram</h1>

      <Card player="X" />
      {/* <Card /> */}
    </>
  );
}

export default App;
