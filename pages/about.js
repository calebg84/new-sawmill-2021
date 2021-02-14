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
          <h2>Who Are "We"</h2>
          So, "we" is primarily one man... me (Caleb). But I usually say "we"
          because I have a few close friends who help me (a ton) in a variety of
          ways with the business. I've been milling logs now for 7 years.
          Professionally for 6. I started out as a woodworker and when my wife
          and I bought some land with timber, I invested in a Norwood sawmill
          and began milling logs for my own use. Things grew from there and
          eventually I sold the Norwood and purchased a Wood-Mizer portable,
          fully-hydraulic mill. Milling isn't a full-time operation for me. I'm
          blessed by the Lord to have a job I love and a side-business that I
          also love.
        </motion.div>
        <motion.div variants={childVariants} className={styles.aboutOne}>
          <h2>What "We" Hope To Be</h2>
          My vision for this business isn't complex. I enjoy helping people and
          I enjoy running a business. I hope that Heartland Sawmill allows me to
          do both to the best of my ability. I also love taking a log (sometimes
          a very ugly log) and processing it into something useful and often
          beautiful. I'm not looking to get rich, but my time, labor, and
          equipment have a cost associated with them that I try to recoop. I'd
          be thrilled if the business continued to grow to the point that I
          could hire a few guys to help. Providing jobs or other means to bless
          folks in the community would definitely fulfill my grandest visions
          for this business.
        </motion.div>
      </div>
      <motion.div variants={childVariants} className={styles.videos}>
        <h2>See Us In Action</h2>
        <div className={styles.youtubeVideosWrapper}>
          <div className={`${styles.topLeft} ${styles.gridBoxes}`}>
            <iframe src='https://www.youtube.com/embed/mnFAa0VG0qM?rel=0'></iframe>
          </div>
          <div className={`${styles.topRight} ${styles.gridBoxes}`}>
            <iframe src='https://www.youtube.com/embed/TajFOYD2yQs?rel=0'></iframe>
          </div>
          <div className={`${styles.bottomLeft} ${styles.gridBoxes}`}>
            <iframe src='https://www.youtube.com/embed/p5N-CAT_gFU?rel=0'></iframe>
          </div>
          <div className={`${styles.bottomRight} ${styles.gridBoxes}`}>
            <iframe src='https://www.youtube.com/embed/BXyzT4Jxty0?rel=0'></iframe>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default about
