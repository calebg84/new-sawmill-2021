import { Row, Spacer, Link as LinkWrapper } from '@geist-ui/react'
import Link from 'next/link'

const navLinks = [
  { text: 'Home', link: '' },
  { text: 'About', link: 'about' },
  { text: 'Services', link: 'services' },
  { text: 'Lumber', link: 'lumber' },
  { text: 'Contact Us', link: 'contact' },
]

const Navbar = () => {
  return (
    <>
      <Row align='middle' style={{ marginTop: '15px' }}>
        <Spacer x={3} />
        <h2>Heartland Sawmill (insert logo here)</h2>
        <Spacer x={13} />
        {navLinks.map((navLink) => {
          return (
            <>
              <Link href={`/${navLink.link}`}>
                <LinkWrapper underline>{navLink.text}</LinkWrapper>
              </Link>
              <Spacer x={2.75} />
            </>
          )
        })}
      </Row>
    </>
  )
}

export default Navbar
