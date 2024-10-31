import Hello from './Components/Hello'
import World from './Components/World'

const App = () =>{
  const hello = "Hello World";
  return (
    <div>
      <h1>{hello}</h1>
      <h2> Hello Wolrd 1</h2>
      <Hello text = "Component Hello 1" number={100}/>
      <Hello text = "Component Hello 2" number={110}/>
      <World />
    </div>
  )
};





export default App