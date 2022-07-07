import React, {useState} from "react";


export function Rating() {
    const [value, setValue] = useState(0);
    const onClickHandler = (id: number) => {
        setValue(id)
    }
    return (
        <div>
            <div style={{display: "inline-block", cursor: "pointer"}}  onClick={() => onClickHandler(1)}><Star selected={value > 0}/></div>
            <div style={{display: "inline-block", cursor: "pointer"}}  onClick={() => onClickHandler(2)}><Star selected={value > 1}/></div>
            <div style={{display: "inline-block", cursor: "pointer"}}  onClick={() => onClickHandler(3)}><Star selected={value > 2}/></div>
            <div style={{display: "inline-block", cursor: "pointer"}}  onClick={() => onClickHandler(4)}><Star selected={value > 3}/></div>
            <div style={{display: "inline-block", cursor: "pointer"}}  onClick={() => onClickHandler(5)}><Star selected={value > 4}/></div>
        </div>
    )
}

type  StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return  props.selected ? <span><b>Star</b></span> : <span>Star</span>
}