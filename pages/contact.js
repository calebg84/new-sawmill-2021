import Fade from 'react-bootstrap/Fade'

const contact = () => {
  return (
    <div style={{ marginTop: '15rem' }}>
      <form
        id='contactform'
        action='https://formsubmit.io/send/4f13827f-5efd-4b1f-800f-6b01ba7a68e0'
        method='POST'
      >
        <input name='name' type='text' id='name' />
        <input name='email' type='email' id='email' />
        <textarea name='comment' id='comment' rows='3'></textarea>

        <input value='Submit' type='submit' />
      </form>
    </div>
  )
}

export default contact
