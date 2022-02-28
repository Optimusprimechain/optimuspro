import Course from './Course'
import style from '@/styles/Course.module.css'

export default function CourseList({data}) {
  console.log(data)

  return (
    <section className={style.section}>
      {data.map((course) => (
        <Course
          key={course.id}
          href={`/courses/review/${course.id}`}
          title={course.title}
          author={course.intructor}
          desc={course.desc}
          img={course.img}
          alt={course.title}
          isPaid={course.isPaid}
          amount={course.amount}
          // progress={course.progress}
        />
      ))}
    </section>
  )
}
