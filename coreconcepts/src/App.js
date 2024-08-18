import {useState} from 'react';

function App () {
  const [numbers, setNumbers] = useState(0);

  const increment = ()=>{
    setNumbers(numbers+5);
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h2>{numbers}</h2>
    </div>
  )
}
export default App;