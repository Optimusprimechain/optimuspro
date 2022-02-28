import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/styles/Review.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlayCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import eventImg from '@/public/images/slider3.jpeg'

export default function CourseReviewPage({}) {
  const [isPaid, setIsPaid] = useState(true)
  const router = useRouter()

  return (
    <Layout>
      <section className={style.hero}>
        <div className={style.content}>
          <h2>The Complete Foundation FOREX Trading Course</h2>
          <p>
            Learn To Trade The FOREX Market by A Trading Firm CEO. Inc:
            Technical Analysis, Candlesticks, Live Trading + much more
          </p>
          <small>
            <FontAwesomeIcon icon={faUserCircle} className={style.icon} /> John
            Doe
          </small>
        </div>
        <div className={style.video}>
          <div className={style.imgCard}>
            <Image
              src={eventImg}
              alt='Course'
              layout='fill'
              placeholder='blur'
            />
            <div className={style.overlay}>
              <FontAwesomeIcon icon={faPlayCircle} className={style.playIcon} />
            </div>
          </div>
          <div className={style.cardBody}>
            {isPaid ? (
              <>
              <h3 className={style.amount}>$45.99</h3>
              <Link href={`/courses/stream/${34}`}>
                <a className={style.button}>Buy now</a>
              </Link>
              </>
            ) : (
              <>
              <h3 className={style.free}>Free</h3>
              <Link href={`/courses/stream/${34}`}>
                <a className={style.button}>Start Learning</a>
              </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <section className={style.learn}>
        <div className={style.learnCard}>
          <h4>What you&apos;ll learn</h4>
          <div className={style.list}>
            <ul>
              <li><FontAwesomeIcon icon={faCheck} className={style.icon} /> <p>Completely understand how the FOREX Market works.</p></li>
              <li><FontAwesomeIcon icon={faCheck} className={style.icon} /> <p>Completely understand how the FOREX Market works.</p></li>
              <li><FontAwesomeIcon icon={faCheck} className={style.icon} /> <p>Completely understand how the FOREX Market works.</p></li>
              <li><FontAwesomeIcon icon={faCheck} className={style.icon} /> <p>Completely understand how the FOREX Market works.</p></li>
              <li><FontAwesomeIcon icon={faCheck} className={style.icon} /> <p>Completely understand how the FOREX Market works.</p></li>
              <li><FontAwesomeIcon icon={faCheck} className={style.icon} /> <p>Completely understand how the FOREX Market works.</p></li>
            </ul>
            <ul>
              <li><FontAwesomeIcon icon={faCheck} className={style.icon} /> <p>Completely understand how the FOREX Market works.</p></li>
              <li><FontAwesomeIcon icon={faCheck} className={style.icon} /> <p>Completely understand how the FOREX Market works.</p></li>
              <li><FontAwesomeIcon icon={faCheck} className={style.icon} /> <p>Completely understand how the FOREX Market works.</p></li>
              <li><FontAwesomeIcon icon={faCheck} className={style.icon} /> <p>Completely understand how the FOREX Market works.</p></li>
              <li><FontAwesomeIcon icon={faCheck} className={style.icon} /> <p>Completely understand how the FOREX Market works.</p></li>
              <li><FontAwesomeIcon icon={faCheck} className={style.icon} /> <p>Completely understand how the FOREX Market works.</p></li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
