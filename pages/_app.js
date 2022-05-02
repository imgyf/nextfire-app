import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { UserContext } from '../lib/context'
import { Toaster } from 'react-hot-toast'

import { useUserData } from '../lib/hooks'

export default function MyApp ({ Component, pageProps }) {
  const userData = useUserData()

  return (
    <>
      <Head>
        <title>NextFire App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <UserContext.Provider value={userData}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  )
}