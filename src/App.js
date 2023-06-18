import {useState} from 'react';
import './App.css';
import Calculator from './calculator.js';

function App() {
  const [goal, setGoal] = useState();
  const [submitted, setSubmitted] = useState(false);

  function handleClick(event) {
    event.preventDefault();

    setSubmitted(true);
    setGoal(event.target.value);
  }

  function handleReset() {
    setSubmitted(submitted => !submitted);
    setGoal();
  }

  return (
    <div className="App">
      <h1>Caloric Intake Calculator</h1>
      <button style={{backgroundColor: goal === 'Cut' && 'lightgray'}} className="App-button" type="button" value="Cut" onClick={handleClick}>Cut</button>
      <button style={{backgroundColor: goal === 'Maintenance' && 'lightgray'}} className="App-button" type="button" value="Maintenance" onClick={handleClick}>Maintenance</button>
      <button style={{backgroundColor: goal === 'Bulk' && 'lightgray'}} className="App-button" type="button" value="Bulk" onClick={handleClick}>Bulk</button>
      {submitted && <Calculator goal={goal}/>}
      {submitted && <button type="reset" onClick={handleReset}>Reset all</button>}
    </div>
  )
}

export default App;
