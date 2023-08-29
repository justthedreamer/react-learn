import { useEffect, useState } from 'react';
import './App.css';
import Axios  from 'axios';

function App() {
  const [ name, setName] = useState("")
  const [randomPerson,setRandomPerson] = useState(null);

  const fetchData = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setRandomPerson(res.data)
    })
  }

  return (
    <div className='App'>
      <input type="text" placeholder='Ex. Pedro..' onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={fetchData}> Predict Age</button>
      <p>Name: {randomPerson?.name}</p>
      <p>Predicted age : {randomPerson?.age}</p>
      <p>Count : {randomPerson?.count}</p>
    </div>
  )
}

export default App;
