import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/context/AuthProvider'
import { FetchProvider } from '@/context/FetchProvider'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <FetchProvider>
          <Toaster />
          <Component {...pageProps} />
        </FetchProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
