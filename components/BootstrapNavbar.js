import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
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
          <Image
            src='/heartland_sawmill_logo_v2.png'
            width='85'
            height='85'
            className='d-inline-block
          align-top ml-5'
            alt='React Bootstrap logo'
            roundedCircle
            style={{ backgroundColor: 'white' }}
          />
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
