import GradientLink from '../common/GradientLink'
import Image from 'next/image'
import slider1Img from '@/public/images/slider3.jpeg'

export default function EventSection({}) {
  return (
    <main className="container">
      <div className="webinar bg-gray-900">
        <div className="opacity-10">
          <Image
            layout="fill"
            src={slider1Img}
            alt="Home"
          />
        </div>
        <div className="absolute left-0 top-0 mt-32 lg:mt-20 sm:px-20 px-6 nato-sans">
          <div className="w-full ">
            <h1 className="text-gray-200 text-2xl lg:text-4xl sm:text-4xl font-bold leading-tight">
              Sales Data Management That Works For Your Team
            </h1>
            <h2 className="text-gray-400 text-md sm:text-2xl sm:mt-6 mt-4">
              Take the pain out of managing your sales data
            </h2>
            <div className="mt-4 sm:mt-6 w-48">
              <GradientLink
                text="Get Started"
                size="lg"
                href={'/dashboard'}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
