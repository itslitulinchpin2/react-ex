import { createContext } from 'react';
import { useState } from 'react';
//컨텍스트는 정보를 담음
export const DarkModeContext = createContext();

//context를 만드려면 항상 프로바이더가 필요
//프로바이더는 umbrella의 역할(부모 우산, 자식을 감싼다)
export function DarkModeProvider({children}){

    const [darkMode,setDarkMode] = useState(false);
    const toggleDarkMode = ()=>{setDarkMode(mode=>!mode)}
    return (
    <DarkModeContext.Provider
        value={{darkMode,toggleDarkMode}}>
        {children}
    </DarkModeContext.Provider>)
}