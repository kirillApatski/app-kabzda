import React, {useState} from 'react';
import './Select.css'


type itemsType = {
    title: string
    value: any

}

type SelectPropsType = {
    value: any
    onChange: (value: string) => void
    items: itemsType[]
}

const Select = (props: SelectPropsType) => {

    const [accordion, setAccordion] = useState(false)

    const onChangeHandler = (title: string) => {
        props.onChange(title)
        setAccordion(!accordion)
    }
    return (
        <div className='select'>
            <div className='title' onClick={() => {
                setAccordion(!accordion)
            }}>
                {props.value}
            </div>
            {accordion
                && <div className='options'>
                    {props.items.map(el => <div onClick={() => onChangeHandler(el.title)} className='item'>{el.title}
                    </div>)}
            </div>}
        </div>
    );
};

export default Select;