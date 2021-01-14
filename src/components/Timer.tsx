
import * as React from 'react'
import { useState, useEffect, useRef } from 'react'


function Timer() {
    const [count, setCount] = useState<number>(0)
    const [isPlay, setIsPlay] = useState<boolean>(false)
    const [isPaused, setIsPaused] = useState<boolean>(false)
    const intervalRef = useRef(0)

    const [timerTime, setTimerTime] = useState<Date>(new Date())
    const [timerOffset, setTimerOffset] = useState<number>(0)



    // intervalRef.current = ttimer.t;
    useEffect(() => {
        console.log(isPaused);
        if (isPaused) {
            //ttimer.offset += Date.now() - ttimer.time.getTime();
            setTimerOffset(prevTimerOffset => prevTimerOffset + Date.now() - timerTime.getTime())
            clearInterval(intervalRef.current)
        } else {
            setTimerTime(new Date())

        }
    }, [isPaused])
    useEffect(() => {
        if (isPlay) {
            intervalRef.current = window.setInterval(() => {
                console.log('running timer')
                if (!isPaused) {
                    let sec = Math.trunc((timerOffset + Date.now() - timerTime.getTime()) / 1000)
                    setCount(sec)
                }



            }, 100)
            return () => clearInterval(intervalRef.current)
        }
    })

    useEffect(() => {
        console.log('ISPLAY', isPlay, 'ISPAUSED', isPaused)
    })

    const handleClickPlay = (e: React.FormEvent<HTMLButtonElement>): void => {
        if (isPlay) {
            setIsPaused(prev => !prev);
        } else {
            setTimerTime(new Date());
            setIsPlay(prev => !prev);
        }


    }
    const handleClickReset = (e: React.FormEvent<HTMLButtonElement>): void => {
        setIsPaused(false);
        setIsPlay(false);
        setCount(0);
        setTimerOffset(0);
        clearInterval(intervalRef.current)
    }
    // let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    // let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    // let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    // let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
        <>
            <div className="timer__container">
                <div className="timer__display"> {count}</div>
                <div className="timer__control">

                    <button className="time__start" onClick={handleClickPlay}>{(!isPlay && !isPaused) ? 'Start' : 'Pause'}</button>
                    <button className="time__reset" onClick={handleClickReset}>Reset</button>
                </div>
            </div>
        </>
    )
}
export default Timer