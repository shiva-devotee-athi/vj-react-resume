import React from "react"
import "../src/Quote.css"
function Quote() {
  return (
    <div id="call-to-action">
          <p className='empty1'>
            <span className='txt'>Quote</span> 
          </p>
          <div className = "moving-text" >
          <button className='btn' > <b> Appreciate</b> the moment</button> 
          <button className='btn' >Everything <b> Happens </b> for a <b> Reason</b></button> 
          <button className='btn' >  <b>  Escape </b> the ordinary. </button> 
          </div>
          <p></p>
    </div>
  )
}

export default Quote