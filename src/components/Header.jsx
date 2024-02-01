import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className="flex justify-between py-4 items-center shadow w-full px-3" >
        <div className="flex gap-20">
            <NavLink to=''>MENU</NavLink>
            <NavLink to=''>ORDER</NavLink>
        </div>
        <div className="mr-6 font-bold text-2xl text-orange-900"><h1>KSK</h1></div>
        <div className="flex gap-5">
            <NavLink to=''>ABOUT</NavLink>
            <NavLink to=''>CHEF</NavLink>
            <NavLink to=''>CONTACTS</NavLink>
        </div>
    </nav>
  )
}

export default Header