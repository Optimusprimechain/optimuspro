import { useState, useEffect } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Card from '@/components/common/Card'
import Hyperlink from '@/components/common/Hyperlink'
import GradientButton from '@/components/common/GradientButton'
import GradientBar from '@/components/common/GradientBar'
import Label from '@/components/form/Label'
import FormInput from '@/components/form/FormInput'
import FormSuccess from '@/components/form/FormSuccess'
import FormError from '@/components/form/FormError'
import style from '@/styles/login.module.css'
import Image from 'next/image'
import heroImg from '@/public/images/login.webp'
import Navbar from '@/components/Navbar'

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
})

export default function LoginPage() {
  const [loginSuccess, setLoginSuccess] = useState()
  const [loginError, setLoginError] = useState()
  const [loginLoading, setLoginLoading] = useState(false)

  const submitCredentials = async (credentials) => {
    try {
      setLoginLoading(true)
    } catch (error) {
      setLoginLoading(false)
      const { data } = error.response
      setLoginError(data.message)
      setLoginSuccess(null)
    }
  }

  return (
    <>
      <Navbar />
      <main className={style.gridContainer}>
        <section className={style.form}>
          <div className='w-full p-8 sm:pt-8'>
            <GradientBar />
            <Card>
              <div className='flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md w-full'>
                  <div>
                    <h2 className='mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900'>
                      Log in to your account
                    </h2>
                    <p className='text-gray-600 text-center'>
                      Don&apos;t have an account?{' '}
                      <Hyperlink to='signup' text='Sign up now' />
                    </p>
                  </div>

                  <Formik
                    initialValues={{
                      email: '',
                      password: '',
                    }}
                    onSubmit={(values) => submitCredentials(values)}
                    validationSchema={LoginSchema}
                  >
                    {() => (
                      <Form className='mt-8'>
                        {loginSuccess && <FormSuccess text={loginSuccess} />}
                        {loginError && <FormError text={loginError} />}
                        <div>
                          <div className='mb-2'>
                            <div className='mb-1'>
                              <Label text='Email' />
                            </div>
                            <FormInput
                              ariaLabel='Email'
                              name='email'
                              type='text'
                              placeholder='Email'
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

                        <div className='mt-6 flex justify-start'>
                          <div className='text-sm leading-5'>
                            <Hyperlink
                              to='forgot-password'
                              text='Forgot your password?'
                            />
                          </div>
                        </div>

                        <div className='mt-6'>
                          <GradientButton
                            type='submit'
                            text='Log In'
                            loading={loginLoading}
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
          <Image
            src={heroImg}
            alt='LoginAvatar'
            height='500'
            width='500'
            placeholder='blur'
          />
        </section>
      </main>
    </>
  )
}
