import Navbar from './Navbar';
import MainPage from './MainPage';
import Experience from './Experience';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact'

import { useState } from 'react';

function Container(){

    const [theme,setTheme] = useState("dark-theme");

    const switchTheme = (theme)=>{
        setTheme(theme=="light-theme" ? "dark-theme" : "light-theme");
    }

    return (
        <div className={theme}>
            <Navbar colortheme={theme} switchTheme={switchTheme}/>
            <MainPage/>
            <Experience/>
            <Skills colortheme={theme}/>
            <Portfolio colortheme={theme}/>
            <Contact/>
        </div>
    )
}

export default Container;