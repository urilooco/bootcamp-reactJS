import React from 'react';
import Counter from '../../counter/Counter';

function Exercises(props){
    return(
        <div>
            <header className="App-header">
                <Counter maxValue={15} />
            </header>
        </div>
    )
}

export default Exercises;