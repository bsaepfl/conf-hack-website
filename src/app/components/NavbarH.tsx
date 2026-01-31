'use client'
import Link from 'next/link'
import Image from 'next/image'
import BSALogo from '../images/hero/BSALogo'


const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Adjust for the navbar height
      behavior: 'smooth',
    });
  }
};

const NavbarH = () => {
  return (
    <div className="navbar bg-secondary shadow-lg fixed top-0 z-50  font-semibold opacity-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100  rounded-box w-52 gap-6">
            <li><button onClick={() => scrollToSection('grant')} className='text-l font-bold bg-clip-text text-white'>Amenities</button></li>
            <li><button onClick={() => scrollToSection('schedule')} className='text-l font-bold bg-clip-text text-white'>Schedule</button></li>
            <li><button onClick={() => scrollToSection('prize')} className='text-l font-bold bg-clip-text text-white'>Prize</button></li>
            <li><button onClick={() => scrollToSection('discover')} className='text-l font-bold bg-clip-text text-white'>Discover</button></li>
            <li><button onClick={() => scrollToSection('location')} className='text-l font-bold bg-clip-text text-white'>Location</button></li>
            <li><button onClick={() => scrollToSection('faq')} className='text-l font-bold bg-clip-text text-white'>FAQ</button></li>
            {/* <li><button onClick={() => scrollToSection('rules')} className='text-l font-bold bg-clip-text text-secondary'>Rules</button></li> */}

          </ul>
        </div>
        <Link href="/">
          <BSALogo classname="h-12 md:h-16 w-auto ml-2" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1">
          <li><button onClick={() => scrollToSection('grant')} className='text-l font-bold bg-clip-text text-white'>Amenities</button></li>
          <li><button onClick={() => scrollToSection('schedule')} className='text-l font-bold bg-clip-text text-white'>Schedule</button></li>
          <li><button onClick={() => scrollToSection('prize')} className='text-l font-bold bg-clip-text text-white'>Prize</button></li>
          <li><button onClick={() => scrollToSection('discover')} className='text-l font-bold bg-clip-text text-white'>Discover</button></li>
          <li><button onClick={() => scrollToSection('location')} className='text-l font-bold bg-clip-text text-white'>Location</button></li>
          <li><button onClick={() => scrollToSection('faq')} className='text-l font-bold bg-clip-text text-white'>FAQ</button></li>
          {/* <li><button onClick={() => scrollToSection('rules')} className='text-l font-bold bg-clip-text text-white'>Rules</button></li> */}
          {/* <li><Link href="/grants">Grants</Link></li> */}

          {/* <li><Link href="/workshops">Workshops</Link></li> */}

        </ul>
      </div>


      <div className="navbar-end  gap-1">

        <Link href="/register" className="btn ">Register</Link>
      </div>
    </div>
  )
}

export default NavbarH
