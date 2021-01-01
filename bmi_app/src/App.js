import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          BMI Calculator
        </p>
      </header>

      <p> Enter your height in inches:</p>
      <input></input>

      <p> Enter your weight in pounds:</p>
      <input></input>

      
      <div classname="slidecontainer">
        <p>Custom range slider:</p>
        <input type="range" min="18.5" max="30" value="30" class="slider" id="myRange"/>
      </div>

    </div>
  );
}

export default App;
