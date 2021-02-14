import Fade from 'react-bootstrap/Fade'
import { db } from '../config/firebaseInit'
import { startCase, capitalize, sortBy } from 'lodash'

const lumber = () => {
  let slabList = []
  db.collection('slabs')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          stockID: doc.data().stockID,
          imageURI: doc.data().imageURI,
          maxWidth: doc.data().maxWidth,
          minWidth: doc.data().minWidth,
          price: doc.data().price,
          species: startCase(doc.data().species),
          length: doc.data().length,
          description: capitalize(doc.data().description),
          thickness: doc.data().thickness,
          sold: doc.data().sold,
          kiln: doc.data().kiln,
          green: doc.data().green,
          videoUrlFront: doc.data().videoUrlFront,
          videoUrlBack: doc.data().videoUrlBack,
          hidden: doc.data().hidden,
        }
        if (data.hidden === true) {
          null
        } else {
          slabList.push(data)
        }
      })
    })
    .then(() => {
      console.log('slabList is: ', slabList)
    })

  return (
    <Fade appear in>
      <div>lumber page</div>
    </Fade>
  )
}

export default lumber
