import Carousel from 'react-bootstrap/Carousel'
import styles from '../styles/SlabDetail.module.css'

const ImageCarousel = ({ slab, width = '55rem' }) => {
  return (
    <div className={styles.carouselImage} style={{ width, margin: '0 auto' }}>
      <Carousel>
        {slab &&
          slab.images &&
          slab.images.length > 0 &&
          slab.images.map((image) => {
            return (
              <Carousel.Item key={image} interval={3000}>
                <img
                  key={image}
                  className='d-block'
                  src={image}
                  alt='slab photo'
                  style={{ width: '55rem', height: 'auto', objectFit: 'cover' }}
                />
              </Carousel.Item>
            )
          })}
      </Carousel>
    </div>
  )
}

export default ImageCarousel
