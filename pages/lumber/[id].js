import { useRouter } from 'next/router'
import Carousel from '../../components/ImageCarousel'
import styles from '../../styles/ImageCarousel.module.css'

const SlabDetail = () => {
  const router = useRouter()
  const passedProps = router.query

  return (
    <div className={styles.carouselImage}>
      <Carousel slab={passedProps} />
    </div>
  )
}

export default SlabDetail
