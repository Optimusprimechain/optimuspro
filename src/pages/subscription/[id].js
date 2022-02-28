import { useState, useEffect } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Card from '@/components/common/Card'
import Hyperlink from '@/components/common/Hyperlink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import GradientButton from '@/components/common/GradientButton'
import GradientBar from '@/components/common/GradientBar'
import Label from '@/components/form/Label'
import FormInput from '@/components/form/FormInput'
import FormSuccess from '@/components/form/FormSuccess'
import FormError from '@/components/form/FormError'
import style from '@/styles/login.module.css'
import styles from '@/styles/subscribe.module.css'
import Navbar from '@/components/Navbar'


const SubscriptionPlanSchema = Yup.object().shape({
  fullName: Yup.string().required('First name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

const plansData = [
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

export default function SubscriptionPage() {
  const [subscriptionSuccess, setSubscriptionSuccess] = useState()
  const [subscriptionError, setSubscriptionError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [redirectOnLogin, setRedirectOnLogin] = useState(false)

  const submitCredentials = async (credentials) => {
    // try {
    //   setIsLoading(true)
    //   const { data } = await publicFetch.post('signup', credentials)
    //   console.log(data)
    //   setSignupSuccess(data.message)
    //   setSignupError('')
    //   setTimeout(() => {
    //     setRedirectOnLogin(true)
    //   }, 700)
    // } catch (error) {
    //   setLoginLoading(false)
    //   const { data } = error.response
    //   setSignupError(data.message)
    //   setSignupSuccess('')
    // }
  }

  return (
    <>
      <Navbar />
      <main className={style.gridContainer}>
        <section className={style.form}>
          <div className='w-full p-8 sm:pt-8'>
            <GradientBar />
            <Card>
              <div className='flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md w-full'>
                  <div>
                    <h2 className='mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900'>
                      Sign up now
                    </h2>
                  </div>
                  <Formik
                    initialValues={{
                      fullName: '',
                      email: '',
                      password: '',
                    }}
                    onSubmit={(values) => submitCredentials(values)}
                    validationSchema={SubscriptionPlanSchema}
                  >
                    {() => (
                      <Form className='mt-8'>
                        {subscriptionSuccess && (
                          <FormSuccess text={subscriptionSuccess} />
                        )}
                        {subscriptionError && (
                          <FormError text={subscriptionError} />
                        )}
                        <input type='hidden' name='remember' value='true' />
                        <div>
                          <div className='mb-2'>
                            <div className='mb-1'>
                              <Label text='First Name' />
                            </div>
                            <FormInput
                              ariaLabel='Full Name'
                              name='fulltName'
                              type='text'
                              placeholder='Full Name'
                            />
                          </div>
                          <div className='mb-2'>
                            <div className='mb-1'>
                              <Label text='Email address' />
                            </div>
                            <FormInput
                              ariaLabel='Email address'
                              name='email'
                              type='email'
                              placeholder='Email address'
                            />
                          </div>
                          <div>
                            <div className='mb-1'>
                              <Label text='Password' />
                            </div>
                            <FormInput
                              ariaLabel='Password'
                              name='password'
                              type='password'
                              placeholder='Password'
                            />
                          </div>
                        </div>

                        <div className='mt-6'>
                          <GradientButton
                            type='submit'
                            text='Sign Up'
                            loading={isLoading}
                          />
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </Card>
          </div>
        </section>
        <section className={style.hero}>
        {plansData.map((item) => (
            <div key={item.id} className={styles.subCard}>
              <div className={styles.cardHead}>
                <h2 className='text-2xl pt-5 mb-5 font-bold leading-6 text-dark'>
                  {item.title}
                </h2>

                <p className='text mb-3 leading-6 text-gray-600 text-left'>
                  {item.description}
                </p>

                <h2 className='text-4xl my-8 leading-6 font-bold text-dark text-left'>
                  ${item.amount}
                </h2>
              </div>
              <div className={styles.cardBody}>
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
        </section>
      </main>
    </>
  )
}
