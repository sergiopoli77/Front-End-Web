import Hello from "./Components/Hello";
import World from "./Components/World";
import { useState , useEffect} from "react";
import axios from "axios";

const App = () => {
  //let hello = "Selamat Datang";
  const [hello, setHello] = useState("Selamat Datang")
  

  useEffect (() => {
    console.log('component did mount')
  }, []);

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
