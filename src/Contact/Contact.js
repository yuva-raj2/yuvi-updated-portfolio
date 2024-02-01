import React from "react"
import github from "../Assets/github-mark-white.png"
import linkedin from "../Assets/icons8-linkedin-48.png"
import email from "../Assets/icons8-email-48.png"
import Copyright from "../Copyright/Copyright";
import "./Contact.css";
function Contact() {
  return (
    <div className="Contact" id="Contact">
        <main className="Contactus">
        <span>Contact</span>
    <footer className="contact-link">
      <nav className="github-img1" id="logo-img">
        <a href="https://github.com/yuva-raj2" rel="noreferrer" target="_blank"><img src={github} alt="github-img" /></a>
      </nav>
      <nav className="linkedin-img" id="logo-img">
        <a href="https://www.linkedin.com/in/yuvaraj-r-497908214/" ><img src={linkedin} alt="linkedin-img" target="_blank"/></a>
      </nav>
      <nav className="email-img1" id="logo-img">
        <a href="mailto:yuvaarun09964@gmail.com"><img src={email} alt="email-img" target="_blank"/></a>
      </nav>
    </footer>
    <p>Powered by Pure HTML,CSS,Javascript,ReactJs</p>
    <Copyright/>
    </main>
    </div>
  )
}

export default Contact