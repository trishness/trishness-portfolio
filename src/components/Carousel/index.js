import React from "react";
// import { Link } from "react-router-dom"
import style from "./style.css"

function Carousel() {
    return (
    <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="./trish.jpg" className="d-block w-100" alt="Oops"/>
            </div>
            <div className="carousel-item">
                <img src="./trish1.jpg" className="d-block w-100" alt="Oops"/>
            </div>
            <div className="carousel-item">
                <img src="./trish3.jpg" className="d-block w-100" alt="Oops"/>
            </div>
        </div>
    </div>
    )
}

export default Carousel;