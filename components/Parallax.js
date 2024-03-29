import { Parallax } from 'react-parallax'

const ParallaxComp = ({ children, ...props }) => {
  return (
    <Parallax
      bgImage={props.imgPath}
      bgImageAlt='parallax image'
      strength={400}
    >
      {children}
    </Parallax>
  )
}

export default ParallaxComp
