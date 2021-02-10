import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <div className={styles.backgroundImage}>
        <div className={styles.heroText}>
          <h1>
            <span>Welcome to </span>Heartland Sawmill
          </h1>
          <p>
            We're a portable sawmill business serving Central Illinois including
            Bloomington, Peoria, Champaign, Decatur and the surrounding areas.
          </p>
        </div>
      </div>
      <div style={{ height: '150vh' }}>
        <h1>Some Stuff</h1>
      </div>
    </>
  )
}
