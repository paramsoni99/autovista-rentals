import { NavLink } from "react-router-dom";
import { Gauge, User, Menu } from "lucide-react";

const NavBar = () => {
  return (
    <header className="">
      <div className="">
        <nav className="">

        {/* logo */}
    <NavLink to="/" className="">
        <div className="">
          {/* icon */}
            <Gauge className="" />

          {/* text */}
          <p className="">
            AutoVista<sup className="">TM</sup>
          </p>
        </div>
    </NavLink>

        {/* desktop navigation*/}

        <div className="">
           <a href="" className="">
                Home
           </a>
          
          <a href="" className="">
                About
           </a>

           <a href="" className="">
                Blog 
           </a>

        </div>

        {/* button navigation*/}

        <div className="">
          <button className="">
            Rent Now!
          </button>
        </div>

        {/* user icon */}
       <div className="">
          <User />
       </div>

        {/* mobile navigation icon */}

        <div className="">
          <button className="">
            <Menu size={40} className="" />
          </button>
        </div>

        {/* mobile nav menu */}
        <div className="">

        </div>

        </nav>
      </div>
    </header>
  );
};

export default NavBar;