import React from 'react'
import "./Skill.css"
function Skills() {
  return (
    <div  id="skill-container">
        <span className='txt-1'>Skills</span>
        <div  className="nine columns main-col">

          <p>
          It’s not just the accounting world that requires workers to figure percentages, calculate margins and create accurate data charts. A marketing professional and a copy editor, for instance, will likely work with survey results from time to time. For roles that need a more extensive mathematics background, see the business systems consultant role listed in our blog post on financial consulting jobs.
          </p>
        </div>

        <div className="container">
            <div className="skills">
                <div className="details">
                    <span>HTML</span>
                    <span>90%</span>
                </div>
                <div className="bar">
                    <div id="html-bar"></div>
                </div>
            </div>
            <div className="skills">
                <div className="details">
                    <span>CSS</span>
                    <span>75%</span>
                </div>
                <div className="bar">
                    <div id="css-bar"></div>
                </div>
            </div>
            <div className="skills">
                <div className="details">
                    <span>Javascript</span>
                    <span>72%</span>
                </div>
                <div className="bar">
                    <div id="js-bar"></div>
                </div>
            </div>
            <div className="skills">
                <div className="details">
                    <span>React</span>
                    <span>70%</span>
                </div>
                <div className="bar">
                    <div id="React-bar"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills