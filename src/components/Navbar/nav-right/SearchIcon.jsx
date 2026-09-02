import { IoIosSearch } from "react-icons/io";

const SearchIcon = () => {
  return (
    <button className="flex cursor-pointer items-center justify-center rounded-full p-2 text-slate-300 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95" aria-label="Search">
      <IoIosSearch size={22} />
    </button>
  )
}

export default SearchIcon
