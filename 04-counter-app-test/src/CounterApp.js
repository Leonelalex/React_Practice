import React, {useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({value = 0}) => {
    
    const [counter, setCounter] = useState(value);

    //handleAdd
    const handleAdd = (e) => {
        setCounter(counter + 1);
    }

    const handleReset = (e) => {
        setCounter(value)
    }

    const handleMin = (e) => {
        setCounter(counter - 1)
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleMin}>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;

//rafcp shortcup para crear una functional componenet con propTypes
//ref eventons react: https://es.reactjs.org/docs/events.html