import './Navbar.css';

import { useState } from 'react';

function Navbar( {colortheme, switchTheme}){

    const navigate = ( target ) => {
        //console.log(target);
        const element = document.getElementById(target);
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
         if (element) {
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
        }
    }

    var menuClass = "hide";

    const showMenu = () => {
        menuClass = menuClass == "show" ? "hide" : "show";
    }

    return (
        <div className="nbar container-fluid w-100" style={{backgroundColor : colortheme=="dark-theme" ? "black" : "white"}}>
            <div className="d-flex justify-content-between">
                <div className="logo">
                    HM
                </div>
                <div className= { menuClass  == "hide" ? "show" : "hide"}>
                    <ul className="d-flex flex-wrap align-self-end justify-content-between">
                        <li onClick={() => navigate("home")} className="nav-item">Home</li>
                        <li onClick={() => navigate("experience")} className="nav-item">Experience</li>
                        <li onClick={() => navigate("skills")} className="nav-item">Skills</li> 
                        <li onClick={() => navigate("portfolio")} className="nav-item">Portfolio</li>
                        <li onClick={() => navigate("contact")} className="nav-item">Contact</li>
                        <li onClick={() => switchTheme(colortheme)} className="nav-item"> {colortheme=="dark-theme" ? "Light" : "Dark"} </li>
                    </ul> 
                </div>
                <button className= { menuClass } onClick={()=>showMenu()}> Menu </button>
            </div>
        </div>
    )
}

export default Navbar;