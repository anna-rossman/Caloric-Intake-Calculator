import {useState} from 'react';
import './App.css';
import Calculator from './calculator.js';

function App() {
  const [goal, setGoal] = useState('Maintenance');

  function handleClick(event) {
    event.preventDefault();
    setGoal(event.target.value);
  }

  return (
    <div className="App">
      <h1>Caloric Intake Calculator</h1>

      <button style={{backgroundColor: goal === 'Cut' && 'lightgray'}} className="App-button" type="button" value="Cut" onClick={handleClick}>Cut</button>
      <button style={{backgroundColor: goal === 'Maintenance' && 'lightgray'}} className="App-button" type="button" value="Maintenance" onClick={handleClick}>Maintenance</button>
      <button style={{backgroundColor: goal === 'Bulk' && 'lightgray'}} className="App-button" type="button" value="Bulk" onClick={handleClick}>Bulk</button>

      <Calculator goal={goal}/>
    </div>
  )
}

export default App;
