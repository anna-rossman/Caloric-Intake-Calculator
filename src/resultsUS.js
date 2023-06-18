import React from 'react';

export default function ResultsUS(props) {
    function calculateMaintenance(input) {
        if (input.sex === 'Male') {
            return Math.floor(((10*input.weight*0.45359237) + (6.25*input.height*2.54) -(5*input.age) + 5)*input.activity);
        } else {
            return Math.floor(((10*input.weight*0.45359237) + (6.25*input.height*2.54) -(5*input.age) - 161)*input.activity);
        }
    }

    function calculateCut(input) {
        if (input.sex === 'Male') {
            return Math.floor(((10*input.weight*0.45359237) + (6.25*input.height*2.54) -(5*input.age) + 5)*input.activity) - 500;
        } else {
            return Math.floor(((10*input.weight*0.45359237) + (6.25*input.height*2.54) -(5*input.age) - 161)*input.activity) - 500;
        }
    }

    function calculateBulk(input) {
        const maintenanceCals = calculateMaintenance(input);
        return Math.floor(maintenanceCals + maintenanceCals*.1);
    }

    function caloricIntake(props) {
        if (props.goal === 'Cut') {
            return calculateCut(props);
        } else if (props.goal === 'Maintenance') {
            return calculateMaintenance(props);
        } else {
            return calculateBulk(props);
        }
    }

    return (
        <div>
            <p>
                {(props.age !== undefined && props.sex !== undefined && props.height !== undefined && props.weight !== undefined) ? 
                `Calories recommended for ${props.sex}: ${caloricIntake(props)}` : 'Please fill in empty fields.'}
            </p>
        </div>
    )
}