import './App.css';
import { Person } from './componenets/Person';

function App() {
  return (
    <Person name = {"Pedro"} email= "marcink@gmail.com" age={21} isMarried = {true} friends = {["jessica","jake","jerry","paul"]}/>
  )
}

export default App;
