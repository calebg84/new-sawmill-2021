import Carousel from 'react-bootstrap/Carousel'
import styles from '../styles/SlabDetail.module.css'

const imageCarousel = ({ slab }) => {
  return (
    <div className={styles.carouselImage}>
      <Carousel>
        {slab &&
          slab.images &&
          slab.images.length > 0 &&
          slab.images.map((image) => {
            return (
              <Carousel.Item key={image} interval={3000}>
                <img
                  key={image}
                  className='d-block w-100'
                  src={image}
                  alt='slab photo'
                />
              </Carousel.Item>
            )
          })}
      </Carousel>
    </div>
  )
}

export default imageCarousel
