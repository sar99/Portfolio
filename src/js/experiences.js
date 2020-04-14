import React from 'react'
import { experience } from './data.js'

function Experience(props) {
    return (
        props.list.map((exp, i) => {
            return (
                <div className="flexcol job" key={i}>
                    <Job job={exp} />
                </div>
            )
        }
        )
    )
}

function Job(props) {
    var temp = []
    temp.push(<div className="logo"><img src={props.job.logo} /></div>)
    temp.push(<div className="comp">{props.job.company}</div>)
    temp.push(<div className="desg">{props.job.desig}</div>)
    temp.push(<div className="time">{props.job.time}</div>)
    temp.push(<div className="loc">{props.job.location}</div>)
    return temp;
}


function _experiences() {
    return (
        <div className="flexrow experiences">
            <Experience list={experience} />
        </div>
    )
}

export default _experiences