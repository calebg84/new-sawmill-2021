import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Parallax from './../components/Parallax'
import Navbar from './../components/BootstrapNavbar'

export default function Home() {
  return (
    <>
      <div>
        <Parallax>
          <div style={{ height: '100vh' }}></div>
        </Parallax>
        <Navbar />
      </div>
      <div data-aos='fade-left' style={{ height: '50vh' }}>
        <h1>Some Stuff</h1>
      </div>
    </>
  )
}
