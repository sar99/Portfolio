import React, { useState } from 'react'
import { projects } from './data.js'

const color = (index) => {
    if (index % 3 == 0) {
        return "pinkt"
    }
    else if (index % 3 == 1) {
        return "yellowt"
    }
    else {
        return "greent"
    }
}

function SingleProj(props) {
    const [state, changeState] = useState("png")
    return (
        <div className="flexcol proj" key={props.index} onMouseOver={() => { changeState("gif"); console.log('a') }} onMouseLeave={() => changeState("png")}>
            <div className="proj-photo"><img src={`./img/${props.project.image}.${state}`} /></div>

            <div className="title">{props.project.name}</div>
            <div className={"tech " + color(props.index)}>{props.project.stack.join(" | ")}</div>
            <div className="desc">{props.project.description.map((desc, i) => {
                return (<div key={i}>{desc}</div>)
            })}</div>
            <div className="link"><a href={props.project.link}>Link to the project </a></div>
        </div>
    )
}
function Projects(props) {




    return (
        props.list.map((project, i) =>
            <SingleProj project={project} index={i} />
        )
    )
}


{/* function SingleProj(props) {
    return (

    )
} */}



function _projects() {
    return (<div className="flexrow projectslist">
        {
            <Projects list={projects} />
        }
    </div>)
}

export default _projects