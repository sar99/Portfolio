import React from 'react'
import ReactDOM from 'react-dom'

const list = ["ABOUT", "EDUCATION", "SKILLS", "PROJECTS", "EXPERIENCE", "CHERRY ON TOP", "COMING SOON"]

function _aboutSection() {
    return (
        <div className="about flexrow">
            <div className="photoframe">
                <img id="photo" src="./img/saniya.png" />
            </div>
            <div className="intro flexcol">
                <div>Hello!</div>
                <div>
                    <img id="saniya" src="./img/name.png"></img>
                </div>
                <div>A sophomore Computer Science student at IIIT - Gwalior, who is always keen to learn and explore more about technology and take up any new opportunity or challenge. </div>
                <div>My drive for logical reasoning leads to my interest in Competitive Programming. With some experience in Full Stack Web Development, I am always exploring new fields.</div>
            </div>
        </div>
    )
}
export function _links() {
    return (
        <div className="flexrow links">
            <div id="github"><a href="https://github.com/sar99"><img src="./img/github.png"></img></a></div>
            <div id="resume"><a href="https://drive.google.com/file/d/1vyqwMV6PV4JLOb0QD-hb5lG0iwBYuxLC/view?usp=sharing">RESUME</a></div>
            <div id="github"><a href="https://www.linkedin.com/in/saniya-arora-408726181/"><img src="./img/linkedin.png"></img></a></div>
        </div>

    )
}




export default _aboutSection
