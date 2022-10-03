import React, {useState} from 'react';
import './App.css';
import {Rating, valueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {
    GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfControlledInput
} from "./components/stories/TrackValueOfControlledInput";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/stories/input";
import Select from "./components/stories/Select";
import {Example1} from "./components/stories/ReactMemo";
import {DifficultCountingExample, HelpsReactMemo} from "./components/stories/UseMemo";
import {OnOff} from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {Example2} from "./components/stories/UseState";
import {SetTimeoutExample} from "./components/stories/UseEffect";
import {Clock} from "./components/stories/Clock";

function App() {
    const [onOff, setOnOff] = useState(false)
    const [ratingValue, setRatingValue] = useState<valueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState(false)
    const [on, setOn] = useState(false)
    const [valueSelect, setValueSelect] = useState('select')

    // const togle = () => {
    //     // setOnOff(!onOff)
    // }
    // const onClickCallBack = (value: any) => {
    //     console.log(value)
    // }


    const onChangeValueSelect = (v: string) => {
        setValueSelect(v)
    }
    const selectItems = [
        {title: 'Dima', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}
    ]

    return (
        <div className="App">
            {/*<DifficultCountingExample/>*/}
            {/*<HelpsReactMemo/>*/}
            {/*<Example1/>*/}
            {/*<Select value={valueSelect} onChange={onChangeValueSelect}*/}
            {/*        items={selectItems}/>*/}
            {/*<Accordion*/}
            {/*    onClickTitle={() => {*/}
            {/*        setAccordionCollapsed(!accordionCollapsed)*/}
            {/*    }}*/}
            {/*    onClick={onClickCallBack}*/}
            {/*    titleValue={'School - TWO'}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    items={[{title: 'Dima', value: 1}, {title: 'Valera', value: 2}, {*/}
            {/*        title: 'Artem',*/}
            {/*        value: 3*/}
            {/*    }, {title: 'Viktor', value: 4}]}/>*/}
            {/*<OnOff on={on} setOn={setOn}/>*/}
            {/*<ControlledSelect/>*/}
            {/*<ControlledCheckbox/>*/}
            {/*<ControlledInput/>*/}
            {/*<TrackValueOfControlledInput/>*/}
            {/*<GetValueOfUncontrolledInputByButtonPress/>*/}
            {/*<OnOff on={on} setOn={setOn}/>*/}
            {/*<UncontrolledOnOff onChange={setOn}/> {on.toString()}*/}
            {/*<Accordion titleValue={'helllo'} collapsed={accordionCollapsed} onClick = {()=>{setAccordionCollapsed(!accordionCollapsed)}}></Accordion>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledAccordion titleValue={'Hello developers'}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledAccordion titleValue={'menu'}/>*/}
            {/*<Accordion titleValue={'Menu'}  collapsed={false}/>*/}
            {/*<OnOff/>*/}
            {/*  <Rating value={1}/>*/}
            {/*  <Rating value={2}/>*/}
            {/*  <Rating value={3}/>*/}
            {/*  <Rating value={4}/>*/}
            {/*  <Rating value={5}/>*/}
            {/*<Example2/>*/}
            {/*<SimpleExample/>*/}
            {/*<SetTimeoutExample/>*/}
            <Clock/>
        </div>
    );
}

export default App;
