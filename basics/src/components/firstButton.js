import { useState } from 'react';

// This is the outcome of what is displayed
function Display() {
    return (
        <>
            <p> It Worked!</p>
        </>
    )
}


function FirstButton() {
    // a boolean state
    const [answer, setAnswer] = useState(false);


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
        </>
    );
}

export default FirstButton;