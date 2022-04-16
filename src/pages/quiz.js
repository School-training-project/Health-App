import React from 'react'
import Q from '../components/Quiz/Quizpage';
//import mra from '../components/Quiz/mra.png';

function quiz() {
    return (
        <div
            style={{
                
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                overflow:'visible'
            }}
        >
       
           <Q />
        </div>
    );
};

export default quiz;