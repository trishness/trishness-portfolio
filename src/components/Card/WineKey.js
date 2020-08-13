import React from "react";
import { Link } from "react-router-dom"
import style from "./style.css"

function WineKey() {
    return (
        <div className="card">
      <div className="img-container">
        <img
          alt="Wander"
          src=""
        />
      </div>
      <div className="content">
        <h4><strong>Wine Key</strong></h4>
          <p>
              Built for Fire&Vine Hospitality, a site designed for managers to input wine inventory for specific locations in order to easily manage and trade stock within the company.
          </p>
          <Link to="#" class="btn btn-primary">Wine Key</Link>
          <Link to="#" class="btn btn-primary"><img alt="Github" src=""/></Link>
      </div>
    </div>
    )
}

export default WineKey;