import Layout from '@/components/Layout'
import Subhero from '@/components/Subhero'
import PageTitle from '@/components/common/PageTitle'
import cryptoImg from '@/public/images/slider3.jpeg'
import eventImg from '@/public/images/slider3.jpeg'
import courseImg from '@/public/images/slider3.jpeg'
import CourseList from '@/components/common/CourseList'
import EventBanner from '@/components/EventBanner'

const data = {
  id: 203,
  img: eventImg,
  title: 'Introduction to Crypto For Beginners',
  desc: 'Take the pain out of managing your sales data Take the pain out of managing your sales data',
  startDate: '2:30',
  endDate: '3:00',
}

const courseData = [
  {
    id: 1,
    img: courseImg,
    title: 'Introduction to Crypto',
    desc: 'Take the pain out of managing your sales data',
    intructor: 'John Doe',
    isPaid: false,
    amount: 300.99,
    progress: 90,
  },
  {
    id: 2,
    img: courseImg,
    title: 'Introduction to Crypto',
    desc: 'Take the pain out of managing your sales data',
    intructor: 'John Doe',
    isPaid: true,
    amount: 300.99,
    progress: 10,
  },
  {
    id: 3,
    img: courseImg,
    title: 'Introduction to Crypto',
    desc: 'Take the pain out of managing your sales data',
    intructor: 'John Doe',
    isPaid: true,
    amount: 300.99,
    progress: 40,
  },
  {
    id: 4,
    img: courseImg,
    title: 'Introduction to Crypto',
    desc: 'Take the pain out of managing your sales data',
    intructor: 'John Doe',
    isPaid: true,
    amount: 300,
    progress: 30,
  },
]

export default function cryptoPage({}) {
  return (
    <Layout>
      <Subhero
        title='Crypto Courses'
        des='Take the pain out of managing your sales data'
        img={cryptoImg}
        alt='Crypto Courses'
      />

      <section>
        <div className='pageContainer'>
          <PageTitle title='Course to get you started' />
        </div>
        <hr />
      </section>

      <CourseList data={courseData} />

      <EventBanner
        src={data.img}
        alt={data.title}
        title={data.title}
        desc={data.desc}
        startDate={data.startDate}
        href={`/event/${data.id}`}
      />
    </Layout>
  )
}
