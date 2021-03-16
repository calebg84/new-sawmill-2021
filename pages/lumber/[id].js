import { useRouter } from 'next/router'
import Button from '../../components/Button'
import Carousel from '../../components/ImageCarousel'
import styles from '../../styles/SlabDetail.module.css'

const SlabDetail = () => {
  const router = useRouter()
  const passedProps = router.query

  return (
    <div>
      <div className={styles.firstRow}>
        <div className={styles.carouselImage}>
          <Carousel slab={passedProps} />
        </div>
        <div className={styles.slabDetail}>
          <h2>{`${passedProps.species} Slab`}</h2>
          <p>{`Slab ID: #${passedProps.stockID}`}</p>
          <h3>{`$${passedProps.price}`}</h3>
          {passedProps.shipping ? (
            <h4 style={{ color: 'blue' }}>{`This slab ships for free!`}</h4>
          ) : null}
          <span>
            <span style={{ fontWeight: 'bold' }}>Status: </span>
            {passedProps.kiln
              ? 'In the kiln'
              : passedProps.green
              ? 'Air drying'
              : 'Kiln Dried and ready'}
          </span>
          <p>
            <span style={{ fontWeight: 'bold' }}>Notes: </span>
            {passedProps.description}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Length: </span>
            {passedProps.length} inches
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Thickness: </span>
            {passedProps.thickness} inches
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Max Width: </span>
            {passedProps.maxWidth} inches
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Min Width: </span>
            {passedProps.minWidth} inches
          </p>
          {passedProps.ebayLink ? (
            <p style={{ width: '10rem' }}>
              <a
                href={passedProps.ebayLink}
                target='_blank'
                className={styles.anchor}
              >
                <Button
                  style={{ color: 'black', fontWeight: 'bold' }}
                  shade='fourth'
                >
                  Buy This Slab
                </Button>
              </a>
            </p>
          ) : null}
        </div>
      </div>
      {passedProps.videoUrlFront ? (
        <h2 style={{ padding: '0 15rem', textDecoration: 'underline' }}>
          Slab Videos
        </h2>
      ) : null}
      <div className={styles.videos}>
        <div>
          {passedProps.videoUrlFront ? (
            <iframe
              src={`https://www.youtube.com/embed/${passedProps.videoUrlFront.slice(
                17,
                28
              )}?rel=0`}
            />
          ) : null}
          {passedProps.videoUrlBack ? (
            <iframe
              src={`https://www.youtube.com/embed/${passedProps.videoUrlBack.slice(
                17,
                28
              )}?rel=0`}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default SlabDetail
