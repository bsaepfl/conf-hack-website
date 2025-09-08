// src/components/Footer.tsx
import BSALogo from '../images/hero/BSALogo';
import { FaTelegramPlane, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-2 fixed bottom-0 w-full z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2"> {/* Changed to horizontal layout */}
          <span className="text-sm font-bold whitespace-nowrap">
            Organized by
          </span>
          <a href="https://bsaepfl.ch/" target="_blank" rel="noopener noreferrer">
            <BSALogo classname="w-full btn btn-ghost normal-case h-6" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://t.me/+yF2qQVzrG004ZTJk" target="_blank" rel="noopener noreferrer" className="text-lg">
            <FaTelegramPlane />
          </a>
          <a href="https://x.com/bsa_epfl" target="_blank" rel="noopener noreferrer" className="text-lg">
            <FaTwitter />
          </a>
          <a href="mailto:bsa@epfl.ch" className="text-lg">
            <FaEnvelope />
          </a>
        </div>

        <div className="flex items-center gap-2"> {/* Changed to horizontal layout */}
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
