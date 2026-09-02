import { FaLanguage } from "react-icons/fa6";

const Lanugage = () => {
    return (
        <button className="flex cursor-pointer items-center justify-center rounded-full p-2 text-slate-300 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95" aria-label="Language">
            <FaLanguage size={24} />
        </button>
    )
}

export default Lanugage
