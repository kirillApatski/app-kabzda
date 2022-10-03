import React, {useState} from "react";


type RatingPropsType = {
    // value : 0 | 1 | 2 | 3 | 4 | 5
}

export type valueType = 0 | 1 | 2 | 3 | 4 | 5

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering')
    const [value, setValue] = useState(0)

    return (
        <div>
            <UnStar selected={value > 0} setValue={()=>{setValue(1)}}/>
            <UnStar selected={value > 1} setValue={()=>{setValue(2)}}/>
            <UnStar selected={value > 2} setValue={()=>{setValue(3)}}/>
            <UnStar selected={value > 3} setValue={()=>{setValue(4)}}/>
            <UnStar selected={value > 4} setValue={()=>{setValue(5)}}/>
        </div>)

}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function UnStar(props: StarPropsType) {
    const onClickSelected = () => {
        props.setValue()
    }
    return <span onClick={onClickSelected}>{props.selected ? <b>star </b> : 'star '}</span>
}