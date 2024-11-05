import Hello from "./Components/Hello";
import World from "./Components/World";
import { useState , useEffect} from "react";
import axios from "axios";

const App = () => {
  //let hello = "Selamat Datang";
  const [hello, setHello] = useState("Selamat Datang")
  const [users, setUsers] = useState([]); 

  useEffect (() => {
    axios
    .get ("https://jsonplaceholder.typicode.com/users") 
    .then ((res) => setUsers(res.data));
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
      {users.map((item) =>(
        <h3>{item.name}</h3>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default App;
