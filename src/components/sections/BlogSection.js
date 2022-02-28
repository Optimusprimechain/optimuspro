import PageTitle from '../common/PageTitle'
import Image from 'next/image'
import partoneImg from '@/public/images/partone.jpg'
import eventsImg from '@/public/images/events.jpg'
import sliderImg from '@/public/images/slider2.jpeg'
import slider1Img from '@/public/images/slider3.jpeg'
import Link from 'next/link'

export default function BlogPage({}) {
  return (
    <section className='blogSection'>
      <div className='container'>
        <div className='pageContainer text-center'>
          <PageTitle title='Latest Blogs' />
        </div>

        <div className='blogGrid'>
          <Link href='/' alt='BlogPost' passHref>
            <div className='blogCard'>
              <div className='imgContainer'>
                <Image src={partoneImg} alt='BlogImage' layout='fill' />
              </div>
              <div className='content'>
                <h4 className='date'>28 December 2021</h4>
                <h3 className='blogTitle'>
                  Introduction to forex for beginners
                </h3>
                <p className='des'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, rerum!
                </p>
                <p className='bloglink'>Read more..</p>
              </div>
            </div>
          </Link>
          <Link href='/' alt='BlogPost' passHref>
            <div className='blogCard'>
              <div className='imgContainer'>
                <Image src={slider1Img} alt='BlogImage' layout='fill' />
              </div>
              <div className='content'>
                <h4 className='date'>28 December 2021</h4>
                <h3 className='blogTitle'>
                  Introduction to forex for beginners
                </h3>
                <p className='des'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, rerum!
                </p>
                <p className='bloglink'>Read more..</p>
              </div>
            </div>
          </Link>
          <Link href='/' alt='BlogPost' passHref>
            <div className='blogCard'>
              <div className='imgContainer'>
                <Image src={eventsImg} alt='BlogImage' layout='fill' />
              </div>
              <div className='content'>
                <h4 className='date'>28 December 2021</h4>
                <h3 className='blogTitle'>
                  Introduction to forex for beginners
                </h3>
                <p className='des'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, rerum!
                </p>
                <p className='bloglink'>Read more..</p>
              </div>
            </div>
          </Link>
          <Link href='/' alt='BlogPost' passHref>
            <div className='blogCard'>
              <div className='imgContainer'>
                <Image src={sliderImg} alt='BlogImage' layout='fill' />
              </div>
              <div className='content'>
                <h4 className='date'>28 December 2021</h4>
                <h3 className='blogTitle'>
                  Introduction to forex for beginners
                </h3>
                <p className='des'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, rerum!
                </p>
                <p className='bloglink'>Read more..</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='text-center mt-10 showAll'>
          <Link href='/blog' alt='BlogPost' passHref>
            <a>View all</a>
          </Link>
        </div>
      </div>
    </section>
  )
}
