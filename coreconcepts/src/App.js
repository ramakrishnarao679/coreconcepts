import  {useState} from 'react';
import Child from './Child';
import Address from './Address';


function App (){
  const [name, setName] = useState('Nithin');
  const [state, setState] = useState('Telengana');

  const changeState = (val)=>{
    console.log(val)
    setState(val);
  }

const changeName = (value)=>{
  console.log(value);
  setName(value);
}
  return (
    <div>
      <Child valueOfProps={name} changeName={changeName} />

      <Address valueOfState={state} changeState={changeState} />
    </div>
  )
}
export default App;