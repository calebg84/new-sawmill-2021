import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactForm = () => {
  return (
    <div>
      <Form
        id='contactform'
        action='https://formsubmit.io/send/4f13827f-5efd-4b1f-800f-6b01ba7a68e0'
        method='POST'
      >
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control required name='name' type='text' placeholder='Name' />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name='email'
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>
        <Form.Group controlId='formBasicPhone'>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name='phone'
            type='text'
            placeholder='Enter Phone Number'
          />
        </Form.Group>
        <Form.Group controlId='formBasicMessage'>
          <Form.Label>Message</Form.Label>
          <Form.Control name='message' as='textarea' rows={3} />
        </Form.Group>
        <Button variant='outline-dark' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
