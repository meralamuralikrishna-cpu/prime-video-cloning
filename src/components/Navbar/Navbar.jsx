import Home from "./Leftcomponents/Home";
import Free from "./Leftcomponents/Free";
import Movies from "./Leftcomponents/Movies";
import Tvshows from "./Leftcomponents/Tvshows";
import Livetv from "./Leftcomponents/Livetv";
import Button from "./RightComponents/Button";
import Geners from "./RightComponents/Geners";
import Lanugage from "./RightComponents/Language";
import Profile from "./RightComponents/Profile";
import SearchIcon from "./RightComponents/SearchIcon";
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between gap-6 bg-[#0f171e] px-6 py-3 text-slate-100 shadow-md">
            <div>
                <ul className="flex items-center gap-6 text-sm font-medium md:text-base">
                    <li><Home /></li>
                    <li><Free /></li>
                    <li><Movies /></li>
                    <li><Tvshows /></li>
                    <li><Livetv /></li>
                </ul>
            </div>
            <div>
                <ul className="flex items-center gap-5">
                    <li><SearchIcon /></li>
                    <li><Lanugage /></li>
                    <li><Geners /></li>
                    <li><Profile /></li>
                    <li><Button /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
