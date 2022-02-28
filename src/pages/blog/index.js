import Link from 'next/link'
import Image from 'next/image'
import partoneImg from '@/public/images/partone.jpg'
import eventsImg from '@/public/images/events.jpg'
import sliderImg from '@/public/images/slider2.jpeg'
import slider1Img from '@/public/images/slider3.jpeg'
import Layout from '@/components/Layout'
import Subhero from '@/components/Subhero'
import EventBanner from '@/components/EventBanner'
import PageTitle from '@/components/common/PageTitle'

const blogData = [
  {
    id: 1,
    title: 'Introduction to forex for beginners',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid, rerum!',
    date: '12 December 2021',
    img: partoneImg,
  },
  {
    id: 2,
    title: 'Introduction to forex for beginners',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid, rerum!',
    date: '12 December 2021',
    img: eventsImg,
  },
  {
    id: 3,
    title: 'Introduction to Crypto for beginners',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid, rerum!',
    date: '12 December 2021',
    img: slider1Img,
  },
  {
    id: 4,
    title: 'Introduction to forex for beginners',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid, rerum!',
    date: '12 December 2021',
    img: sliderImg,
  },
  {
    id: 5,
    title: 'Introduction to forex for beginners',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid, rerum!',
    date: '12 December 2021',
    img: eventsImg,
  },
  {
    id: 6,
    title: 'Introduction to Crypto for beginners',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid, rerum!',
    date: '12 December 2021',
    img: slider1Img,
  },
]

const data = {
  id: 203,
  img: eventsImg,
  title: 'Introduction to Crypto For Beginners',
  desc: 'Take the pain out of managing your sales data Take the pain out of managing your sales data',
  startDate: '2:30',
  endDate: '3:00',
}

export default function BlogPage({}) {
  return (
    <Layout>
      <Subhero title='Latest Blog Posts' des='Access top Currency news and market' />
      <div className='container'>
        <div className='blogGrid'>
          {blogData.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.title}`} alt='BlogPost' passHref>
              <div className='blogCard'>
                <div className='imgContainer'>
                  <Image src={blog.img} alt='BlogImage' layout='fill' />
                </div>
                <div className='content'>
                  <h4 className='date'>{blog.date}</h4>
                  <h3 className='blogTitle'>{blog.title}</h3>
                  <p className='des'>{blog.desc}</p>
                  <p className='bloglink'>Read more..</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <EventBanner
        href={`/event/${data.id}`}
        src={data.img}
        alt={data.title}
        title={data.title}
        desc={data.desc}
        startDate={data.startDate}
      />
    </Layout>
  )
}
