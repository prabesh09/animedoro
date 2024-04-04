import { useState, useEffect } from 'react'
import useCountdown from '../hooks/useCountdown'
import useTime from '../hooks/useTime'

const Time = ({ changeBackground }) => {
    const { time, start, stop, reset, setTime, setIsActive } = useCountdown(1800)
    const [isStudying, setIsStudying] = useState(true)

    const [formattedMinutes, formattedSeconds, title] = useTime(time)

    useEffect(() => {
        document.title = (isStudying ? "Study" : "Anime") + ' | ' + title
    })

    return (
        <div className='flex flex-col gap-10'>
            <div className="flex justify-center gap-10">
                <button className="bg-red-500 px-5 py-3 rounded-xl" onClick={() => {
                    setIsStudying(true)
                    setTime(1800)
                    setIsActive(false)
                    changeBackground('study')
                }}>Study</button>
                <button className="bg-red-500 px-5 py-3 rounded-xl" onClick={() => {
                    setIsStudying(false)
                    setTime(1800)
                    setIsActive(false)
                    changeBackground('anime')
                }}>Anime</button>
            </div>

            <span className="countdown text-[5em]">
                <span style={{ "--value": formattedMinutes }}></span>:
                <span style={{ "--value": formattedSeconds }}></span>
            </span>

            <div className="flex justify-center gap-5">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Time