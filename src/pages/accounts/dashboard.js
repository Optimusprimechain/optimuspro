import Layout from '@/components/Layout'
import Subhero from '@/components/Subhero'
import style from '@/styles/Course.module.css'
import Course from '@/components/common/Course'
import ProgressBar from '@/components/common/ProgressBar'
import cryptoImg from '@/public/images/slider3.jpeg'
import eventImg from '@/public/images/slider3.jpeg'
import courseImg from '@/public/images/slider3.jpeg'
import EventBanner from '@/components/EventBanner'

const coursedata = [
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

const data = {
  id: 203,
  img: eventImg,
  title: 'Introduction to Crypto For Beginners',
  desc: 'Take the pain out of managing your sales data Take the pain out of managing your sales data',
  startDate: '2:30',
  endDate: '3:00',
}

export default function dashboardPage({}) {
  return (
    <Layout>
      <Subhero title='My learning' />

      <section className={style.section}>
        {coursedata.map((course) => (
          <Course
            key={course.id}
            href={`/courses/stream/${course.id}`}
            title={course.title}
            author={course.intructor}
            desc={course.desc}
            img={course.img}
            alt={course.title}
            isPaid={course.isPaid}
            amount={course.amount}
            progress={<ProgressBar value={course.progress} />}
          />
        ))}
      </section>

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
