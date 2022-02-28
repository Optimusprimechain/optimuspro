import style from '@/styles/Course.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import ProgressBar from '@/components/common/ProgressBar'

export default function Course({
  img,
  alt,
  amount,
  title,
  author,
  desc,
  isPaid,
  href,
  progress
}) {
  return (
    <Link href={href} alt={title} passHref>
      <div className={style.card}>
        <div className={style.cardImage}>
          <Image src={img} alt={alt} layout='fill' placeholder='blur' />
        </div>
        <div className={style.body}>
          <h4>{title}</h4>
          <small>
            <FontAwesomeIcon icon={faUserCircle} className={style.icon} />
            {author}
          </small>
          <p className={style.desc}>{desc}</p>
          {isPaid ? <h5>${amount}</h5> : <p className={style.free}>Free</p>}

          <div>{progress}</div>
        </div>
      </div>
    </Link>
  )
}
