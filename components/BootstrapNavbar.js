// import { Row, Spacer, Link as LinkWrapper } from '@geist-ui/react'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const navLinks = [
  { text: 'Home', link: '' },
  { text: 'About', link: 'about' },
  { text: 'Services', link: 'services' },
  { text: 'Lumber', link: 'lumber' },
  { text: 'Contact Us', link: 'contact' },
]

const HeaderNavbar = () => {
  return (
    <Navbar bg='none' expand='lg' className='fixed-top' sticky='top'>
      <Navbar.Brand className='ml-5' href='/'>
        <h2 style={{ color: '#9ac8a8' }}>Heartland Sawmill</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto mx-auto'>
          {navLinks.map((navLink) => {
            return (
              <Link key={navLink.link} href={`/${navLink.link}`} passHref>
                <Nav.Link className='px-4'>{navLink.text}</Nav.Link>
              </Link>
            )
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default HeaderNavbar
