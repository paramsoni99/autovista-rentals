import { NavLink } from "react-router-dom";
import {
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  MapPin,
  Car,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 relative">
                <Car className="w-8 h-8 text-sky-400" />
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r clash-display from-sky-400 to-zinc-100">
                ps AutoVista <sup className="text-xs ml-1 text-zinc-500">TM</sup>
              </h2>
            </div>
            <p className="text-zinc-400 max-w-md">
              Your premier partner for seamless car rentals. Explore our diverse
              fleet and embark on unforgettable journeys with comfort and style.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://paramsoni.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-sky-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://paramsoni.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-sky-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://paramsoni.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-sky-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ml-20">
            <h3 className="clash-display text-zinc-100 mb-4 pb-2 border-b border-zinc-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fleet"
                  className="text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  Fleet
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/booking"
                  className="text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  Book Now
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="clash-display text-zinc-100 mb-4 pb-2 border-b border-zinc-800">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-zinc-400">
                <Mail size={16} className="text-sky-400" />
                <span>paramsoni.me@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-400">
                <Phone size={16} className="text-sky-400" />
                <span>+91 98--------</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-400">
                <MapPin size={16} className="text-sky-400" />
                <span>123 Dream Drive</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} AutoVista Rentals
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://paramsoni.me"
              className="text-zinc-500 hover:text-sky-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://paramsoni.me"
              className="text-zinc-500 hover:text-sky-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
