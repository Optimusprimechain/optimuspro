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
import heroImg from '@/public/images/signup.webp'
import Navbar from '@/components/Navbar'

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('First name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

export default function SignupPage({}) {
  const [signupSuccess, setSignupSuccess] = useState()
  const [signupError, setSignupError] = useState()
  const [loginLoading, setLoginLoading] = useState(false)
  const [redirectOnLogin, setRedirectOnLogin] = useState(false)

  const submitCredentials = async (credentials) => {
    try {
      setLoginLoading(true)
      const { data } = await publicFetch.post('signup', credentials)
      console.log(data)
      setSignupSuccess(data.message)
      setSignupError('')
      setTimeout(() => {
        setRedirectOnLogin(true)
      }, 700)
    } catch (error) {
      setLoginLoading(false)
      const { data } = error.response
      setSignupError(data.message)
      setSignupSuccess('')
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
              <div className='flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md w-full'>
                  <div>
                    <h2 className='mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900'>
                      Sign up for an account
                    </h2>
                    <p className='text-gray-600 text-center'>
                      Already have an account?{' '}
                      <Hyperlink to='login' text='Log in now' />
                    </p>
                  </div>
                  <Formik
                    initialValues={{
                      fullName: '',
                      email: '',
                      password: '',
                    }}
                    onSubmit={(values) => submitCredentials(values)}
                    validationSchema={SignupSchema}
                  >
                    {() => (
                      <Form className='mt-8'>
                        {signupSuccess && <FormSuccess text={signupSuccess} />}
                        {signupError && <FormError text={signupError} />}
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
            alt='SignupAvatar'
            height='500'
            width='500'
            placeholder='blur'
          />
        </section>
      </main>
    </>
  )
}
