import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {

    return (
        <div className="App">
            <PageTitle title={"this is app component"}/>
            <PageTitle title={"Hello component"}/>
            Article 1
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <UncontrolledAccordion titleValue={"Menu1"}/>
            <UncontrolledAccordion titleValue={"Menu3"}/>
            Article 2
            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>

            <OnOff/>
            <OnOff/>
            <OnOff/>
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <div>{props.title}</div>
}

export default App;
