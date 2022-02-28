import style from '@/styles/Subhero.module.css'
import Image from 'next/image'

export default function Subhero({ img, alt, title, des }) {
  return (
    <div className={style.subhero}>
      <div>
        <div className='w-full'>
          <h1 className='text-gray-200 text-3xl lg:text-4xl sm:text-4xl font-bold leading-tight'>
            {title}
          </h1>
          <h2 className='text-gray-300 text-md sm:text-1xl'>
            {des}
          </h2>
        </div>
      </div>
    </div>
  )
}
