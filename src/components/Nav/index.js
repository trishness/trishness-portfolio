import React from "react";
import {Link} from "react-router-dom"
import style from "./style.css"
import resume from "./resume.pdf"

function Nav() {
    return (
        <>
            <nav class="nav navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand"><strong>Trish Ness</strong></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/trishness" target="_blank">GitHub</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.linkedin.com/in/trish-ness-39593544" target="_blank">LinkedIn</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={resume} target="_blank">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav;