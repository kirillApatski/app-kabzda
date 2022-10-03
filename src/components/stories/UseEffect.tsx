import {useEffect, useState} from "react";
import s from "./UseEffect.module.css"
// export const SimpleExample = () => {
//     const [fake, setFake] = useState(1)
//     const [count, setCount] = useState(1)
//
//     console.log('SimpleExample')
//
//     useEffect(() => {
//         console.log('useEffect every render')
//         document.title = count.toString()
//     })
//     useEffect(() => {
//         console.log('useEffect only first render (componentDidMount)')
//         document.title = count.toString()
//     }, [])
//     useEffect(() => {
//         console.log('useEffect first render and every count change')
//         document.title = count.toString()
//     } , [count])
//
//     return(
//         <div>
//             Hello, {count}
//             Fake, {fake}
//             <button onClick={() => setCount(count + 1)}>+</button>
//             <button onClick={() => setFake(fake + 1)}>+</button>
//         </div>
//     )
// }

export const SetTimeoutExample = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [date, setDate] = useState(new Date().toLocaleDateString())
    useEffect(() => {
        let interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
            setDate(new Date().toLocaleDateString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className={s.clock}>
            <p className={s.date}>{date}</p>
            <p className={s.time}>{time}</p>
            <p className={s.text}>DIGITAL CLOCK with React.js</p>
        </div>
    );
}