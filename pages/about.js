import Fade from 'react-bootstrap/Fade'
import Parallax from '../components/Parallax'
import styles from '../styles/About.module.css'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
    // transition: {
    //   staggerChildren: 2,
    // },
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

const about = () => {
  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible'>
      <motion.div variants={childVariants} className={styles.parallaxWrapper}>
        <Parallax>
          <div className={styles.header}></div>
        </Parallax>
      </motion.div>
      <div className={styles.aboutContent}>
        <motion.div variants={childVariants} className={styles.aboutOne}>
          <h2>Hardwood Lumber</h2>
          If you need hardwood or custom cut material, give us a call and see
          what we've got in the inventory. We usually have a few varieties of
          lumber and live-edge slabs on-hand.
        </motion.div>
        <motion.div variants={childVariants} className={styles.aboutOne}>
          <h2>Custom Milling</h2>
          At Heartland Sawmill, we can mill logs up to 3 ft in diameter and 20
          ft long into whatever board sizes best fit your needs. Even if you've
          got logs larger than our mill can handle, we have partners that can
          help.
        </motion.div>
        <motion.div variants={childVariants} className={styles.aboutOne}>
          <h2>Log Drop</h2>
          Are you a tree service looking for a place to take your logs? Give us
          a call and we will take your hardwoods off your hands. We also
          purchase premium logs (clear walnuts, cherries, white oaks, hard
          maples) if they're good quality and size.
        </motion.div>
      </div>
      <motion.div variants={childVariants} className={styles.videos}>
        <h2>See Us In Action</h2>
        <div className={styles.youtubeVideosWrapper}>
          <div className={styles.youtubeVideos}>
            <iframe src='https://www.youtube.com/embed/mnFAa0VG0qM?rel=0'></iframe>
          </div>
          <div className={styles.youtubeVideos}>
            <iframe src='https://www.youtube.com/embed/TajFOYD2yQs?rel=0'></iframe>
          </div>
          <div className={styles.youtubeVideos}>
            <iframe src='https://www.youtube.com/embed/p5N-CAT_gFU?rel=0'></iframe>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default about
