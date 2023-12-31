import Footer from '@/sections/Footer'
import Navbar from '@/sections/Navbar'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
   <>
    <Head>
        <title>Healthimi</title>
    </Head>
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow'>{children}</main>
        <Footer />
    </div>
   </>
  )
}

export default Layout