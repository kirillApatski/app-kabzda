import React, {useState} from "react";
import s from "./OnOff.module.css"



export const OnOff = () => {
    const [on, setOn] = useState(false);

    const onStyle = {
        cursor: "pointer",
        border: "solid 1px black",
        width: "50px",
        height: "50px",
        backgroundColor: on ?  "green" : "white"
    }
    const offStyle = {
        cursor: "pointer",
        border: "solid 1px black",
        width: "50px",
        height: "50px",
        backgroundColor: on ?  "white" : "red"
    }
    const indicatorStyle = {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: on ?  "green" : "red"

    }
    return (
        <div className={s.wrapp}>
            <div style={onStyle} onClick={() => setOn(true)}>on</div>
            <div style={offStyle} onClick={() => setOn(false)}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}