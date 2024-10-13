import { useState } from "react"
import { AnimatedHamburgerButton } from "./animated/AnimatedHamburgerButton"

export const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false)
  return (
   
    <header className="fixed top-0 left-0 z-20 w-full bg-black md:bg-transparent md:static">
    <nav className="flex items-center justify-between p-5 text-white relative z-20">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-between w-full">
        <img className="w-10 h-10" src="icons/mustache.svg" alt="" />
        <div className="flex gap-10">
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">About Us</a>
          <a href="">Blog</a>
          <a href="">Contact Us</a>
        </div>
        <button className="border-2 border-p-yellow p-2">Book appointment</button>
      </div>
      {/* Mobile Menu */}
      <div className="flex justify-between items-center w-full z-20 md:hidden">
        <AnimatedHamburgerButton src="/icons/burger.svg" alt="navbar-menu-icon" active={activeMenu} setActive={setActiveMenu} />
        <button className="border-2 border-p-yellow p-2">Book appointment</button>
      </div>
      <div className={`${activeMenu ? 'translate-x-0' : '-translate-x-full'} h-screen w-screen fixed bg-black top-0 left-0 transition-transform duration-500 md:hidden z-10`}>
        <div className="flex justify-center items-center h-full">
          <ul className="flex flex-col gap-10 text-white text-2xl">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}
