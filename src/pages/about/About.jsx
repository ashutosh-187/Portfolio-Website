import React from "react";
import Info from "../../components/Info";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Ashutosh_Tiwari_CV.pdf"
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";
import Skills from "../../components/Skills"
import "./About.css"

function About() {
    return (
        <main className="section container">
            <section className="about">
                <h2 className="section__title">
                    About <span>Me</span>
                </h2>
                <div className="about__container grid">
                    <div className="about__info">
                        <ul className="info__list grid">
                            <Info />
                        </ul>
                        <a href={CV} download='' className="button">
                            Download CV{" "}<span className="button__icon">
                                <FaDownload />
                            </span>
                        </a>
                    </div>
                </div>
            </section>
            <div className="separator"></div>
            <section className="skills">
                <h3 className="section__subtitle subtitle__center">
                    My{" "}
                    <span className="section__subtitle__span">
                        Skills
                    </span>
                </h3>
                <Skills />
            </section>
            <div className="separator"></div>
            <section className="resume">
                <h3 className="section__subtitle subtitle__center">
                    Experience{" "}
                    <span className="section__subtitle__span">
                        & Education
                    </span>
                </h3>
                <div className="resume__container grid">
                    <div className="resume__data">
                        {resume.map((val) => {
                            if (val.category === 'education') {
                                return <ResumeItem key={val.id} {...val} />;
                            }
                        })}
                    </div>
                    <div className="resume__data">
                        {resume.map((val) => {
                            if (val.category === 'experience') {
                                return <ResumeItem key={val.id} {...val} />;
                            }
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;
