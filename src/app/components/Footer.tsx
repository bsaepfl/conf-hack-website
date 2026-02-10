// src/components/Footer.tsx
import Link from 'next/link';
import { FaTelegramPlane, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-2 fixed bottom-0 w-full z-50">
      <div className="container mx-auto grid grid-cols-3 items-center px-4">

        {/* Left: Hackathon (Aligned Right to hug center) */}
        <div className="justify-self-end pr-4">
          <Link href="/" className="btn btn-xs btn-ghost text-white hover:bg-white/20">
            Hackathon
          </Link>
        </div>

        {/* Center: Social Icons (Bordered) */}
        <div className="justify-self-center flex items-center gap-4 border-l border-r border-white/30 px-4">
          <a href="https://t.me/+RCJQgriooYMxYWFk" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-white/80 transition-colors">
            <FaTelegramPlane />
          </a>
          <a href="https://x.com/bsaepfl" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-white/80 transition-colors">
            <FaTwitter />
          </a>
          <a href="mailto:bsa@epfl.ch" className="text-lg hover:text-white/80 transition-colors">
            <FaEnvelope />
          </a>
        </div>

        {/* Right: Conference (Aligned Left to hug center) */}
        <div className="justify-self-start pl-4">
          <Link href="/conference" className="btn btn-xs btn-ghost text-white hover:bg-white/20">
            Conference
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
