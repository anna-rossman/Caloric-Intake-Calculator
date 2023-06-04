import React, {useState} from 'react';
import ResultsUS from './resultsUS.js';
import ResultsMetric from './resultsMetric.js';

export default function Calculator(props) {
    // possible TODO: condense into an object then change object state
    const [age, setAge] = useState();
    const [sex, setSex] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [activity, setActivity] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [units, setUnits] = useState("US");

    // TODO: check input values
    function handleSubmit(event) {
        // if (typeof age !== 'number' && age < 18) {
        //     alert("Enter an age between 18-76.");
        // }

        // if (typeof height !== 'number' && height < 0) {
        //     alert("Enter a positive number.");
        // }

        // if (typeof weight !== 'number' && weight < 0) {
        //     alert("Enter a positive number.");
        // }
        event.preventDefault();
        setSubmitted(true);
    }

    function handleReset() {
        // event.preventDefault();
        setSubmitted(submitted => !submitted);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    Current goal: {props.goal}
                    <br />
                    Current unit system: {units}
                </p>
                <button type="button" value="US" onClick={(event) => setUnits(event.target.value)}>US</button>
                <button type="button" value="Metric" onClick={(event) => setUnits(event.target.value)}>Metric</button>
                <br />

                <label for="age">Age: </label>
                <input type="text" name="age" id="age" onChange={(event) => setAge(event.target.value)} />
                <br />

                <label htmlFor="sex">Sex: </label>
                <section id="sex">
                    <label htmlFor="male">
                        <input type="radio" name="sex" value="Male" id="male" onClick={(event) => setSex(event.target.value)} />
                        Male
                    </label>
                
                    <label htmlFor="female">
                        <input type="radio" name="sex" value="Female" id="female" onClick={(event) => setSex(event.target.value)} />
                        Female
                    </label>
                </section>

                <br />
                
                <label for="height">Height {units === "US" ? "(inches)" : "(cm)"}: </label>
                <input type="text" name="height-inches" id="height" onChange={(event) => setHeight(event.target.value)} />

                <br />

                <label for="weight">Weight {units === "US" ? "(lbs)" : "(kg)"}: </label>
                <input type="text" name="weight" id="weight" onChange={(event) => setWeight(event.target.value)} />

                <br />

                <label for="activity">Activity: </label>
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
                
                <br />

                {/* <p>
                    Sedentary: Little to no exercise
                    <br />
                    Light Activity: Light exercise/sports 1-3 days per week
                    <br />
                    Moderate Activity: Moderate exercise/sports 3-5 days per week
                    <br />
                    Very Active: Hard exercise/sports 6-7 days per week
                    <br />
                    Extra Active: Very hard exercise/sports and physical job
                </p> */}

                <input type="submit" onSubmit={handleSubmit}/>
                <button type="reset" onClick={handleReset}>Reset data</button>
            </form>
            {submitted && (units === 'US' ? <ResultsUS age={age} sex={sex} height={height} weight={weight} activity={activity} goal={props.goal}/> : <ResultsMetric age={age} sex={sex} height={height} weight={weight} activity={activity} goal={props.goal}/>)}
        </div>
    )
}