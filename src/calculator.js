import React, {useState} from 'react';
import ResultsUS from './resultsUS.js';
import ResultsMetric from './resultsMetric.js';

export default function Calculator(props) {
    // TODO: condense into an object then change object state
    const [age, setAge] = useState();
    const [sex, setSex] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [activity, setActivity] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [units, setUnits] = useState("US");

    function handleSubmit(event) {
        event.preventDefault();

        setSubmitted(true);
    }

    function handleReset() {
        setSubmitted(false);
        setAge();
        setSex();
        setHeight();
        setWeight();
        setActivity(1);
    }

    function handleClick(event) {
        setUnits(event.target.value);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table style={{margin: 'auto', alignContent: 'left'}}>
                    {/* Units buttons */}
                    <tr style={{alignContent: 'left'}}>
                        <td></td>
                        <td>
                            <button style={{backgroundColor: units === 'US' && 'darkgray'}} type="button" value="US" onClick={handleClick}>US</button>
                            <button style={{backgroundColor: units === 'Metric' && 'darkgray'}} type="button" value="Metric" onClick={handleClick}>Metric</button>
                        </td>
                    </tr>
                    
                    {/* Age input */}
                    <tr style={{alignContent: 'left'}}>
                        <td>
                            <label for="age">Age:</label>
                        </td>
                        <td>
                            <input
                                pattern="[0-9]*"
                                style={{borderColor: (age < 18 || (submitted && age === undefined)) && 'red'}}
                                type="number" 
                                name="age" 
                                id="age"
                                onChange={(event) => setAge(event.target.value)}
                            />
                            <span style={{marginLeft: -60, color: 'gray'}}>years</span>
                        </td>
                    </tr>

                    {/* Sex input */}
                    <tr>
                        <td>
                            <label htmlFor="sex">Sex:</label>
                        </td>
                        <td>
                            <div style={{display: 'inline-block', border: (submitted && sex === undefined) && '2px solid red'}} id="sex">
                                <label htmlFor="male">
                                    <input type="radio" name="sex" value="Male" id="male" onClick={(event) => setSex(event.target.value)} />
                                    Male
                                </label>
                            
                                <label htmlFor="female">
                                    <input type="radio" name="sex" value="Female" id="female" onClick={(event) => setSex(event.target.value)} />
                                    Female
                                </label>
                            </div>
                        </td>
                    </tr>

                    {/* Height input */}
                    <tr>
                        <td>
                            <label for="height">Height: </label>
                        </td>
                        <td>
                            <input 
                                pattern="[0-9]*"
                                style={{borderColor: (height < 0 || (submitted && height === undefined)) && 'red'}}
                                type="number" 
                                name="height" 
                                id="height" 
                                onChange={(event) => setHeight(event.target.value)} />
                            <span style={{marginLeft: -40, color: 'gray'}}>{units === "US" ? "in" : "cm"}</span>
                        </td>
                    </tr>

                    {/* Weight input */}
                    <tr>
                        <td>
                            <label for="weight">Weight: </label>
                        </td>
                        <td>
                            <input 
                                pattern="[0-9]*"
                                style={{borderColor: (weight < 0 || (submitted && weight === undefined)) && 'red'}}
                                type="number" 
                                name="weight" 
                                id="weight" 
                                onChange={(event) => setWeight(event.target.value)} />
                            <span style={{marginLeft: -40, color: 'gray'}}>{units === "US" ? "lbs" : "kg"}</span>
                        </td>
                    </tr>

                    {/* Activity dropdown */}
                    <tr>
                        <td>
                            <label for="activity">Activity: </label>
                        </td>
                        <td>
                        <select name="activity" id="activity" onChange={(event) => {
                            if (event.target.value === "bmr") {
                                setActivity(1);
                            } else if (event.target.value === "sedentary") {
                                setActivity(1.2);
                            } else if (event.target.value === "light activity") {
                                setActivity(1.375);
                            } else if (event.target.value === "moderate activity") {
                                setActivity(1.55);
                            } else if (event.target.value === "very activity") {
                                setActivity(1.725);
                            } else {
                                setActivity(1.9);
                            }
                        }}>
                            <option value="bmr">BMR: Basal metabolic rate</option>
                            <option value="sedentary">Sedentary: Little to no exercise</option>
                            <option value="light activity">Light Activity: Light exercise/sports 1-3 days per week</option>
                            <option value="moderate activity">Moderate Activity: Moderate exercise/sports 3-5 days per week</option>
                            <option value="very active">Very Active: Hard exercise/sports 6-7 days per week</option>
                            <option value="extra active">Extra Active: Very hard exercise/sports and physical job</option>
                        </select>
                        </td>
                    </tr>
                    
                    {/* Submit and reset buttons */}
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" onSubmit={handleSubmit}/>
                            <button type="reset" onClick={handleReset}>Reset data</button>
                        </td>
                    </tr>
                </table>
            </form>

            {submitted && (units === 'US' ? <ResultsUS age={age} sex={sex} height={height} weight={weight} activity={activity} goal={props.goal}/> : <ResultsMetric age={age} sex={sex} height={height} weight={weight} activity={activity} goal={props.goal}/>)}
        </div>
    )
}