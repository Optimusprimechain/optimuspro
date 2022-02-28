import style from '@/styles/serviceSection.module.css'
import Link from 'next/link'
import PageTitle from '../common/PageTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUserGraduate, faFunnelDollar } from '@fortawesome/free-solid-svg-icons'

export default function ServiceSection() {
  return (
    <section className={style.exploreSection}>
      <div className='container sm:container-md mx-auto py-20'>
        <div className='text-center'>
          <div className='container-md'>
            <PageTitle title='What We Do.' />
            <p className='text-lg mb-10 leading-6 text-gray-900 text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quia
              placeat animi, doloribus enim vero nemo.
            </p>
          </div>
          <div className={style.container}>
            <div className={style.gridContainer}>
              <div className={style.cardFx}>
                <div className='rounded-md p-10 text-center'>
                  <div className='iconBox'>
                    <FontAwesomeIcon icon={faUserGraduate} className='iconSize' />
                  </div>
                  <h2 className='text-2xl leading-6 mt-6 py-5 font-bold'>
                    Academy
                  </h2>

                  <p className='text leading-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur libero recusandae est exercitationem nihil
                  </p>
                </div>
              </div>
              <div className={style.cardCp}>
                <div className='rounded-md p-10 text-center'>
                  <div className='iconBox'>
                    <FontAwesomeIcon icon={faUsers} className='iconSize' />
                  </div>
                  <h2 className='text-2xl leading-6 mt-6 py-5 font-bold'>
                    Community
                  </h2>

                  <p className='text leading-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur libero recusandae est exercitationem nihil
                  </p>
                </div>
              </div>
              <div className={style.cardcom}>
                <div className='rounded-md p-10 text-center'>
                  <div className='iconBox'>
                    <FontAwesomeIcon icon={faFunnelDollar} className='iconSize' />
                  </div>
                  <h2 className='text-2xl font-bold leading-6 mt-6 py-5'>
                    Investment
                  </h2>

                  <p className='text leading-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur libero recusandae est exercitationem nihil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
