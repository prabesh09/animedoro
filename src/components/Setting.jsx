import { GiTireIronCross } from "react-icons/gi";

const Setting = ({ closeMenuHandler, anime, setAnime, study, setStudy }) => {

    const handleAnimeChange = (event) => {
        setAnime(event.target.value * 60)
    };

    const handleStudyChange = (event) => {
        setStudy(event.target.value * 60)
    }

    return (
        <div className="bg-black fixed inset-0 bg-opacity-50 backdrop-blur-sm flex flex-col justify-center gap-10 items-center">
            <button className="absolute top-10 right-10 text-5xl font-bold" onClick={closeMenuHandler}>
                <GiTireIronCross />
            </button>

            <h1 className="text-5xl font-bold">Settings</h1>

            <div className="w-3/4 flex justify-between items-center md:w-1/3">
                <span>Anime</span>
                <input className="text-[#333] border-none outline-none p-2" type="number" onChange={handleAnimeChange} value={anime / 60} />
            </div>


            <div className="w-3/4 flex justify-between items-center md:w-1/3">
                <span>Study</span>
                <input className="text-[#333] border-none outline-none p-2" type="text" onChange={handleStudyChange} value={study / 60} />
            </div>
        </div>
    )
}

export default Setting