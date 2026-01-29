// src/components/Footer.tsx
import Link from 'next/link';
import BSALogo from '../images/hero/BSALogo';
import { FaTelegramPlane, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-2 fixed bottom-0 w-full z-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 items-center px-4">

        {/* Left: Organized by */}
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <span className="text-sm font-bold whitespace-nowrap">
            Organized by
          </span>
          <a href="https://bsaepfl.ch/" target="_blank" rel="noopener noreferrer">
            <BSALogo classname="w-full btn btn-ghost normal-case h-6" />
          </a>
        </div>

        {/* Center: Socials & Nav */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-self-center">
          {/* Navigation */}
          <div className="flex gap-2">
            <Link href="/" className="btn btn-xs btn-ghost text-white hover:bg-white/20">
              Hackathon
            </Link>
            <span className="opacity-50 hidden md:inline">|</span>
            <Link href="/conference" className="btn btn-xs btn-ghost text-white hover:bg-white/20">
              Conference
            </Link>
          </div>

          <div className="hidden md:block w-[1px] h-4 bg-white/30"></div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://t.me/+YcFnxd17Dvk2NmVk" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-white/80 transition-colors">
              <FaTelegramPlane />
            </a>
            <a href="https://x.com/bsa_epfl" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-white/80 transition-colors">
              <FaTwitter />
            </a>
            <a href="mailto:bsa@epfl.ch" className="text-lg hover:text-white/80 transition-colors">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right: Developed by */}
        <div className="flex items-center gap-2 justify-center md:justify-end">
          <span className="text-sm font-bold whitespace-nowrap">
            Developed by
          </span>
          <span className="text-sm">
            Jules, Loris
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
