import Button from "@/components/Button"
import { menuList } from "@/constants"
import Link from "next/link"
const Navbar = () => {
  return (
    <nav className="w-full h-20 z-[999] bg-background">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full px-5 lg:px-0">
          {/* logo */}
          <div>
            <h1>Healthi<span>mi</span></h1>
          </div>

          {/* menuList */}
          <div className="hidden lg:flex items-center gap-10">
            {menuList.map((list, index) => (
              <ul className="text-xl">
                <Link href={list.path}><li>{list.label}</li></Link>
              </ul>
            ))}
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar