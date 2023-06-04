import {useState} from 'react';
import './App.css';
import Calculator from './calculator.js';

function App() {
  const [goal, setGoal] = useState();
  const [submitted, setSubmitted] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setSubmitted(true);
    if (event.target.value === 'cut') {
      setGoal('Cut');
    } else if (event.target.value === 'bulk') {
      setGoal('Bulk');
    } else {
      setGoal('Maintenance');
    }
  }

  function handleReset() {
    setSubmitted(submitted => !submitted);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Caloric Intake Calculator</h1>
      <button type="button" value="cut" onClick={handleClick}>Cut</button>
      <button type="button" value="maintenance" onClick={handleClick}>Maintenance</button>
      <button type="button" value="bulk" onClick={handleClick}>Bulk</button>
      {submitted && <Calculator goal={goal}/>}
      {submitted && <button type="reset" onClick={handleReset}>Reset all</button>}
    </div>
  )
}

export default App;
