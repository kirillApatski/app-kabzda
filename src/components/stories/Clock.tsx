import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'


export const Clock = () => {
    const [rotate, setRotate] = useState({
        hours: '00',
        minutes: '00',
        seconds: '00'
    })
    useEffect(() => {
        let intervalId = setInterval(() => {
            let date = new Date()
            let hours = date.getHours() * 30
            let minutes = date.getMinutes() * 6
            let seconds = date.getSeconds() * 6
            setRotate({hours: `rotateZ(${(hours) + (minutes/12)}deg)`, minutes: `rotateZ(${minutes}deg)`, seconds: `rotateZ(${seconds}deg)`})
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])
    return (
        <div className={s.clockWrapp}>
            <div className={s.clock}>
                <div className={s.hour}>
                    <div className={s.hr} style={{transform: rotate.hours}}></div>
                </div>
                <div className={s.min}>
                    <div className={s.mn} style={{transform: rotate.minutes}}></div>
                </div>
                <div className={s.sec}>
                    <div className={s.sc} style={{transform: rotate.seconds}}></div>
                </div>
            </div>
        </div>
    );
};

