import React from 'react'
import Q from '../components/Quiz/Quizpage';
//import mra from '../components/Quiz/mra.png';
import { motion } from 'framer-motion/dist/framer-motion'

function quiz() {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{ opacity: 0 }}>
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
        </motion.div>
    );
};

export default quiz;