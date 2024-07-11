import React from 'react'
import { useRouter } from 'next/router'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import styles from '../styles/SlabCard.module.css'

const SlabCard = ({ slab }) => {
  const router = useRouter()
  let urls = []
  slab.imageURI.map((image) => {
    urls.push(image.src)
  })
  return (
    <div>
      <Card style={{ width: '18rem', height: '32rem', paddingTop: '1rem' }}>
        <Card.Img
          className={styles.cardImage}
          variant='top'
          src={slab.imageURI[0].src}
        />
        <Card.Body>
          <Card.Title>{`${slab.species} Slab - $${slab.price}`}</Card.Title>
          <Card.Text>{slab.description.substring(0, 100)}...</Card.Text>
          <Button
            onClick={() => {
              router.push({
                pathname: '/lumber/[id]',
                query: { id: slab.id, images: [...urls], ...slab },
              })
            }}
            variant='outline-dark'
          >
            See Details
          </Button>
          {`   `}
          {slab.shipping ? (
            <Badge pill variant='info'>
              Free Shipping!
            </Badge>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  )
}

export default SlabCard
