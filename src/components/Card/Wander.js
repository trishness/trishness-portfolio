import React from "react";
import { Link } from "react-router-dom"

function Wander() {
    return (
        <div className="card">
      <div className="img-container">
        <img
          alt="Wander"
          src=""
        />
      </div>
      <div className="content">
      <h4><strong>WANDER</strong></h4>
          <p>
            A project that helps a PNW user find a randomized hike for a new outdoor adventure, complete with hike information and pertinent weather conditions.
          </p>
          <Link to="#" class="btn btn-primary">WANDER</Link>
          <Link to="#" class="btn btn-primary"><img alt="Github" src=""/></Link>
      </div>
    </div>
    )
}

export default Wander;