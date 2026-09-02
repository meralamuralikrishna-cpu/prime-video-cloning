import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
    return (
        <button className="flex cursor-pointer items-center justify-center rounded-full p-1.5 text-slate-300 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95" aria-label="Profile">
            <FaUserCircle size={26} />
        </button>
    )
}

export default Profile
