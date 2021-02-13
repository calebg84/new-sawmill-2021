import Button from 'react-bootstrap/Button'
import React from 'react'
import styles from '../styles/Button.module.css'
import { motion } from 'framer-motion'

const ButtonComp = ({ children, ...props }) => {
  return (
    <motion.div
      className={styles.div}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 1,
      }}
    >
      <button className={styles[props.shade]}>{children}</button>
    </motion.div>
  )
}

export default ButtonComp
