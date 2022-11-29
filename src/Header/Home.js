import React from 'react'
import "../Header/home.css"
import About from '../About'

function Home(){
  return (
    <div className='home-condainer'>
      {/* <img className='home-Img' src={img1} alt="" /> */}
      <h1 > I'm <span className='name'>VIJAY...</span> </h1>
      <p><span className='interface'> I'm a Front-End Developer and PhotoShop Designer creating awesome and effective visual identities <br/> for companies of all sizes around the globe. Let's start scrolling and learn more about me.</span></p>
      <ul className='list-social-media'>
        <li> <a href="https://www.facebook.com/athi.vignesh.58/"> <i className="fa fa-facebook" aria-hidden="true"></i> </a> </li>
        <li> <a href="https://www.instagram.com/shiva_devotee_athi"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        <li> <a href="https://github.com/shiva-devotee-athi"><i className="fa fa-github" aria-hidden="true"></i></a></li>
        <li> <a href="https://wa.me/8870762077"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
      </ul>
      <div>
        <a href="#about"> <i className="fa fa-angle-double-down" aria-hidden="true"></i></a> 
      </div>

    </div>
  )
}

export default Home