import Fade from 'react-bootstrap/Fade'
import Parallax from '../components/Parallax'
import styles from '../styles/About.module.css'

const about = () => {
  return (
    <>
      <div className={styles.parallaxWrapper}>
        <Parallax>
          <div className={styles.header}></div>
        </Parallax>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutOne}>
          <h2>Hardwood Lumber</h2>
          If you need hardwood or custom cut material, give us a call and see
          what we've got in the inventory. We usually have a few varieties of
          lumber and live-edge slabs on-hand.
        </div>
        <div className={styles.aboutOne}>
          <h2>Custom Milling</h2>
          At Heartland Sawmill, we can mill logs up to 3 ft in diameter and 20
          ft long into whatever board sizes best fit your needs. Even if you've
          got logs larger than our mill can handle, we have partners that can
          help.
        </div>
        <div className={styles.aboutOne}>
          <h2>Log Drop</h2>
          Are you a tree service looking for a place to take your logs? Give us
          a call and we will take your hardwoods off your hands. We also
          purchase premium logs (clear walnuts, cherries, white oaks, hard
          maples) if they're good quality and size.
        </div>
      </div>
      <div className={styles.videos}>
        <h2>See Us In Action</h2>
        Are you a tree service looking for a place to take your logs? Give us a
        call and we will take your hardwoods off your hands. We also purchase
        premium logs (clear walnuts, cherries, white oaks, hard maples) if
        they're good quality and size.
      </div>
    </>
  )
}

export default about
