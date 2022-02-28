import PageTitle from '../common/PageTitle'
import Image from 'next/image'
import abatImage from '@/public/images/slider2.jpeg'
import Link from 'next/link'
import GradientLink from '../common/GradientLink'

export default function AboutSections({}) {
  return (
    <section>
      <div className='container'>

        <div className="mt-10">
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-10'>
            <div className='relative'>
              <Image
                alt='AboutImge'
                layout="fill"
                placeholder='blur'
                src={abatImage}
              />
            </div>
            <div className='relative mt-10'>
              <PageTitle title='About Section' />
              <dd className='mt-3 mb-5 text-base text-black'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam officiis sit nesciunt necessitatibus quos, voluptates,
                fugiat culpa doloremque minus aperiam esse totam dolor ullam.
                Ullam architecto eius perferendis voluptas quos. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Aliquam officiis
                sit nesciunt necessitatibus quos, voluptates, fugiat culpa
                doloremque minus aperiam esse totam dolor ullam. Ullam
                architecto eius perferendis voluptas quos.
              </dd>
              <GradientLink href='/about' size="md" text='Learn more...' />
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
