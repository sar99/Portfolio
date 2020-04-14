import React from 'react'
import { skills } from './data.js'



function Skillsbar(props) {
    return (
        props.list.map((skill, i) => {
            var cn = skill.name + " flexcol"
            return (
                <div className={cn} key={i}>
                    <Skillcol skill={skill} index={i} />
                </div>
            )
        }
        ))
}

function Skillcol(props) {

    let temp = [];
    let color
    if (props.index % 3 == 0)
        color = "pink skillbox"
    else if (props.index % 3 == 1)
        color = "green skillbox"
    else
        color = "yellow skillbox"
    for (let i = 0; i < props.skill.score; i++) {
        temp.push(<div key={i} className={color}></div>)

    }

    temp.push(<div className="border" key="-1"></div>)
    temp.push(<div key="-2" className="skillname">{props.skill.name}</div>)

    return (temp)
}

function _skills() {
    return (
        <div className="skills flexrow">
            {

                <Skillsbar list={skills} />

            }
        </div>
    )
}

export default _skills