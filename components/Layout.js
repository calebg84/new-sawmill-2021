import Head from 'next/head'
import { Nav } from 'react-bootstrap'
import Navbar from './BootstrapNavbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Heartland Sawmill</title>
        <link rel='icon' href='/heartland_sawmill_logo_v2.png' />
      </Head>
      <Navbar />
      {children}
      <div style={{ textAlign: 'center' }} className='footer'>
        Copyright &copy; 2021, Heartland Sawmill, All Rights Reserved; Photos
        courtesy of Ryan Maxwell rtmaxwell54@gmail.com
      </div>
    </>
  )
}

export default Layout
