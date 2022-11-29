import React from 'react'
import "../Header/home.css"
import About from '../About'

function Home(){
  return (
    <div className='home-condainer'>
      {/* <img className='home-Img' src={img1} alt="" /> */}
      <h1 > I'm <span className='name'>VIJAY...</span> </h1>
      <p className='main-header-text'>I'm a Front-End Developer and PhotoShop Designer creating awesome and effective visual identities for companies of all sizes around the globe. Let's start scrolling and learn more about me.</p>
      <div className='list-social-media'>
        <div className='li-icon'> <a href="https://www.facebook.com/athi.vignesh.58/"> <i className="fa fa-facebook" aria-hidden="true"></i> </a> </div>
        <div className='li-icon'> <a href="https://www.instagram.com/shiva_devotee_athi"><i className="fa fa-instagram fa-circle  " aria-hidden="true"></i></a></div>
        <div className='li-icon'> <a href="https://github.com/shiva-devotee-athi"><i className="fa fa-github" aria-hidden="true"></i></a></div>
        <div className='li-icon'> <a href="https://wa.me/8870762077"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></div>
      </div>
      <a href="#about"> <i className="fa fa-angle-double-down" aria-hidden="true"></i></a> 

    </div>
  )
}

export default Home