import React, { useEffect, useState } from "react";
import Python from "../assets/skills/Python.svg";
import Java from "../assets/skills/Java.svg";
import HTML from "../assets/skills/HTML.svg";
import CSS from "../assets/skills/CSS.svg";
import JavaScript from "../assets/skills/JavaScript.svg";
import TypeScript from "../assets/skills/TypeScript.svg";
import MongoDB from "../assets/skills/MongoDB.svg";
import Express from "../assets/skills/Express.svg";
import ReactIcon from "../assets/skills/React.svg";
import Node from "../assets/skills/Node.svg";
import Nest from "../assets/skills/Nest.svg";
import Next from "../assets/skills/Next.svg";
import TailwindCSS from "../assets/skills/TailwindCSS.svg";
import NumPy from "../assets/skills/NumPy.svg";
import Pandas from "../assets/skills/Pandas.svg";
import OpenCV from "../assets/skills/OpenCV.svg";
import GitHub from "../assets/skills/Github.svg";
import MySQL from "../assets/skills/MySQL.svg";
import ThreeJS from "../assets/skills/Three.svg";
import Redux from "../assets/skills/Redux.svg";
import ExpressDark from "../assets/skills/Express-dark.svg";
import NextDark from "../assets/skills/Next-dark.svg";
import ThreeDark from "../assets/skills/Three-dark.svg";
import GithubDark from "../assets/skills/Github-dark.svg";
import "./Skills.css"

const getStorageTheme = () => {
    let theme = 'dark-theme'
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')
    }
    return theme;
}

function Skills() {
    const [theme, setTheme] = useState(getStorageTheme())
    const [ExpressIcon, setExpressIcon] = useState(ExpressDark)
    const [NextIcon, setNextIcon] = useState(NextDark)
    const [ThreeIcon, setThreeIcon] = useState(ThreeDark)
    const [GithubIcon, setGithubIcon] = useState(GithubDark)

    const skillIcons = [
        { icon: Python, title: "Python" },
        { icon: Java, title: "Java" },
        { icon: HTML, title: "HTML5" },
        { icon: CSS, title: "CSS3" },
        { icon: JavaScript, title: "JavaScript" },
        { icon: TypeScript, title: "TypeScript" },
        { icon: MySQL, title: "MySQL" },
        { icon: MongoDB, title: "MongoDB" },
        { icon: ExpressIcon, title: "Express.js" },
        { icon: ReactIcon, title: "React" },
        { icon: Node, title: "Node.js" },
        { icon: Nest, title: "Nest.js" },
        { icon: NextIcon, title: "Next.js" },
        { icon: ThreeIcon, title: "Three.js" },
        { icon: Redux, title: "Redux" },
        { icon: TailwindCSS, title: "Tailwind CSS" },
        { icon: NumPy, title: "NumPy" },
        { icon: Pandas, title: "Pandas" },
        { icon: OpenCV, title: "OpenCV" },
        { icon: GithubIcon, title: "GitHub" },
    ];
    const handleTheme = () => {
        const currentTheme = getStorageTheme()
        if (currentTheme === "dark-theme") {
            setExpressIcon(Express)
            setNextIcon(Next)
            setThreeIcon(ThreeJS)
            setGithubIcon(GitHub)
        } else {
            setExpressIcon(ExpressDark)
            setNextIcon(NextDark)
            setThreeIcon(ThreeDark)
            setGithubIcon(GithubDark)
        }
    }
    useEffect(() => {

        const toggleButton = document.querySelector('.theme__toggler');
        if (toggleButton) {
            toggleButton.addEventListener('click', handleTheme);
        }
        return () => {
            toggleButton.removeEventListener('click', handleTheme);
        }

    }, [theme])
    return (
        <div className="main">
            <div className="skills__container grid">
                <div className="skills__container">
                    {skillIcons.map((skill, index) => (
                        <div className="skill__item" key={index} title={skill.title}>
                            <img src={skill.icon} alt={skill.title} className="skillImg" />
                            <span className="skill__name">{skill.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;