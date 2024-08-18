import {useState} from 'react';

function App(){
  const [input, setInput] = useState('');
  const [user, setUser] = useState({
    name:'rama',
    gmail:'rama@gmail.com',
  });

  const changeName = ()=>{
    setUser((prev)=>({...prev, name:input}));
  }
  return (
    <div>
      <h2>Users</h2>
      <input onChange={(e)=>setInput(e.target.value)} placeholder="Enter your Name" />
      <button onClick={changeName}>ChangeName</button>

      <span>User name is: {user.name}</span>
    </div>
  )
}
export default App;