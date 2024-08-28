import { createContext } from "react";
import { useState } from "react";


const themeContext = createContext()

function ThemeContextWrapper (props){
    const [windowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
      });
     
    console.log(windowSize)
    const [language, setLanguage] =useState("english")
return (
    <themeContext.Provider value={{language: language, setLanguage:setLanguage, screenWidth: windowSize.width}}>
        {props.children}
    </themeContext.Provider>
)



}
export {themeContext, ThemeContextWrapper}