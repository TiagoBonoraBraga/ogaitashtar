import {useContext, createContext, useState, useEffect} from 'react';

const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {

    // const [theme, setTheme] = useState('light');
    // const [theme, setTheme] = useState(localStorage.getItem('theme') !== 'dark' ? 'light' : 'dark'); aqui fodeu por next nao aceita

    // useEffect(() => {

    //     const root = window.document.documentElement;

    //     root.classList.add(theme);
    //     localStorage.setItem('theme', theme);

    // }, []);


    const [darkMode, setDarkMode] = useState(true);

    // useEffect(() => {
    //     const theme = localStorage.getItem("Theme");
    //     if(theme === "dark") setDarkMode(true)
    // }, []);

    // useEffect(() => {
    //     if(darkMode) {
    //         document.documentElement.classList.add("dark")
    //         localStorage.setItem("theme", "dark")
    //     }
    // }, [darkMode]);

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}