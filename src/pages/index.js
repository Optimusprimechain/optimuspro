import GradientLink from '@/components/common/GradientLink'
import AboutSections from '@/components/sections/AboutSection'
import CourseSections from '@/components/sections/CourseSection'
import EventSection from '@/components/sections/EventSection'
import ServiceSection from '@/components/sections/ServiceSection'
import SubscriptionSection from '@/components/sections/SubscribeSection'
import CustomerSection from '@/components/sections/CustomerSection'
import BlogSection from '@/components/sections/BlogSection'
import TeamSection from '@/components/sections/TeamSection'
import slider1Img from '@/public/images/slider3.jpeg'
import Image from 'next/image'
import Layout from '@/components/Layout'
import eventImg from '@/public/images/slider3.jpeg'
import EventBanner from '@/components/EventBanner'
import Hero from '@/components/Hero'
import TradingWiget from '@/components/common/TradingWiget'



const data = {
  id: 203,
  img: eventImg,
  title: "Introduction to Crypto For Beginners",
  desc: "Take the pain out of managing your sales data Take the pain out of managing your sales data",
  startDate: "2:30",
  endDate: "3:00"
}

export default function Home() {
  return (
    <>
      <TradingWiget />
      <Layout>
      <Hero />
      <AboutSections />
      <EventBanner src={data.img} alt={data.title} title={data.title} desc={data.desc} startDate={data.startDate} href={`/event/${data.id}`} />
      <CourseSections />
      <ServiceSection />
      <SubscriptionSection />
      <CustomerSection />
      <BlogSection />
      <TeamSection />
    </Layout>
    </>
  )
}
