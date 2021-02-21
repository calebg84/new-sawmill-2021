import { db } from '../config/firebaseInit'
import { startCase, capitalize } from 'lodash'

const slabFinder = async () => {
  let slabList = []
  return db
    .collection('slabs')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          stockID: doc.data().stockID || null,
          imageURI: doc.data().imageURI || null,
          maxWidth: doc.data().maxWidth || null,
          minWidth: doc.data().minWidth || null,
          price: doc.data().price || null,
          species: startCase(doc.data().species) || null,
          length: doc.data().length || null,
          description: capitalize(doc.data().description) || null,
          thickness: doc.data().thickness || null,
          sold: doc.data().sold || null,
          kiln: doc.data().kiln || null,
          green: doc.data().green || null,
          videoUrlFront: doc.data().videoUrlFront || null,
          videoUrlBack: doc.data().videoUrlBack || null,
          hidden: doc.data().hidden || null,
        }
        if (data.hidden === true) {
          null
        } else {
          slabList.push(data)
        }
      })
    })
    .then(() => {
      return slabList
    })
}

export { slabFinder }
