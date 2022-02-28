import Layout from '@/components/Layout'
import { useState, useEffect } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Card from '@/components/common/Card'
import Hyperlink from '@/components/common/Hyperlink'
import GradientButton from '@/components/common/GradientButton'
import Label from '@/components/form/Label'
import FormInput from '@/components/form/FormInput'
import FormSuccess from '@/components/form/FormSuccess'
import FormError from '@/components/form/FormError'
import style from '@/styles/login.module.css'
import heroImg from '@/public/images/signup.webp'
import Image from 'next/image'

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('First name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

export default function ProfilePage({}) {
  const [isSuccess, setIsSuccess] = useState()
  const [isError, setIsError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [redirectOnLogin, setRedirectOnLogin] = useState(false)

  const submitCredentials = async (credentials) => {
    try {
      setIsLoading(true)
      const { data } = await publicFetch.post('signup', credentials)
      console.log(data)
      setIsSuccess(data.message)
      setIsError('')
      setTimeout(() => {
        setRedirectOnLogin(true)
      }, 700)
    } catch (error) {
      setIsLoading(false)
      const { data } = error.response
      setIsError(data.message)
      setIsSuccess('')
    }
  }

  return (
    <Layout>
      <section className={style.form}>
        <div className='w-full p-8 sm:pt-8'>
          <Card>
            <div className='flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8'>
              <div className='max-w-md w-full'>
              <h2 className='mb-2 text-center text-2xl leading-9 font-extrabold text-gray-700'>
                Profile Settings
              </h2>
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
                      {isSuccess && <FormSuccess text={isSuccess} />}
                      {isError && <FormError text={isError} />}
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
                        <div className='mb-2'>
                          <div className='mb-1'>
                            <Label text='Change profile' />
                          </div>
                          <FormInput
                            ariaLabel='Profile'
                            name='profile'
                            type='file'
                          />
                        </div>
                        <div className='mt-4'>
                          <Label text='Reset Password' />
                        </div>
                        <hr />
                        <div>
                          <div className='mb-1 mt-2'>
                            <Label text='New Password' />
                          </div>
                          <FormInput
                            ariaLabel='New Password'
                            name='New password'
                            type='password'
                            placeholder='New Password'
                          />
                        </div>
                        <div>
                          <div className='mb-1 mt-2'>
                            <Label text='Confirm Password' />
                          </div>
                          <FormInput
                            ariaLabel='Confirm Password'
                            name='Confirm password'
                            type='password'
                            placeholder='Confirm Password'
                          />
                        </div>
                      </div>

                      <div className='mt-6'>
                        <GradientButton
                          type='submit'
                          text='Save Changes'
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
    </Layout>
  )
}
