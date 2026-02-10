'use client'
import Link from 'next/link'
import Image from 'next/image'
import Image from 'next/image'




const Navbar = () => {
  return (

    <div className="navbar bg-secondary shadow-lg fixed top-0 z-50  font-semibold opacity-100">

      <div className="navbar-start">
      
          
            <Link href="/">
              <Image src="/images/logo-white.png" alt="BSA Logo" width={50} height={50} className="w-full btn btn-ghost normal-case p-2" />
            </Link>
        </div>
      
      
      

    
    </div>
  )
}

export default Navbar
