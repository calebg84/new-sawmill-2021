import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Parallax } from 'react-parallax'
import Navbar from './../components/BootstrapNavbar'

export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <Parallax
        bgImage='/facundo-sosa-Dpe3ue2Jd0U-unsplash.jpg'
        bgImageAlt='sawmill background'
        strength={200}
      >
        <div className='navbar-overlay'>
          <Navbar />
        </div>
        <div style={{ height: '75vh' }}></div>
      </Parallax>
      <div style={{ height: '75vh' }}></div>
    </div>
  )
}
