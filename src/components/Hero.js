import Image from 'next/image'
import heroImg from '@/public/images/land.jpg'

export default function Page({}) {
  return (
    <main className='heroContainer'>
      <Image src={heroImg} alt='' layout='fill' placeholder='blur' />
      <div className='overlay'>
        <div className='content'>
          <h1>Learning that gets you</h1>
          <p>Skills for your present (and your future). Get started with us.</p>
        </div>
      </div>
    </main>
  )
}
