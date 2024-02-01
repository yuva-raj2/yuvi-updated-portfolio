import React from 'react'
import "./HeaderNav.css";
const HeaderNav=()=> {
  return (
    <main className='mp1'>
      <main className='mainpage'>
        <nav className='Nav'>
          <a href='#'><abbr title='Home' style={{textDecoration:"none"}}>Home</abbr></a>
          <a href='#About'><abbr title='About Me' style={{textDecoration:"none"}}>About me</abbr></a>
          <a href="#Skills"><abbr title='Skills' style={{textDecoration:"none"}}>Skills</abbr></a>
          <a href="#Projects"><abbr title="Projects" style={{textDecoration:"none"}}>Projects</abbr></a>
          <a href="#Experience"><abbr title='Experience' style={{textDecoration:"none"}}>Experience</abbr></a>
          <a href="#Experience"><abbr title='Internship' style={{textDecoration:"none"}}>Internship</abbr></a>
          <a href="#Contact"><abbr title="Contact" style={{textDecoration:"none"}}>Contact Me</abbr></a>
        </nav>
      </main>
    <main className='menuNav'>
      <nav className='menu'>
        <nav className='open'>
          <button type='submit'>=</button>
        </nav>
        <nav className='Nav-1'>
          <a href='#'><abbr title='Home' style={{textDecoration:"none"}}>Home</abbr></a>
          <a href='#About'><abbr title='About Me' style={{textDecoration:"none"}}>About me</abbr></a>
          <a href="#Skills"><abbr title='Skills' style={{textDecoration:"none"}}>Skills</abbr></a>
          <a href="#Projects"><abbr title="Projects" style={{textDecoration:"none"}}>Projects</abbr></a>
          <a href="#Experience"><abbr title='Experience' style={{textDecoration:"none"}}>Experience</abbr></a>
          <a href="#Internship"><abbr title='Internship' style={{textDecoration:"none"}}>Internship</abbr></a>
          <a href="#Contact"><abbr title="Contact" style={{textDecoration:"none"}}>Contact Me</abbr></a> 
        </nav>
        <nav className='close-nav'>
          <button type='submit'>X</button>
        </nav>
      </nav>
    </main>
    </main>
  )
}
export default HeaderNav