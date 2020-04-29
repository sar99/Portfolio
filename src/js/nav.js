import React, { useState } from 'react'
import { list } from './data.js'



function _navbar() {
    return (
        < div className="navi" id="navi" >
            <div className="navi-bg" style={{ opacity: "83%" }}></div>
            <div className="navi-bg blur" style={{ opacity: "83%" }}></div>
            <div className="content flexrow" style={{ opacity: "83%" }}>

                {list.map((x, i) => {
                    return (<div key={i} className="navitem"><a href={"#NAV" + x}>{x}</a></div>)
                })}

            </div>

        </div >
    )
}

export function _ham() {
    const [state, changeState] = useState(0);
    var c = state == 0 ? " " : " open";
    var n = state == 0 ? " no" : " nav";
    var s = state == 0 ? " blue" : " black";



    return (
        <div>
            <div className={`phone-nav flexcol ${n}`} id="phone-nav">
                {list.map((x, i) => {
                    return (<div key={i} className="hamitem" onClick={() => { changeState(0) }}><a href={"#NAV" + x}>{x}</a></div>)
                })}
            </div>

            <div id="nav-icon3" className={c} onClick={() => {
                let temp = state;
                changeState(1 - temp);
            }
            }>
                <span className={s}></span>
                <span className={s}></span>
                <span className={s}></span>
                <span className={s}></span>

            </div>
        </div>
    );
}

export default _navbar
