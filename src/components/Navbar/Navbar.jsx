import Home from "./Leftcomponents/Home";
import Free from "./Leftcomponents/Free";
import Movies from "./Leftcomponents/Movies";
import Tvshows from "./Leftcomponents/Tvshows";
import Livetv from "./Leftcomponents/Livetv";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>{<Home />}</li>
                <li>{<Free />}</li>
                <li>{<Movies />}</li>
                <li>{<Tvshows />}</li>
                <li>{<Livetv />}</li>
            </ul>
        </div>
    )
}

export default Navbar