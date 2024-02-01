import { useState } from "react";
import "./Skills.css";
import Rating from "./Rating";
import { StarFilled } from "@ant-design/icons";
function Skills() {
  const [stars,setstar]=useState([
    {
      id:1,
    },
    {
      id:2,
    },
    {
      id:3,
    }
  ]);
  return (
    <div id="Skills">
    <div classname="skills-sets">
      <center>
        <h1 className="skill">Skills</h1>
        <div className="skills">
          <div className="skill-name">
            <span className="HTML skill-set">HTML</span>
            {stars.map(skill=><Rating/>)}
            <Rating/>
            <Rating/>
          </div>
          <br/>
          <div className="skill-name">
            <span className="CSS skill-set">CSS</span>
            {stars.map(skill=><Rating/>)}
            <Rating/>
            <StarFilled style={{marginLeft:"10rem"}}/>
          </div>
          <br/>
          <div className="skill-name">
            <span className="Java skill-set">Java</span>
            {stars.map(skill=><Rating/>)}
            <StarFilled style={{marginLeft:"10rem"}}/>
            <StarFilled style={{marginLeft:"0rem"}}/>
          </div>
          <br/>
          <div className="skill-name js">
            <span className="JS skill-set">Javascript</span>
            {stars.map(skill=><Rating/>)}
            <Rating/>
            <StarFilled style={{marginLeft:"10rem"}}/>
          </div>
          <br/>
          <div className="skill-name react">
            <span className="ReactJS skill-set">ReactJS</span>
            {stars.map(skill=><Rating/>)}
            <Rating/>
            <StarFilled style={{marginLeft:"10rem"}}/>
          </div>
          <br/>
          <div className="skill-name django">
            <span className="Django skill-set">Django</span>
            <StarFilled style={{color:"yellow",marginLeft:"11rem"}}/>
            <StarFilled style={{color:"yellow"}}/>
            <StarFilled/>
            <StarFilled/>
            <StarFilled/>
          </div>
          <br/>
          <div className="skill-name vercel">
            <span className="vercel skill-set">Vercel</span>
            {stars.map(skill=><Rating/>)}
            <StarFilled style={{marginLeft:"10rem"}}/>
            <StarFilled style={{marginLeft:"0rem"}}/>
          </div>
          <br/>
          <div className="skill-name vercel git">
            <span className="vercel git skill-set">GitHub</span>
            {stars.map(skill=><Rating/>)}
            <StarFilled style={{marginLeft:"10rem"}}/>
            <StarFilled style={{marginLeft:"0rem"}}/>
          </div>
          <br/>
          <div className="skill-name c">
            <span className="C skill-set">C</span>
            {stars.map(skill=><Rating/>)}
            <StarFilled style={{marginLeft:"10rem"}}/>
            <StarFilled style={{marginLeft:"0rem"}}/>
          </div>
          <br/>
          <div className="skill-name cplus">
            <span className="Cplus skill-set">C++</span>
            {stars.map(skill=><Rating/>)}
            <StarFilled style={{marginLeft:"10rem"}}/>
            <StarFilled style={{marginLeft:"0rem"}}/>
          </div>
          <br/>
          <div className="skill-name django figma">
            <span className="Django Figma skill-set">Figma</span>
            <StarFilled style={{color:"yellow",marginLeft:"11rem"}}/>
            <StarFilled style={{color:"yellow"}}/>
            <StarFilled/>
            <StarFilled/>
            <StarFilled/>
          </div>
          <br/>
            <div className="skill-name django figma antdesign">
            <span className="Django Figma Antdesign skill-set">AntDesign</span>
            <StarFilled style={{color:"yellow",marginLeft:"7.6rem"}}/>
            <StarFilled style={{color:"yellow"}}/>
            <StarFilled/>
            <StarFilled/>
            <StarFilled/>
          </div>
          <br/>
          <div className="skill-name python">
            <span className="Java Python skill-set">Python</span>
            {stars.map(skill=><Rating/>)}
            <StarFilled style={{marginLeft:"10rem"}}/>
            <StarFilled style={{marginLeft:"0rem"}}/>
          </div>
        </div>
      </center>
      </div>
    </div>
  )
}

export default Skills