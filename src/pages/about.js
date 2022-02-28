import Layout from "@/components/Layout";
import SubHero from "@/components/Subhero";
import style from '@/styles/Blog.module.css'
import Image from 'next/image'
import ServiceSection from '@/components/sections/ServiceSection'
import SubscriptionSection from "@/components/sections/SubscribeSection";
import TeamSection from "@/components/sections/TeamSection";
import EventBanner from '@/components/EventBanner'
import eventImg from '@/public/images/slider3.jpeg'


const data = {
  id: 6,
  title: 'Introduction to Crypto for beginners',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid, rerum!',
  date: '12 December 2021',
  img: eventImg
}

export default function aboutPage({ }) {
  return (
    <Layout>
      <SubHero title="About Us" />

      <section className={style.blog}>
        {/* <h2 className={style.title}>Using Content Marketing to Build Your Personal Brand</h2> */}
        <div className={style.blogImg}>
          <Image src={eventImg} alt="BlogImage" layout='fill' placeholder="blur" />
        </div>

        <h3 className={style.subTitle}>What are they looking for?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum reiciendis numquam, ad ipsam corporis laudantium natus molestiae voluptatem iusto nihil incidunt sunt doloremque quae harum excepturi adipisci reprehenderit enim expedita tenetur atque omnis aperiam modi. Temporibus laudantium blanditiis voluptatum repellendus. Soluta suscipit eligendi tenetur. Iure dolores accusamus molestiae itaque suscipit porro, sunt voluptatum fugiat nulla dolorem modi eveniet ea voluptatem et culpa aperiam. Cumque, nesciunt, amet ipsam cum aperiam eum dignissimos id autem quos ea nobis cupiditate laudantium commodi quibusdam tempora accusamus atque at dicta impedit consectetur culpa. Itaque voluptatibus dolorem consequuntur provident commodi explicabo sed in suscipit! Ab.</p>
      </section>

      <ServiceSection />
      <SubscriptionSection />
      <TeamSection />
      <EventBanner src={data.img} alt={data.title} title={data.title} desc={data.desc} startDate={data.startDate} href={`/event/${data.id}`} />
    </Layout>
  )
}