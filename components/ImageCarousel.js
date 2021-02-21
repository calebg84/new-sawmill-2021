import Carousel from 'react-bootstrap/Carousel'
import styles from '../styles/ImageCarousel.module.css'

const imageCarousel = ({ slab }) => {
  return (
    <div className={styles.carouselImage}>
      <Carousel>
        {slab.images.map((image) => {
          return (
            <Carousel.Item key={image} interval={1000}>
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
