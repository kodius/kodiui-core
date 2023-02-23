import { useState } from "react";
import "./App.css";
import { Test } from "@kodiui/ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      hello
      <button onClick={() => setCount(count + 1)}>count</button>
      <Test />
    </div>
  );
}

export default App;
