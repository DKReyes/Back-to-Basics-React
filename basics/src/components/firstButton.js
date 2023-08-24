import { useState, useEffect } from 'react';

// This is the outcome of what is displayed
function Display() {
    return (
        <>
            <p> It Worked!</p>
        </>
    )
}

// Props
function Dog(props) {
    return <p>I'm a dog and my name is {props.name}.</p>
}


function FirstButton() {
    // a boolean state (for useState example)
    const [answer, setAnswer] = useState(false);
    // a count state (for useEffect example)
    const [count, setCount] = useState(0);
    // a prop element (for props example)
    const theDog = <Dog name="Danny"/>;


    // useEffect will run on every render, so the count changes every 1000 tick set by the 
    // parameters on setTimeout. The [] on useEffect will only run this on inital render
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);

    // Example of useEffect running only once
    /* Runs on the first render
     * useEffect(() => {
     * 
     * }, []);
     */

    // Example of useEffect running once a prop or state values
    /* Runs on the first render and any time any dependency value changes eg. prop or state
     * useEffect(() => {
     *
     * }, [prop, state]);
     */


    // Handles the onClick event
    const handleClick = event => {
        setAnswer(current => !current);
    }


    return (
        <>
            <button onClick={handleClick}>
                Activate!
            </button>

            {answer && <Display />}

            <p>Website has been rendered {count} times.</p>
            <p>{theDog}</p>
        </>
    );
}

export default FirstButton;