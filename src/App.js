import Hello from "./Components/Hello";
import World from "./Components/World";
import { useState } from "react";

const App = () => {
  //let hello = "Selamat Datang";
  const [hello, setHello] = useState("Selamat Datang");

  const handleClick = () => {
    // hello = "Welcome";
    setHello("Welcome");
    console.log("hello");
  };

  return (
    <>
      <h1>{hello}</h1>
      <h2> Hello Wolrd 1</h2>
      <Hello text="Component Hello 1" number={100} />
      <Hello text="Component Hello 2" number={110} />
      <World />
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default App;
