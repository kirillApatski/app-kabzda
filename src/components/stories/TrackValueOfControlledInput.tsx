import React, {ChangeEvent, useRef, useState} from 'react';

export const TrackValueOfControlledInput = () => {
    const [value, setValue] = useState('')
    const onChangeInput = ( e : ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <input type="text" onChange={onChangeInput}/> -- {value}
        </div>
    );
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = ()=> {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <div>
            <input ref={inputRef} type="text"/> <button onClick={save}>save</button> - actual value: {value}
        </div>
    );
};