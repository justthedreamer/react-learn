import './App.css';
import {useState} from "react";

function App() {

const [todoList,setTodoList] = useState([])
const [newTask,setTask]= useState("");

const handleChange = (event) =>{
  setTask(event.target.value);
}

const addTask = () =>{
  setTodoList([...todoList, newTask]);
}

return (<div className='App'>
    <div className='addTask'>
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add task</button>
    </div>
    <div className='list'>
        {todoList.map((task)=> {
          return <p className='list-item'>{task}</p>
        })}
    </div>
  </div>
);
}

export default App;
