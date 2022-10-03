import React from "react";


type RatingPropsType = {
    value : valueType
    onClick: (value:valueType) => void
}

export type valueType = 0 | 1 | 2 | 3 | 4 | 5

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>

        </div>)

}

type PropsStarType = {
    selected: boolean
    onClick: (value:valueType) => void
    value: valueType
}

function Star(props: PropsStarType) {
    const onClickSelected = () => {
        props.onClick(props.value)
    }
    return <span onClick={onClickSelected}>{props.selected ? <b>star </b> : 'star '}</span>
}