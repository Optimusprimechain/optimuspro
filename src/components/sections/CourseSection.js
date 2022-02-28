import PageTitle from '../common/PageTitle'
import Image from 'next/image'
import abatImage from '@/public/images/slider2.jpeg'
import Link from 'next/link'
import GradientLink from '../common/GradientLink'
import slider1Img from '@/public/images/slider3.jpeg'
import slider2Img from '@/public/images/slider1.jpeg'

export default function CourseSections({}) {
  return (
    <section className='courseSection'>
      <div className='pageContainer'>
        <PageTitle title="Let's start learning, John" />
        <hr />
      </div>

      <div className='gridContainer'>
        <div className='courseCard'>
          <div className='courseImg'>
            <Image layout='fill' src={slider1Img} alt='Home' />
          </div>
          <div className='overlay'>
            <div className='content'>
              <h1 className='text-gray-200 text-2xl lg:text-3xl sm:text-3xl font-bold leading-tight'>
                Explore our Beginner to Advance Forex Coures
              </h1>
              <div className='mt-4 sm:mt-10 w-48'>
                <GradientLink
                  text='Start Learning'
                  size='lg'
                  href={'/courses/forex'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='courseCard'>
          <div className='courseImg'>
            <Image layout='fill' src={slider2Img} alt='Home' />
          </div>
          <div className='overlay'>
            <div className='content'>
              <h1 className='text-gray-200 text-2xl lg:text-3xl sm:text-3xl font-bold leading-tight'>
                Explore our Beginner to Advance Cryptocurency Coureses
              </h1>
              <div className='mt-4 sm:mt-10 w-48'>
                <GradientLink
                  text='Start Learning'
                  size='lg'
                  href={'/courses/crypto'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
