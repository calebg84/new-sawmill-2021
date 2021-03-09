import { useState } from 'react'
import { motion } from 'framer-motion'
import { db } from '../../config/firebaseInit'
import { startCase, capitalize } from 'lodash'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from '../../styles/Lumber.module.css'
import LumberInventoryTable from '../../components/LumberInventoryTable'
import Parallax from '../../components/Parallax'
import SlabCard from '../../components/SlabCard'

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

async function lumberFinder() {
  let lumberList = []
  return db
    .collection('lumber')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          price: doc.data().price || null,
          species: doc.data().species || null,
          quantity: doc.data().quantity || null,
          thickness: doc.data().thickness || null,
          hidden: doc.data().hidden || null,
        }
        if (data.hidden === true) {
          null
        } else {
          lumberList.push(data)
        }
      })
    })
    .then(() => {
      return lumberList
    })
}

async function slabFinder() {
  let slabList = []
  return db
    .collection('slabs')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          stockID: doc.data().stockID || null,
          imageURI: doc.data().imageURI || null,
          maxWidth: doc.data().maxWidth || null,
          minWidth: doc.data().minWidth || null,
          price: doc.data().price || null,
          species: startCase(doc.data().species) || null,
          length: doc.data().length || null,
          description: capitalize(doc.data().description) || null,
          thickness: doc.data().thickness || null,
          sold: doc.data().sold || null,
          kiln: doc.data().kiln || null,
          green: doc.data().green || null,
          ebayLink: doc.data().ebayLink || null,
          videoUrlFront: doc.data().videoUrlFront || null,
          videoUrlBack: doc.data().videoUrlBack || null,
          hidden: doc.data().hidden || null,
        }
        if (data.hidden === true) {
          null
        } else {
          slabList.push(data)
        }
      })
    })
    .then(() => {
      return slabList
    })
}

const lumber = ({ unsoldSlabs: slabs, lumberData }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible'>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Current Lumber Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LumberInventoryTable lumber={lumberData} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <motion.div variants={childVariants} className={styles.parallaxWrapper}>
        <Parallax imgPath='/boards2.jpg'>
          <div className={styles.header}></div>
        </Parallax>
      </motion.div>
      <motion.div variants={childVariants} className={styles.introParagraphs}>
        <div className={styles.flexChild}>
          <h2>Hardwood Lumber</h2>
          Our inventory of rough sawn hardwood lumber varies from week to week.
          Click the link below or give us a call to see what we've currently got
          in-stock. If there's something special that you're looking for, give
          us a call. We have a few log sources who might have or be able to find
          what you're needing.
          <br />
          <br />
          <a style={{ fontWeight: 'bold' }} onClick={handleShow}>
            <h4>Click Here to See Current Lumber Inventory</h4>
          </a>
        </div>
        <div className={styles.flexChild}>
          <h2>Live-Edge Slabs</h2>
          In addition to our rough sawn lumber, we also sell live-edge slabs for
          all different size table tops or counter tops. You can scroll through
          our current inventory of slabs below. If you find one you like, give
          us a call and reference the stock number to confirm we still have it
          in stock.
          <br />
          <br />
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>
                Enter your email here to receive updates when new lumber or
                slabs are added
              </Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
      </motion.div>
      <motion.div variants={childVariants} className={styles.slabGrid}>
        {slabs.map((slab) => {
          return (
            <div key={slab.id} className={styles.flexChild}>
              <SlabCard slab={slab} />
            </div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

async function retry(fn, n) {
  for (let i = 0; i < n; i++) {
    try {
      console.log(`attempt #${i}`)
      return await fn()
    } catch {}
  }

  throw new Error(`Failed retrying ${n} times`)
}

export async function getServerSideProps(context) {
  const slabData = await retry(slabFinder, 3)
  const lumberData = await retry(lumberFinder, 3)

  let unsoldSlabs
  if (!slabData || !lumberData) {
    slabData = await retry(slabFinder, 3)
    lumberData = await retry(lumberFinder, 3)
  } else {
    unsoldSlabs = slabData.filter((slab) => !slab.sold)
    unsoldSlabs.sort((a, b) => (a.stockID > b.stockID ? 1 : -1))
    lumberData.sort((a, b) => (a.species > b.species ? 1 : -1))
  }

  return {
    props: { unsoldSlabs, lumberData },
  }
}

export default lumber
