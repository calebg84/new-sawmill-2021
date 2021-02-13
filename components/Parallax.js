import { Parallax } from 'react-parallax'

const ParallaxComp = ({ children }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage='/man_running_mill.jpg'
      bgImageAlt='man running mill'
      strength={300}
    >
      {children}
    </Parallax>
  )
}

export default ParallaxComp
