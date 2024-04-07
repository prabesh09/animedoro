import { useState } from "react"
import Quotes from "./Quotes"
import Header from "./Header"
import Time from "./Time"
import Setting from "./Setting"
import useLocalStorage from "../hooks/useLocalStorage"

const Content = () => {
    const [studyBackground, setStudyBackground] = useState(true)
    const [showSetting, setShowSetting] = useState(false)
    const [anime, setAnime] = useLocalStorage('anime', 1200)
    const [study, setStudy] = useLocalStorage('study', 2400)

    const changeBackground = (state) => {
        setStudyBackground(state == 'study' ? true : false)
    }

    const displaySetting = () => {
        setShowSetting(true)
    }

    const closeMenuHandler = () => {
        setShowSetting(false)
    }

    return (
        <div className={`bg-[#000] text-[#f0f0f0] bg-opacity-60 text-3xl text-center p-5 h-[100vh] font-poppins pt-[2em] flex flex-col items-center justify-between`}>
            {studyBackground && <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3dtcmk3NmQ3MmJ0Ymw4YjY2bmh3eGllaGt5bDA0OXdreGV6cWR2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6XX4V0O8a0xdS/giphy.gif" alt="Studying GIF" className="absolute inset-0 w-full h-full object-cover opacity-50 -z-50 overflow-none" />}

            {!studyBackground && <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHJlZmRxMTY4MmMzYWFuZXc1d215Z204Y2gydnJ4eGdpejY5YjAzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EAOTD2L0qyvhm/giphy.gif" alt="Anime GIF" className="absolute inset-0 w-full h-full object-cover opacity-50 -z-50" />}

            <Header displaySetting={displaySetting} />
            <Time changeBackground={changeBackground} anime={anime} study={study} />
            <Quotes />

            {showSetting && <Setting closeMenuHandler={closeMenuHandler} anime={anime} study={study} setAnime={setAnime} setStudy={setStudy} />}

        </div >
    )
}

export default Content