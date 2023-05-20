import React from 'react';
import "./Home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Bas van Dooremalen</h1>
                <span className="home__education">I'm a Front-end developer</span>

                <HeaderSocials/>

                <a href="#contact" className="btn">Hire me</a>

                <ScrollDown/>
                
            </div>
        </section>
    )
}

export default Home