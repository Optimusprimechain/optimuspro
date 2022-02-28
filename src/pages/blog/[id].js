import Layout from "@/components/Layout";
import { useRouter } from 'next/router'
import style from '@/styles/Blog.module.css'
import slider1Img from '@/public/images/slider2.jpeg'
import Link from 'next/link'
import Image from 'next/image'


  const data = {
    id: 6,
    title: 'Introduction to Crypto for beginners',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid, rerum!',
    date: '12 December 2021',
    img: slider1Img
  }

export default function SingleBlogPage({ }) {
  const router = useRouter()
  return (
    <Layout>
      <section className={style.blog}>
        <h2 className={style.title}>Using Content Marketing to Build Your Personal Brand</h2>

        <div className={style.blogImg}>
          <Image src={data.img} alt={data.title} layout='fill' placeholder="blur" />
        </div>

        <h3 className={style.subTitle}>What are they looking for?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum reiciendis numquam, ad ipsam corporis laudantium natus molestiae voluptatem iusto nihil incidunt sunt doloremque quae harum excepturi adipisci reprehenderit enim expedita tenetur atque omnis aperiam modi. Temporibus laudantium blanditiis voluptatum repellendus. Soluta suscipit eligendi tenetur. Iure dolores accusamus molestiae itaque suscipit porro, sunt voluptatum fugiat nulla dolorem modi eveniet ea voluptatem et culpa aperiam. Cumque, nesciunt, amet ipsam cum aperiam eum dignissimos id autem quos ea nobis cupiditate laudantium commodi quibusdam tempora accusamus atque at dicta impedit consectetur culpa. Itaque voluptatibus dolorem consequuntur provident commodi explicabo sed in suscipit! Ab.</p>
      </section>

      
    </Layout>
  )
}