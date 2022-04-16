import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextFire App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}
