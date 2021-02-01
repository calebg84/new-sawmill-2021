import { Parallax } from 'react-parallax'

const ParallaxComp = ({ children }) => {
  return (
    <Parallax
      bgImage='/facundo-sosa-Dpe3ue2Jd0U-unsplash.jpg'
      bgImageAlt='sawmill background'
      strength={200}
    >
      {children}
    </Parallax>
  )
}

export default ParallaxComp
