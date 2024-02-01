import React from "react"
import react from "../Assets/react.png"
import django from "../Assets/django-logo-positive.png"
import css from "../Assets/css.svg"
import html from "../Assets/html.svg"
import vscode from "../Assets/icons8-visual-studio-30.png"
import python from "../Assets/python.svg"
import windows from "../Assets/windows.svg"
import github from "../Assets/github-mark-white.png";
import "./Dailyuse.css";
const Dailyuse=()=>{
  return (
    <div className="Dailyuse">
        My Daily Use
        <nav className="image">
           <img src={react} alt="react-img"/>
           <img src={django} alt="django-img"/>
           <img src={css} alt="css-img"/>
           <img src={html} alt="html-img"/>
           <img src={vscode} alt="vscode-img"/>
           <img src={python} alt="python-img"/>
           <img src={windows} alt="windows-img"/>
           <img src={github} alt="git-img"/>
        </nav>
        <br/>
        <br/>
        <div className="lineview"></div>
        <br />
    </div>
  )
}

export default Dailyuse