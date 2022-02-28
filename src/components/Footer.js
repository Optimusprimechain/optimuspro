import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTelegram,
} from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import Link from 'next/link'

export default function Footer({}) {
  return (
    <footer>
      <div className='footer'>
        <div className='footercol'>
          <div>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/'>
              <a>About</a>
            </Link>
            <Link href='/'>
              <a>Contact</a>
            </Link>
          </div>
        </div>
        <div className='footercol'>
          <div>
            <Link href='/'>
              <a>Forex courses</a>
            </Link>
            <Link href='/'>
              <a>Crypto Courses</a>
            </Link>
            <Link href='/'>
              <a>Blog</a>
            </Link>
          </div>
        </div>
        <div className='footercol'>
          <div>
            <Link href='/'>
              <a>Twitter</a>
            </Link>
            <Link href='/'>
              <a>Instagram</a>
            </Link>
            <Link href='/'>
              <a>Facebook</a>
            </Link>
            <Link href='/'>
              <a>Telegram</a>
            </Link>
          </div>
        </div>
      </div>
      <div className='minFooter'>
        <p>Copyright &copy; 2021 OptimusPro. All Rights Reserved</p>
        <h5>
          Design by <Link href="/"><a>Calebbenjin.io</a></Link>
        </h5>
      </div>
    </footer>
  )
}
