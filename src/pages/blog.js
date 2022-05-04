import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";
import { ContextProvider } from "../components/Blog/Context";
import Articles from "../components/Blog/Articles";
import '../components/Blog/blogstyle.css';
import { motion } from 'framer-motion/dist/framer-motion';
export const blog=(props)=>{
    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{ opacity: 0 }}>
            <div className="center"
            style={{
                
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                overflowY:'auto',
                paddingBottom:"80px",
                width:"87%"

                
                
        }}>
            <div className="blurrer"></div>
            <ContextProvider >
                <Articles/>
            </ContextProvider>
        </div>
        </motion.div>
    )
}

