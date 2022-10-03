import React, {useState} from 'react';

type PropsType = {
    on: boolean
    // togle?: () => void
    setOn: (value:boolean) => void
}


export const OnOff = (props: PropsType) => {



    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white',
        cursor: 'pointer'

    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red',
        cursor: 'pointer'


    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'


    }

    return (
        <div>
            <div style={onStyle} onClick={() => {props.setOn(true)}}>On
            </div>
            <div style={offStyle} onClick={() => {props.setOn(false)}}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

// export default OnOff;