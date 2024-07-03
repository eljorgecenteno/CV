import { createContext } from "react";
import { useState } from "react";

const themeContext = createContext()

function ThemeContextWrapper (props){
    const [language, setLanguage] =useState("english")
return (
    <themeContext.Provider value={{language: language, setLanguage:setLanguage}}>
        {props.children}
    </themeContext.Provider>
)



}
export {themeContext, ThemeContextWrapper}