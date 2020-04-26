import React from 'react'
import ReactDOM from 'react-dom'
import _navbar, { _ham } from './js/nav.js'
import _aboutSection from './js/about.js'
import { _links } from './js/about.js'
import _skills from './js/skills.js'
import _projects from './js/projects.js'
import './css/index.css'
import _experiences from './js/experiences.js'



const load = () => {
    setTimeout(() => {
        document.getElementById("mainscreen").style.display = "none";
        document.getElementById("root").style.display = "flex";
        setTimeout(() => {
            if (window.innerWidth > 850) {
                document.getElementById("navi").className += " blink-image"
                document.getElementById("navi").style.display = "flex"
            }
            else {
                document.getElementById("nav-icon3").className += " blink-image"
                document.getElementById("nav-icon3").style.display = "flex"
            }

        }, 500)
        setTimeout(() => {
            document.getElementById("photo").style.opacity = 1
            document.getElementById("photo").style.animation = "text-flicker 2s linear 2"

        }, 1000)
        setTimeout(() => {
            document.getElementById("saniya").style.animation = "text-flicker 3s linear 1"
            document.getElementById("saniya").style.opacity = 1
        }, 700)
    }, 3000)
}



const base = (
    <div id="main">
        <div className="flexrow" id="mainscreen">
            <div id="sorry">"I'm really sorry!! It's so dark here!<br />Let me switch on the lights."</div>

        </div>
        {
            load()
        }

        <div id="root">
            <_navbar />
            <_ham />


            <div id="NAVABOUT">
                <_aboutSection />
                <_links />
            </div>


            <div id="breaker">
                <img src="./img/breaker.png" />
            </div>


            <div id="NAVEDUCATION">
                <div className="heading left">EDUCATION</div>
                <div id="education"><img src="./img/education.png" /></div>
            </div>


            <div id="NAVSKILLS">
                <div className="heading right">SKILLS</div>
                <_skills />
            </div>

            <div id="NAVPROJECTS">
                <div className="heading left">PROJECTS</div>
                <_projects />
            </div>


            <div id="NAVEXPERIENCE">
                <div className="heading right">EXPERIENCE</div>
                <_experiences />
            </div>



            <div id="NAVCHERRY ON TOP">
                <div className="heading left">CHERRY ON TOP</div>
                <div className="flexrow cherry">
                    <div className="achieve"><img src="./img/achievements.png" /></div>
                    <div className="achieve"><img src="./img/responsibilities.png" /></div>
                </div>
            </div>



            <div id="NAVCOMING SOON">
                <div className="heading right">COMING SOON</div>
                <div className="flexrow cherry">
                    <div className="achieve"><img src="./img/janitormonkey.png" /></div>
                    <div className="achieve"><img src="./img/MERN.png" /></div>
                </div>
            </div>


            <div id="breaker">
                <img src="./img/breaker.png" />
            </div>

            <div id="end">Designed and Developed by Saniya Arora.<br />Email: saniya.rishi@gmail.com</div>

        </div>
    </div>
)

ReactDOM.render(
    base,
    document.getElementById('rootapp')
);