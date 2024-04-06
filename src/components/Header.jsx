import { IoSettings } from "react-icons/io5"
import { SiGithub } from "react-icons/si"

const Header = ({ displaySetting }) => {
    return (
        <div className="text-[#f0f0f0] flex justify-between w-full gap-2 items-center font-semibold text-[1.5em] px-10">
            <h1>
                <span>anime</span>
                <span className="text-red-500">doro</span>
            </h1>

            <div className="flex gap-[1em]">
                <a href="https://github.com/prabesh09/animedoro">
                    <SiGithub />
                </a>

                <button onClick={displaySetting}>
                    <IoSettings />
                </button>
            </div>

        </div>
    )
}

export default Header