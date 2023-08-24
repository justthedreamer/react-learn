import './App.css';



function App() {
  const age = 17;
  const isGreen = true;

  return (
    <div className="App">
      {age >= 18 ? <h1>OverAge</h1> : <h1>Under Age</h1>}
      
      <h1 style = {{color: isGreen? "green" : "red", backgroundColor: 'black' }}>This has color</h1>

      {isGreen && <button>Click me</button>}
    </div>
  );
}

export default App;
