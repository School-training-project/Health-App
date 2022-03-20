import { useState } from 'react'
import ToggleButton from "./splashscreen"
import { ThemeProvider } from "styled-components";

const LightTheme = {
    pageBackground :"white",
    titleColor: "#dc658b",
    tagLineColor: "black"
  };
  
const DarkTheme = {
    pageBackground:"#282c34",
    titleColor: "lightpink",
    tagLineColor:"lavender"
  }
  
const themes ={
    light: LightTheme,
    dark: DarkTheme
  }

const Theme = ()=>{
    const [theme, setTheme] = useState("light")
    return(
        <div>
        <ThemeProvider theme={themes[theme]}>
            <toggleButton theme={theme} setTheme={setTheme}/>
        </ThemeProvider>
        </div>
    )
}

export default Theme;