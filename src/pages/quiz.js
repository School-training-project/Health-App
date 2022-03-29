import React from 'react'
import Q from '../components/Quiz/Quizpage';
//import mra from '../components/Quiz/mra.png';

function quiz() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                overflow:'hidden'
            }}
        >
       
           <Q />
        </div>
    );
};

export default quiz;