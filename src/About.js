import React from 'react'
import "../src/About.css"
import avatar from "../src/Img/out.jpg"

function About() {
  return (
    <div  id="about">
        <div className="rowThere">

        <div  className="three columns">

      <img  className="profile-pic"  src={avatar} alt="" />

    </div>

    <div  className="nine columns main-col">

      <h2>About Me</h2>

      <p>I am a versatile web designer due to his extensive history in graphic and web design. I am continuously learning about new web design trends and concepts has made him a valuable member of the team.I am a Beginer and a master's in web design, my expertise can help customers modernize with websites and appeal to expanding customer populations. I give my best to my clients. Punctual is my first priority. if i get any task from clients, i will  complete in the certain time period. it's my Stength in my career.
      i am critical thinker and also a best analyzer. first i create the problem then i find the solution of the problem. it was helped in many places to me. if you want to learn the life, Go with the Flow and enjoy the small kind of things too.
      </p>

      <div  className="rowThere">

          <div  className="columns contact-details">

            <h2>Contact Details</h2>
            <p  className="address">
          <span>Vijayathiraj</span><br/>
          <span>10A/39 Perumalpatti<br/>
                1st West Street, Srivilliputtur-(India)
                </span><br/>
          <span>626-125</span><br/>
                <span>vijayathiraj99@gmail.com</span>
        </p>

          </div>

          <div  className="columns download">
            <p>
              <span className='resume'>Resume:</span>
              <a href="https://drive.google.com/u/0/uc?id=1fgoBr4ov6OPk_yc9OWd5GdIv2A8yJaav&export=download" className="button" > <i  className="fa fa-download"> </i></a>
            </p>
          </div>

      </div>

    </div> 

    </div>
    </div>
  )
}

export default About