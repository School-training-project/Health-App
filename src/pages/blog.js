import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";
import { ContextProvider } from "../components/Blog/Context";
import Articles from "../components/Blog/Articles";
import '../components/Blog/blogstyle.css';

export const blog=(props)=>{
    return (
        <div className="center"
            style={{
                
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                
                
        }}>
            
            <ContextProvider >
                <Articles/>
            </ContextProvider>
        </div>
    )
}

