import React, {useReducer} from "react";
import {AccardionPropsType, reducer} from "./reducer";


function UncontrolledAccordion(props: AccardionPropsType) {
    // const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: true})

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: 'TOGGLE-COLLAPSED'})
            }
            }/>
            {!state.collapsed && <AccordionBody body={props.titleValue}/>}
        </div>

    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

type AccordionBodyType = {
    body: string
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            <li>{props.body} 1</li>
            <li>{props.body} 2</li>
            <li>{props.body} 3</li>
        </ul>
    )
}

export default UncontrolledAccordion;