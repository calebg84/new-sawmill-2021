import Head from 'next/head'
import { Nav } from 'react-bootstrap'
import Navbar from './BootstrapNavbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
      <div className='footer'>Copyright 2021</div>
    </>
  )
}

export default Layout
