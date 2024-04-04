const useTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds
    const title = `${formattedMinutes}:${formattedSeconds}`
    return [formattedMinutes, formattedSeconds, title]
}

export default useTime