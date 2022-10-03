import React from "react";


type itemsType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClickTitle: () => void
    items: itemsType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClickTitle={props.onClickTitle}/>
            {/*<button onClick={()=> {props.onClick()}}>TOGLE</button>*/}
            {props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>

    )
}

type AccordionTitlePropsType = {
    title: string
    onClickTitle: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClickTitle}>{props.title}</h3>
    )
}

type AccordionBodyType = {
    items: itemsType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {
                props.items.map((el, index) => <li key={index} onClick={() => {
                    props.onClick(el.value)
                }} >{el.title}</li>)
            }

        </ul>
    )
}