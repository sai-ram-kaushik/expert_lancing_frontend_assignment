import Button from "@/components/Button"
import { menuList } from "@/constants"
import Link from "next/link"
import { useState } from "react"
import { GrFormClose } from 'react-icons/gr'
import { BiMenuAltRight } from 'react-icons/bi'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleChange = () => {
    setNav(!nav)
  }
  return (
    <nav className="w-full h-20 z-[999]">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full px-5 lg:px-0">
          {/* logo */}
          <div>
            <Link href="/"><h1 className="cursor-pointer">Healthi<span>mi</span></h1></Link>
          </div>

          {/* menuList */}
          <div className="hidden lg:flex items-center gap-10">
            {menuList.map((list, index) => (
              <ul className="text-xl hover:text-secondary duration-200" key={index}>
                <Link href={list.path}><li>{list.label}</li></Link>
              </ul>
            ))}
            <Button>Contact Us</Button>
          </div>

          {/* Mobile Version */}
          <div className='inline-block lg:hidden p-2 bg-secondary rounded-full text-black'
            onClick={handleChange}>
            {nav ? <GrFormClose size={30} /> : <BiMenuAltRight size={30} />}
          </div>

          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-700"
            }>
            <Link href='/' onClick={handleChange}>
              <h1 className='text-background'>
                Healthi<span>mi</span>
              </h1>
            </Link>
            <div className='flex flex-col items-center justify-center w-full h-full gap-10'>
              {menuList.map((link, index) => (
                <ul
                  key={index}
                  className='text-xl text-background'
                  onClick={handleChange}>
                  <Link
                    href={link.path}
                    className='text-background hover:text-secondary text-center duration-200'>
                    <li>{link.label}</li>
                  </Link>
                </ul>
              ))}

              <Link href='/contact'>
                <Button>Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar