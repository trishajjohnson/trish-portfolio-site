import React from "react";
import "./Header.css";

function Header() {

    return (
        
        <header className="header">
            <div className="header__logo-box">
                <img src={require("./assets/TJ-logo.png")} alt="TJ logo" className="header__logo" />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--secondary">Hi, my name is</span>
                    <span className="heading-primary--main">Trish</span>
                    <span className="heading-primary--third">and I am a</span>
                    <span className="heading-primary--last">software engineer</span>
                </h1>
            </div>
            <img src={require("./assets/polaroid-2-tahoe.png")} alt="polaroid" id="header__polaroid-1" className="header__polaroid" />
            <img src={require("./assets/polaroid-1-tahoe.png")} alt="polaroid" id="header__polaroid-2" className="header__polaroid" />
            <img src={require("./assets/clean-pushpin-shadow.png")} alt="pushpin" id="header__pushpin-1" className="header__pushpin" />
            <img src={require("./assets/clean-pushpin-shadow.png")} alt="pushpin" id="header__pushpin-2" className="header__pushpin" />
        </header>
        
    )
}

export default Header;