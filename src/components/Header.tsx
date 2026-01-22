import { useEffect, useState } from "react"
import { navLinks } from "../data/data"
import { Menu, X } from "lucide-react"

const Header = () => {

  const [isActive, setIsActive] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const activeMenu = () => setIsActive(window.scrollY > 0)
    window.addEventListener('scroll', activeMenu)

    return () => {
      window.removeEventListener('scroll', activeMenu)
    }
  }, [])

  return (
    <header className={`fixed w-full py-3 z-90 text-white transition-all duration-500 ${isOpen && 'bg-main'} ${isActive ? 'bg-main' : ''}`}>
      <div className="container flex justify-between items-center">
        <a href="#"><img src="logo.png" alt="" onClick={() => setIsOpen(false)} /></a>
        <div className="justify-between gap-10 hidden md:flex">
          {navLinks.map(item => {
            return <a href={item.href}>{item.title}</a>
          })}
        </div>

        <div className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </div>

        <div className={`absolute top-full left-0 bg-main w-full shadow-2xl min-h-screen text-center transition-all translate-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map(item => {
            return <a href={item.href} className="block py-8 text-2xl" onClick={() => setIsOpen(false)}>{item.title}</a>
          })}
        </div>

      </div>
    </header>
  )
}

export default Header