import Head from 'next/head'
import Link from 'next/link'
import styles from '../app/styles/Home.module.css'
import Button from '../app/components/Button'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <div className={styles.backgroundImage}>
        <div className={styles.heroText}>
          <h1>
            <motion.span
              initial={{ opacity: 0, y: '-20rem' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Welcome to{' '}
            </motion.span>
          </h1>
          <motion.h1
            initial={{ opacity: 0, x: '-50rem' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Heartland Sawmill
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1 }}
          >
            We're a portable sawmill business serving Central Illinois
            (Bloomington, Peoria, Champaign, Decatur). We also sell hardwood
            lumber and live-edge slabs (as inventory allows).{' '}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className={styles.buttons}
          >
            <Link className={styles.anchor} key='About' href={`/about`}>
              <Button shade='third'>Learn About Us</Button>
            </Link>

            <Link className={styles.anchor} key='Lumber' href={`/lumber`}>
              <Button shade='third'>See Our Lumber</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}
