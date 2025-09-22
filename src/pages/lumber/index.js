import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { db } from '../../app/config/firebaseInit'
import { collection, getDocs } from 'firebase/firestore'
import { startCase, capitalize } from 'lodash'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import styles from '../../app/styles/Lumber.module.css'
import LumberInventoryTable from '../../app/components/LumberInventoryTable'
import Parallax from '../../app/components/Parallax'
import SlabCard from '../../app/components/SlabCard'

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

const lumber = ({ slabData, lumberData }) => {
  const [show, setShow] = useState(false)
  const [unsoldSlabs, setUnsoldSlabs] = useState([])
  const [slabList, setSlabList] = useState([])
  const [speciesListing, setSpeciesListing] = useState([])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const speciesSelection = async (e) => {
    if (e == 'clear') {
      setSlabList(unsoldSlabs)
    } else {
      await setSlabList(
        unsoldSlabs.filter((slab) => {
          return slab.species == e
        })
      )
    }
  }

  useEffect(() => {
    let species = []
    let unsoldSlabs = slabData.filter((slab) => !slab.sold)
    unsoldSlabs.sort((a, b) => (a.stockID > b.stockID ? 1 : -1))
    lumberData.sort((a, b) => (a.species > b.species ? 1 : -1))
    unsoldSlabs.map((slab) => {
      species.push(slab.species)
    })
    setUnsoldSlabs(unsoldSlabs)
    setSlabList(unsoldSlabs)
    setSpeciesListing([...new Set(species)])
  }, [slabData, lumberData])
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
          <Button variant='outline-dark' onClick={handleShow}>
            Click Here to See Current Lumber Inventory
          </Button>
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
          <DropdownButton
            variant='outline-dark'
            id='dropdown-basic-button'
            title='Filter Slabs'
            onSelect={(e) => {
              speciesSelection(e)
            }}
          >
            <Dropdown.Item eventKey={'clear'}>Clear Filter</Dropdown.Item>
            {speciesListing.map((spec) => {
              return (
                <Dropdown.Item key={spec} eventKey={spec}>
                  {spec}
                </Dropdown.Item>
              )
            })}
          </DropdownButton>
        </div>
      </motion.div>
      <motion.div variants={childVariants} className={styles.slabGrid}>
        {slabList.map((slab) => {
          return (
            <div key={slab.id} className={styles.flexChild}>
              <SlabCard key={slab.id} slab={slab} />
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
      return await fn()
    } catch (error) {
      console.error(error)
      // throw new Error(`Failed retrying ${n} times`)
    }
  }
}

export async function getServerSideProps() {
  const slabSnapshot = await getDocs(collection(db, 'slabs'))
  const slabData = slabSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  const lumberSnapshot = await getDocs(collection(db, 'lumber'))
  const lumberData = lumberSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return {
    props: { slabData, lumberData },
  }
}

export default lumber
