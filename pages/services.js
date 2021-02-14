import Fade from 'react-bootstrap/Fade'
import Link from 'next/link'
import Image from 'next/image'
import MillingRateTable from '../components/MillingRateTable'
import FirewoodTable from '../components/FirewoodPricesTable'
import Parallax from '../components/Parallax'
import styles from '../styles/Services.module.css'
import { motion } from 'framer-motion'

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

const services = () => {
  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible'>
      <motion.div variants={childVariants} className={styles.parallaxWrapper}>
        <Parallax imgPath='/boards.jpg'>
          <div className={styles.header}></div>
        </Parallax>
      </motion.div>
      <div className={styles.aboutContent}>
        <motion.div variants={childVariants} className={styles.aboutOne}>
          <h2>Custom Sawmilling</h2>
          <div className={styles.imageWrapper}>
            <Image
              src='/man_milling_from_loading_side.jpg'
              alt='milling picture'
              width={400}
              height={270}
            />
          </div>
          Our sawmill can handle logs up to 20 ft long and 3 ft in diameter. It
          can cut logs into most any dimension you could request. Whether it's
          1/8" veneer or 10"x10" timbers, our mill can handle it. Our mill is
          portable so we can come to you or you can bring your logs to us. It
          saves a little money to bring the logs to us. Check out the rates
          table below and see our portable sawmill in action by checking out our{' '}
          <Link key='About' href={`/about`}>
            About page.
          </Link>
        </motion.div>
        <motion.div variants={childVariants} className={styles.aboutOne}>
          <h2>Kiln Dried Hardwood Lumber</h2>
          <div className={styles.imageWrapper}>
            <Image
              src='/stickered_slabs.jpg'
              alt='lumber picture'
              width={400}
              height={270}
            />
          </div>
          In addition to custom milling, we sell a variety of kiln dried
          hardwood lumber that we have personally cut and dried in our solar
          kiln. Inventory varies from week to week so give us a call to find out
          what we've got in-stock.
        </motion.div>
        <motion.div variants={childVariants} className={styles.aboutOne}>
          <h2>Firewood</h2>
          <div className={styles.imageWrapper}>
            <Image
              src='/firewood.jpg'
              alt='firewood picture'
              width={400}
              height={270}
            />
          </div>
          Not every log is fit for the sawmill, so any logs that don't make the
          lumber cut (pun intended) get processed into firewood. We sell mixed
          hardwood firewood by the bundle or face-cord. We also offer local
          delivery for an additional fee. Firewood rates are listed below.
        </motion.div>
        <motion.div variants={childVariants} className={styles.aboutOne}>
          <h2>Log Buyer</h2>
          <div className={styles.imageWrapper}>
            <Image src='/logs.jpg' alt='log picture' width={400} height={270} />
          </div>
          Do we buy logs? Yes. Will we buy your log? Maybe. As I've mentioned
          before, we're a small, part-time sawmill. We don't have the resources
          to buy lots of logs at top-dollar. So, that means we're picky and
          cheap when it comes to buying logs. That being said, if you've got
          logs you want to get rid of, give us a call and we'd be glad to
          discuss it.
        </motion.div>
      </div>
      <motion.div variants={childVariants} className={styles.videos}>
        <div className={styles.rateTables}>
          <div>
            <h3>Sawmill Rates</h3>
            <MillingRateTable></MillingRateTable>
          </div>
          <div>
            <h3>Firewood Prices</h3>
            <FirewoodTable></FirewoodTable>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default services
