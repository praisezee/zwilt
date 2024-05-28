import logo from "../assets/logo1.png"
import { BsList, BsXLg } from "react-icons/bs"
import useMainContext from "../hook/useMainContext";

const Header = () =>
{
  
  const {showMenu, toggleMenu} = useMainContext()
  return (
    <header className="px-10">
      <nav className="header rounded-xl flex justify-between items-center pl-5 pr-2 py-2 text-sm shadow-lg bg-custom">
        <div className="logo">
          <img loading="lazy" src={logo} alt="Logo" width={100} height={100}/>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-5 text-white">
            <li>Find Work</li>
            <li>Find Talent</li>
            <li>Articles</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="hidden md:flex gap-3">
          <button className="text-white">Login</button>
          <button className="bg-white rounded-xl px-4 py-2 font-bold text-xs">Join Now</button>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={toggleMenu}>
            {!showMenu ? <BsList/> : <BsXLg/>}
          </button>
        </div>
        <div className={showMenu ? "absolute z-50 top-20 left-1/2 transform -translate-x-1/2 w-5/6  flex flex-col items-center md:hidden rounded-xl bg-custom-2" : "hidden"}>
          <ul className="flex flex-col items-center gap-5 text-white py-5">
            <li>Find Work</li>
            <li>Find Talent</li>
            <li>Articles</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <div className="flex flex-col gap-3 mt-5">
              <button className="text-white">
                Log In
              </button>
              <button className="bg-white text-black rounded-xl px-4 py-2 font-bold text-xs">
                Join Now
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
