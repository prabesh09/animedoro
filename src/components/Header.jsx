import { IoSettings } from "react-icons/io5"


const Header = ({ displaySetting }) => {
    return (
        <div className="text-[#f0f0f0] flex justify-between w-full gap-2 items-center font-semibold text-[1.5em] px-10">
            <h1>
                <span>anime</span>
                <span className="text-red-500">doro</span>
            </h1>

            <button className="" onClick={displaySetting}>
                <IoSettings />
            </button>

        </div>
    )
}

export default Header