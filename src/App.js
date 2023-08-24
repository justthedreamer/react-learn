import './App.css';
import {useState} from "react";

function App() {

const [todoList,setTodoList] = useState([])
const [newTask,setTask]= useState("");

const handleChange = (event) =>{
  setTask(event.target.value);
}

const addTask = () =>{
  const task = {
    id: todoList.length === 0 ? 1 : todoList[todoList.length -1 ].id + 1,
    taskName: newTask
  }
  setTodoList([...todoList, task]);
}

const deleteTask = (taskId) =>{
  setTodoList(todoList.filter((task)=> task.id !== taskId));
}

return (<div className='App'>
    <div className='addTask'>
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add task</button>
    </div>
    <div className='list'>
        {todoList.map((task)=> {
          return (
            <div>
              <p className='list-item'>{task.taskName}</p>
              <button className='remove-button' onClick={()=>deleteTask(task.id)}>X</button>
            </div>
            );
        })}
    </div>
  </div>
);
}

export default App;
