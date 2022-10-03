import React, {useState} from 'react';

type PropsType = {
    // on: boolean
    // togle?: () => void
    onChange: (value: boolean) => void
}


const UncontrolledOnOff = (props: PropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
        cursor: 'pointer'

    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
        cursor: 'pointer'


    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'


    }

    const ClikedOn = () => {
        props.onChange(on)
        setOn(true)
    }
    const ClikedOff = () => {
        props.onChange(on)
        setOn(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={ClikedOn}>On
            </div>
            <div style={offStyle} onClick={ClikedOff}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;