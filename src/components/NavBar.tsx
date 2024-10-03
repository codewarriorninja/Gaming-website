import { Logo } from "../assets/Images/Image"
import { navLinks } from "../constant/Constant"
import { useState } from "react"
import { FaBars,FaTimes,FaSearch } from "react-icons/fa"

const NavBar:React.FC = () => {
    const [nav, setNav] = useState<boolean>(false);

    const handleClick = () => {
      setNav(!nav);
    }
  return (
    <nav className="w-full absolute top-0 bg-transparent z-50">
      <header className="max-w-[1240px] mx-auto p-4 flex items-center justify-between">
         <div>
            <img src={Logo} 
             alt="logo"
             width={100}
             height={100}
             className="object-contain"
            />
         </div>
         <ul className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link,index) => (
            <li key={index} className="text-white hover:text-gray-400">
              <a href={link.href} className="font-medium text-lg">{link.name}</a>
            </li>
           ))}
            <div className="flex items-center space-x-2 px-3 bg-white rounded-full py-1">
                <input type="text" className="focus:outline-none caret-gray-600 bg-transparent" />
                <span className="bg-[#7B61FF] p-2 rounded-full"><FaSearch className="cursor-pointer flex items-center justify-center text-white text-sm" /></span>
            </div>
         </ul>
         <div className="lg:hidden" onClick={handleClick}>
           {!nav ? <FaBars className="text-white cursor-pointer text-xl" /> : <FaTimes className="text-white cursor-pointer text-xl" />}
         </div>
          <div className={`absolute top-16 left-0 w-full bg-gray-900/70 backdrop-blur-md text-white flex flex-col items-center lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${nav ? 'max-h-screen opacity-100 transform translate-y-0': 'max-h-0 opacity-0 transform -translate-y-10'}`}>
             <ul className="w-full text-center z-10">
               {navLinks.map((link,index) => (
                <li key={index} className="py-4">
                    <a href={link.href} className="block text-white">{link.name}</a>
                </li>
               ))}
                <div className="flex items-center justify-between space-x-2 px-3 bg-white rounded-full py-1 mb-4 mx-2 lg:mx-0">
                    <input type="text" className="focus:outline-none caret-gray-600 bg-transparent" />
                    <FaSearch className="cursor-pointer text-[#7B61FF]" />
               </div>
             </ul>
          </div>
      </header>
    </nav>
  )
}

export default NavBar