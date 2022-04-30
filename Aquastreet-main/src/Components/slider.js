import React from 'react'
import { Link } from 'react-router-dom';
import './slider.css';


function Slider() {
    return (
        <div className="slider">
            <div className="img-container">
                <img src="/intro1.png" className="image"></img>
                <img  src="/intro2.png" className="image"></img>
                <img  src="/intro3.png" className="image"></img>
            </div>
            <Link to="/map">
                <button className="start">
                    Get Started
                </button>
            </Link>
          
        </div>
    )
}


export default Slider;