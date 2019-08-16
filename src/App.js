import React, { useEffect } from "react";
import { useClick } from "./Context";

const App = () => {
  const { clicked, onClick } = useClick();

  useEffect(() => {
    console.log(clicked);
  }, [clicked]);

  return (
    <div className="App">
      <span>{clicked}</span>
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default App;
