// import styles from '@/styles/global.module.css'
import style from '@/styles/subscribe.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import PageTitle from '../common/PageTitle'
import GradientLink from '../common/GradientLink'
// import Button from '../ButtonFull'

const plansData = [
  {
    id: 1,
    title: 'Optimus Starter Plan',
    description: 'Starter plan good for beginners',
    amount: '99.99',
    items: [
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
    ],
  },
  {
    id: 2,
    title: 'Optimus Sliver Plan',
    description: 'Starter plan good for beginners',
    amount: '199.99',
    items: [
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
    ],
  },
  {
    id: 3,
    title: 'Optimus Gold Plan',
    description: 'Starter plan good for beginners',
    amount: '399.99',
    items: [
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
      {
        title: 'Lorem ipsum dolor sit amet consect.',
      },
    ],
  },
]

export default function SubscriptionSection() {
  return (
    <section className={style.section}>
      <div className="container">
        <div className='container-md text-center'>
          <PageTitle title='Membership Subscription Plans' />
          <p className='text-lg mb-10 leading-6 text-gray-900 text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quia
            placeat animi, doloribus enim vero nemo.
          </p>
        </div>
        
        <div className={style.gridContainer}>
          {plansData.map((item) => (
            <div key={item.id} className={style.card}>
              <div className={style.cardHead}>
                <h2 className='text-2xl pt-5 mb-5 font-bold leading-6 text-dark'>
                  {item.title}
                </h2>

                <p className='text mb-3 leading-6 text-gray-600 text-left'>
                  {item.description}
                </p>

                <h2 className='text-4xl my-8 leading-6 font-bold text-dark text-left'>
                  ${item.amount}
                </h2>

                <GradientLink href={`/subscription/${item.id}`} size="lg" text="Subscribe Now" />
              </div>
              <div className={style.cardBody}>
                <h2 className='text-sm my-4 font-bold leading-6 text-dark'>
                  WHAT&apos;S INCLUDED
                </h2>

                <ul>
                  {item.items.map((list, i) => (
                    <li key={i}>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <p>{list.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
