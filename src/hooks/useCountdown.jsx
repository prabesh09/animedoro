import { useState, useEffect } from 'react'

const useCountdown = (initialTime) => {
    const [time, setTime] = useState(initialTime)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        let intervalId

        if (isActive && time > 0) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime - 1)
            }, 1000)

        } else {
            clearInterval(intervalId)
        }

        return () => clearInterval(intervalId)
    }, [isActive, time])


    const start = () => {
        setIsActive(true)
    }

    const stop = () => {
        setIsActive(false)
    }

    const reset = () => {
        setTime(initialTime)
        setIsActive(false)
    }

    return {
        time,
        start,
        stop,
        reset,
        setTime,
        setIsActive
    }
}

export default useCountdown