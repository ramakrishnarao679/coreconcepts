import {useState} from 'react';

function App () {
  const [numbers, setNumbers] = useState(0);

  const increment = ()=>{
    setNumbers(numbers+5);
  }

  const incrementAsync = ()=>{
    setTimeout(()=>{
      setNumbers((currentNumber)=>currentNumber+10)
    }, 2000);
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAsync}>IncrementAsync</button>
      <h2>{numbers}</h2>
    </div>
  )
}
export default App;