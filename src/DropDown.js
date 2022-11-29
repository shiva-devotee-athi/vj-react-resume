import React from "react";
import { useState } from "react";
import "./DropDown.css"
import Edu from "./Edu";



const DropDown = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className="dropdown">
        <div className="educational-details" >
          <p className="educate" >Educational Details &#127891; </p>
          <i onClick={handleOpen}  className="fa fa-bars" aria-hidden="true"></i>
        </div>
        {open ? (
          <div> <Edu/> </div>
        ) : null}
        {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
      </div>
    );
  };
  
  export default DropDown;