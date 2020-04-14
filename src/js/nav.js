import React from 'react'
import { list } from './data.js'



function _navbar() {
    return (
        < div className="navi" id="navi" >
            <div className="navi-bg" style={{opacity: "83%"}}></div>
            <div className="navi-bg blur" style={{opacity: "83%"}}></div>
            <div className="content flexrow" style={{opacity: "83%"}}>

                {list.map((x, i) => {
                    return (<div key={i} className="navitem"><a href={"#NAV" + x}>{x}</a></div>)
                })}

            </div>

        </div >
    )
}

export default _navbar
