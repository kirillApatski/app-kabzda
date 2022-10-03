import React, {ChangeEvent, useState} from 'react';

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange} type="text"/>
}

export const ControlledCheckbox = () => {
    const [checked, setChecked] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
        console.log(e.currentTarget.checked)
    }


    return <input type="checkbox" checked={checked} onChange={onChange}/>

}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>

    </select>
};