import React, { useEffect, useRef, useState } from 'react'
import { faCaretDown, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const DropdownItem = ({ item }) => (
  <button className='flex items-center' onClick={item.onClick}>
    <FontAwesomeIcon icon={item.icon} />
    <Link href={item.href}>
      <a className='ml-2'>{item.title}</a>
    </Link>
  </button>
)

const DropdownContent = ({ dropdownItems }) => {
  return (
    <div className='bg-white w-full absolute p-4 shadow-lg rounded-lg mt-2'>
      {dropdownItems.map((item, i) => {
        return (
          <div className='mt-1' key={i}>
            <DropdownItem item={item} />
          </div>
        )
      })}
    </div>
  )
}

const AvatarDropdown = () => {
  const node = useRef()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdownItems = [
    {
      title: 'Forex Courses',
      icon: faVideo,
      href: '/courses/forex',
    },
    {
      title: 'Crypto Courses',
      href: '/courses/crypto',
      icon: faVideo,
    },
  ]

  const handleClick = (e) => {
    if (!node.current.contains(e.target)) {
      setDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <div ref={node}>
      <button
        ref={node}
        className='flex items-center focus:outline-none'
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <div>
          <p className='link'>Courses</p>
        </div>
        <div className='ml-1 link'>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </button>

      {dropdownOpen && (
        <div className='dropCard link'>
          <DropdownContent dropdownItems={dropdownItems} />
        </div>
      )}
    </div>
  )
}

export default AvatarDropdown
