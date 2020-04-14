import React from 'react'
import { projects } from './data.js'




function Projects(props) {
    return (
        props.list.map((project, i) => {
            return (
                <div className="flexrow proj" key={i}>
                    <SingleProj project={project} index={i} />
                </div>
            )
        })
    )
}



function SingleProj(props) {
    var temp = []
    var color
    if (props.index % 3 == 0) {
        color = "pinkt"
    }
    else if (props.index % 3 == 1) {
        color = "yellowt"
    }
    else {
        color = "greent"
    }


    if (props.index % 2 == 0) {
        temp.push(<div className={"tech " + color}>{props.project.stack.join(" | ")}</div>)
        temp.push(<div className="rightd flexcol" >
            <Description project={props.project} />
        </div>)
    }
    else {
        temp.push(<div className="leftd flexcol" >
            <Description project={props.project} />
        </div>)
        temp.push(<div className={"tech " + color}>{props.project.stack.join(" | ")}</div>)

    }
    return temp
}




function Description(props) {
    var temp = []
    temp.push(<div className="title">{props.project.name}</div>)
    temp.push(<div className="desc">{props.project.description.map((desc, i) => {
        return (<div key={i}>{desc}</div>)
    })}</div>)
    temp.push(<div className="link"><a href={props.project.link}>{props.project.link} </a></div>)

    return (
        temp
    )

}

function _projects() {
    return (<div className="flexcol projectslist">
        {
            <Projects list={projects} />
        }
    </div>)
}

export default _projects