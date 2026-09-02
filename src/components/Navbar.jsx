import Home from "./nav-left/Home";
import Free from "./nav-left/Free";
import Movies from "./nav-left/Movies"
import Tv from "./nav-left/Tv";
import Live from "./nav-left/Live";
import Search from "./nav-right/Search";
import Language from "./nav-right/Language";
import Generes from "./nav-right/Generes";
import Profile from "./nav-right/Profile";

function Navbar(){
    return(
        <nav className="bg-gray-900 py-3 px-8 fixed top-0 left-0 right-0 z-50 border-b border-gray-800 shadow-md">
           <div className="flex items-center justify-between w-full h-16">
              
              {/* Left Section - Logo & Navigation */}
              <div className="flex items-center gap-8">
                {/* Prime Logo */}
                <div className="text-white text-2xl font-bold tracking-wider whitespace-nowrap">
                  PRIME
                </div>
                
                {/* Divider */}
                <div className="h-8 w-px bg-gray-700"></div>
                
                {/* Navigation Links */}
                <div className="flex items-center gap-8">
                  <span className="text-gray-100 text-sm font-medium hover:text-white cursor-pointer transition-all duration-200 hover:scale-105">
                    <Home/>
                  </span>
                  <span className="text-gray-100 text-sm font-medium hover:text-white cursor-pointer transition-all duration-200 hover:scale-105">
                    <Tv/>
                  </span>
                  <span className="text-gray-100 text-sm font-medium hover:text-white cursor-pointer transition-all duration-200 hover:scale-105">
                    <Movies/>
                  </span>
                  <span className="text-gray-100 text-sm font-medium hover:text-white cursor-pointer transition-all duration-200 hover:scale-105">
                    <Free/>
                  </span>
                </div>
              </div>

              {/* Right Section - Icons */}
              <div className="flex items-center gap-8">
                <button className="text-gray-300 hover:text-white cursor-pointer transition-all duration-200 hover:scale-110 p-2 flex items-center justify-center" aria-label="Search">
                  <Search/>
                </button>
                <button className="text-gray-300 hover:text-white cursor-pointer transition-all duration-200 hover:scale-110 p-2 flex items-center justify-center" aria-label="Genres">
                  <Generes/>
                </button>
                <button className="text-gray-300 hover:text-white cursor-pointer transition-all duration-200 hover:scale-110 p-2 flex items-center justify-center" aria-label="Language">
                  <Language/>
                </button>
                <button className="text-gray-300 hover:text-white cursor-pointer transition-all duration-200 hover:scale-110 p-2 flex items-center justify-center" aria-label="Profile">
                  <Profile/>
                </button>
              </div>
           </div>
        </nav>
    )
}
export default Navbar;