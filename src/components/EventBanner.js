import style from '@/styles/EventBanner.module.css'
import Card from './common/Card'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import GradientLink from './common/GradientLink'


export default function EventBanner({ src, alt, href, title, desc, startDate, endDate }) {
  return (
    <section className={style.section}>
      <Card>
        <div className={style.gridContainer}>
          <div className={style.imgCover}>
            <Image src={src} alt={alt} layout='fill' placeholder="blur" />
          </div>
          <div className={style.content}>
            <h3>{title}</h3>
            <h5>{desc}</h5>
            <div className={style.date}>
              <p><FontAwesomeIcon icon={faCalendarAlt} className={style.icon} /> Start Date: {startDate}</p>
              {/* <p>{endDate}</p> */}
            </div>
            <div className={style.container}>
              <GradientLink href={href} text="Register now" />
            </div>
          </div>
        </div>
    </Card>
    </section>
  )
}