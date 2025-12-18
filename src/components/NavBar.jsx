import { NavLink, Link } from "react-router-dom";
import { Car, User, Menu, X, ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

const NavBar = () => {

const [isScrolled, setIsScrolled] = useState(false);
const [isOpen, setIsOpen] = useState(false);


//scroll effect on navbar
useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);  

  //navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Fleet", path: "/fleet" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];  

  //mobile nav link classes
const getNavLinkCLass = ({isActive}) => isActive ? "text-white p-5 bg-zinc-950 transition" : "hover:text-white text-zinc-800 border-b border-b-zinc-200 p-5 hover:bg-zinc-900 transition";

  return (
    <header className={`fixed cursor-pointer top-3.5 left-1/2 -translate-x-1/2 z-50  transition-all duration-300 rounded-full h-14
    ${
      isScrolled ? " bg-zinc-900/50 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-3xl": "bg-zinc-200 w-[95%] max-w-4xl"
    }`}>

      <div className="mx-auto h-full px-6">
        <nav className="centered-row justify-between h-full">

        {/* logo */}

    <NavLink to="/" className="flex items-center">
        <div className="h-auto relative centered-row gap-2">
          {/* icon */}
            <Car className={`h-8 w-8 ${
              isScrolled ? "text-zinc-100": "text-zinc-700/60"
            }`} />

          {/* text */}
          <p className={`tracking-tighter cursor-pointer text-xl clash-display font-medium ${
            isScrolled ? "text-zinc-200": "text-zinc-700"
          }`}>
            ps AutoVista<sup className="text-xs ml-1">TM</sup>
          </p>
        </div>
    </NavLink>

        {/* desktop navigation*/}

        <div className="hidden md:centered-row gap-6">
         {
          navLinks.map((item,index) => (
            <NavLink 
            key={index} 
            to={item.path} 
            className={`
                text-sm md:text-lg hover:font-semibold 
                hover:translate-y-1 ease-out transition-all 
                duration-300 ${
                  isScrolled ? " text-white hover:text-yellow-300": "text-zinc-800"
                }
                `}>
                  
            {item.name}
              </NavLink>
          ))}
        </div>

        {/* button navigation*/}

        <div className="md:centered-row gap-2 hidden">
          <Link to="/rent">
          <button className="clash-display text-base bg-gradient-to-r from-zinc-700 to-zinc-950 px-4 py-2 rounded-full cursor-pointer hover:-translate-y-0.5 duration-200 transition-all ease-out">
            Rent Now!
          </button>
          </Link>
        

        {/* user icon */}
       <div className="w-10 h-10 bg-zinc-800 rounded-full centre-item cursor-pointer centered-row">
         
          <User />
       </div>
      </div>
        {/* mobile navigation icon */}

        <div className="md:hidden p-1 rounded-md">
          <button 
          className="md:hidden text-white hover:text-zinc-400 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? ( 
              <X size={34} className="text-zinc-800" /> 
            ) : ( 
            <Menu size={40} className={`${isScrolled ? "text-zinc-200" : "text-zinc-800"} mt-2`} />
            )}

          </button>
        </div>
{/* ------------------------------------------------------- */}
        {/* mobile nav menu */}
      
      <div className={`absolute md:hidden -top-5 w-full h-screen bg-zinc-50 backdrop-blur-lg transition-transform duration-300 
        ease-in-out z-[999] flex flex-col 
        justify-between ${
          isOpen ? "-translate-x-6" : "-translate-x-[1500px]"
        }`}>
{/* mobile nav header */}
          <div className="flex items-center h-20 border-b border-b-zinc-500/80 ">
            <button onClick={() => setIsOpen(false)} className="centered-row p-4 gap-2" >
              <ChevronLeft className="text-zinc-800" />

            <p className="text-lg clash-display text-zinc-800">Black</p>
            </button>
          </div>

          {/* mobile nav links */}
        <div className="col flex-1 text-zinc-800 pb-4">
            {
              ["/","/fleet","/about","/rent"].map((path, index) => (
                <NavLink key={index} to={path} className={getNavLinkCLass}>
                    <button onClick={() => setIsOpen(false)} 
                    className="text-xl w-full clash-display">
                        {
                           ["Home","Fleet","About Us","Rent Now"][index]
                        }
                    </button>
                </NavLink>
              ))
            }
        </div>

          {/* mobilenav footer */}
          <div className="text-center text-sm pt-8 pb-8 text-zinc-500">

            &copy; {new Date().getFullYear()}<br />
            <span className="font-semibold">AutoVista</span> by ParamSoni All rights reserved.

          </div>

        </div>


        </nav>
      </div>
    </header>
  );
};

export default NavBar;