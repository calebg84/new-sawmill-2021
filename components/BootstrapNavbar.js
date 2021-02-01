// import { Row, Spacer, Link as LinkWrapper } from '@geist-ui/react'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useState } from 'react'

const navLinks = [
  { text: 'Home', link: '' },
  { text: 'About', link: 'about' },
  { text: 'Services', link: 'services' },
  { text: 'Lumber', link: 'lumber' },
  { text: 'Contact Us', link: 'contact' },
]

const HeaderNavbar = () => {
  const [toggled, setToggled] = useState(false)
  console.log('toggled is: ', toggled)
  return (
    <div
      className={toggled ? 'navbar-overlay expanded-overlay' : 'navbar-overlay'}
    >
      <Navbar
        collapseOnSelect
        bg='none'
        expand='xl'
        className='fixed-top'
        sticky='top'
        onToggle={(expanded) => {
          if (expanded) {
            setToggled(true)
          } else {
            setToggled(false)
          }
        }}
      >
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
    </div>
  )
}

export default HeaderNavbar
