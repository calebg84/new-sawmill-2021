import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Parallax from './../components/Parallax'
import Navbar from './../components/BootstrapNavbar'

export default function Home() {
  return (
    <div>
      <Parallax>
        <div style={{ height: '100vh' }}></div>
      </Parallax>
      <div className='navbar-overlay'>
        <Navbar />
      </div>
      <div style={{ height: '75vh' }}></div>
    </div>
  )
}
