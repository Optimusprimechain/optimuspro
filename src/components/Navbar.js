import React, { useState, useContext } from 'react'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import AvatarDropdown from './AvatarDropdown'
import NavDropdown from './NavDropdown'
import Link from 'next/link'
import logo from '@/public/images/logo.png'
import Image from 'next/image'
import GradientLink from './common/GradientLink'
import { AuthContext } from '@/context/AuthProvider'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const { authState } = useContext(AuthContext)

  const { token, userInfo } = authState

  const handleSideBar = () => {
    setShowNav(!showNav)
  }

  return (
    <nav className='flex justify-between bg-white px-4 sm:px-10 py-2 sm:py-2'>
      <div className='logo'>
        <Image
          src={logo}
          alt='logo'
          height='40'
          width='130'
          placeholder='blur'
        />
      </div>
      <div className={showNav ? 'navLink' : 'showNav'}>
        <Link href='/'>
          <a className='link'>Home</a>
        </Link>
        <NavDropdown />
        <Link href='/blog'>
          <a className='link'>Blog</a>
        </Link>
        <Link href='/about'>
          <a className='link'>About</a>
        </Link>
        <Link href='/contact'>
          <a className='link'>Contact</a>
        </Link>
        {!token ? (
          <>
            <Link href='/accounts/signup'>
              <a className='text-blue-700 link mobileScreen'>Sign Up</a>
            </Link>
            <Link href='/accounts/login'>
              <a className='text-blue-700 link mobileScreen'>Login</a>
            </Link>
          </>
        ) : (
          <div className="mobileScreen">
            <Link href='/accounts/dashboard'>
              <a className='text-blue-700 link mr-4'>My Learning</a>
            </Link>
            <AvatarDropdown />
          </div>
        )}
      </div>
      {token ? (
        <div className='flex items-center mobileScreenShow'>
          <Link href='/accounts/dashboard'>
            <a className='text-blue-700 link mr-4'>My Learning</a>
          </Link>
          <AvatarDropdown />
        </div>
      ) : (
        <div className='flex items-center mobileScreenShow'>
          <Link href='/accounts/signup'>
            <a className='text-blue-700 mr-3 link'>Sign Up</a>
          </Link>
          <GradientLink href='/accounts/login' text='Log In' />
        </div>
      )}
      <div className='mobileToggle' onClick={handleSideBar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  )
}

export default Navbar
