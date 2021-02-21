import { motion } from 'framer-motion'
import { slabFinder } from '../../services/firebaseFuncs'
import styles from '../../styles/Lumber.module.css'
import Parallax from '../../components/Parallax'
import SlabCard from '../../components/SlabCard'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      when: 'beforeChildren',
    },
  },
}

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const lumber = ({ data: slabs }) => {
  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible'>
      <motion.div variants={childVariants} className={styles.parallaxWrapper}>
        <Parallax imgPath='/boards2.jpg'>
          <div className={styles.header}></div>
        </Parallax>
      </motion.div>
      <motion.div variants={childVariants} className={styles.introParagraphs}>
        <div className={styles.flexChild}>
          <h2>Hardwood Lumber</h2>
          Our inventory of rough sawn hardwood lumber varies from week to week.
          Give us a call to see what we've currently got in-stock. If there's
          something special that you're looking for, give us a call. We have a
          few log sources who might have or be able to find what you're needing.
        </div>
        <div className={styles.flexChild}>
          <h2>Live-Edge Slabs</h2>
          In addition to our rough sawn lumber, we also sell live-edge slabs for
          all different size table tops or counter tops. You can scroll through
          our current inventory of slabs below. If you find one you like, give
          us a call and reference the stock number to confirm we still have it
          in stock.
        </div>
      </motion.div>
      <motion.div variants={childVariants} className={styles.slabGrid}>
        {slabs.length > 0
          ? slabs.map((slab) => {
              return (
                <div key={slab.id} className={styles.flexChild}>
                  <SlabCard slab={slab} />
                </div>
              )
            })
          : null}
      </motion.div>
    </motion.div>
  )
}

export async function getServerSideProps(context) {
  const data = await slabFinder()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}

export default lumber
