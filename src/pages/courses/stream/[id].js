import { useState } from 'react'
import style from '@/styles/Watch.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const videoData = {
  id: 1,
  title: 'Introduction to Forex Course',
  previewVideo: 'videoUrl',
  videos: [
    {
      id: 2,
      title: 'Introduction to forex',
      videoUrl: 'videourl',
    },
    {
      id: 3,
      title: 'Introduction to forex',
      videoUrl: 'videourl',
    },
    {
      id: 4,
      title: 'Introduction to forex',
      videoUrl: 'videourl',
    },
    {
      id: 5,
      title: 'Introduction to forex',
      videoUrl: 'videourl',
    },
    {
      id: 6,
      title: 'Introduction to forex',
      videoUrl: 'videourl',
    },
  ],
}

export default function WatchPage({}) {
  const [courseList, setCourseList] = useState('')
  const [watching, setWatching] = useState(false)

  const startWatching = () => {
    setWatching(!watching)
  }

  return (
    <main className={style.main}>
      <aside className={style.courseList}>
        <header>Course content</header>

        <nav>
          {videoData.videos.map((video) => (
            <div
              key={video.id}
              onClick={startWatching}
            >
              <FontAwesomeIcon icon={faPlayCircle} className={style.icon} />
              <h5 className={style.title}>{video.title}</h5>
            </div>
          ))}
        </nav>
      </aside>
      <section className={style.videoSection}>
        <header className={style.header}>
          <Link href='/'><a>OptimusPro</a></Link>
          <h5 className={style.courseTitle}>{videoData.title}</h5>
          <h5>Dashboard</h5>
        </header>

        <div className={style.videoCard}>
          {videoData.videos.map((item) => (
            <h2 key={item.id}>{item.videoUrl}</h2>
          ))}
        </div>
      </section>
    </main>
  )
}
