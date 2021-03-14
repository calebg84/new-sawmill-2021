import Fade from 'react-bootstrap/Fade'
import ContactForm from '../components/ContactForm'
import styles from '../styles/Contact.module.css'

const contact = () => {
  return (
    <div className={styles.contactWrapper} style={{ marginTop: '10rem' }}>
      <div className={styles.contactOne}>
        <h3 className='text-center'>Contact Heartland Sawmill</h3>
        <br />
        <br />
        <div className='text-center'>Phone: (309) 853-7497</div>
        <div className='text-center'>Email: heartlandsawmill@gmail.com</div>
        <div className='text-center'>
          <a
            href='https://www.youtube.com/channel/UC_17-xfDovREZsvK8rbBljA'
            target='_blank'
          >
            Youtube
          </a>
        </div>
        <div className='text-center'>
          <a href='https://www.facebook.com/heartlandsawmill' target='_blank'>
            Facebook
          </a>
        </div>
        <br />
        <br />
        <div className='text-center'>
          Or use the form on this page to send us your questions.
        </div>
      </div>
      <div className={styles.contactOne}>
        <ContactForm />
      </div>
    </div>
  )
}

export default contact
