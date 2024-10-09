import React from "react";
import Profile from "../../assets/profile.gif"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css"

function Home() {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" />
            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>
                            I'm Ashutosh Tiwari.
                        </span>
                        <br />
                        Full Stack Developer
                    </h1>
                    <p className="home__description">
                        Mern stack and Python developer with expertise in back-end and front-end development,
                        skilled at creating high-quality dynamic applications.
                    </p>
                    <Link to='/about' className="button">
                        More About Me
                        <span className="button__icon">
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>
            <div className="color__block"></div>
        </section>
    );
}

export default Home;
