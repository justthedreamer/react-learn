import './App.css';
import { User } from './User';



function App() {
  //const names = ['Pedro','Jake','Samanta','Jessica','Mike','Justin','Martin'];
  const users = [
    { name : "Pedro", age : 21},
    { name : "Jake", age : 25},
    { name : "Samanta", age : 45},
  ];

  return (
    <div className="App">
      {users.map((user,key)=>{
        return <User key={key} name = {user.name} age = {user.age}></User>
      })}
    </div>
  );
}

export default App;
