import React from "react"
import logo from "../Assets/github-mark-white.png";
import linkedin from "../Assets/icons8-linkedin-48.png";
import email from "../Assets/icons8-email-48.png"
import resume from "../Assets/YUVARAJ--Resume.pdf";
import profile from "../Assets/yuvi.png";
import { PhoneOutlined } from "@ant-design/icons";
import "./Main.css";
const Main=()=>{
  return (
    <main className="main-page">
             <main className="logo">
              <nav className="github">
                <a href="https://github.com/yuva-raj2"><img src={logo} alt="github"/></a>
              </nav>
              <nav className="linkedin" id="logo">
                <a href="https://www.linkedin.com/in/yuvaraj-r-497908214/"><img src={linkedin} alt="linkedin"/></a>
              </nav>
              <nav className="email" id="logo">
                <a href="mailto:yuvaarun09964@gmail.com"><img src={email} alt="email-icon"/></a>
              </nav>
              <nav className="phones" id="call">
              <a href="tel:+918248995716" class="phoneno"><PhoneOutlined/></a>
              </nav>
            </main>
            <main className="main-page-name">
              <h2>Hi,I'm <span className="color-name">YUVARAJ.</span><br/> Web Developer</h2>
            </main>
            <main className="main-page1">
              <nav className="yuvi-profile">
                <img src={profile} className="pro" alt="yuvi-profile"/>
              </nav>
            <a href={resume} className="resume" target="_blank">Resume</a>
       </main>
    </main>
  )
}

export default Main