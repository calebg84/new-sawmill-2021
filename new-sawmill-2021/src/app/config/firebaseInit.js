import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
import firebaseConfig from './fire-config'

try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
const storage = firebase.storage()
const db = firebase.firestore()
export { storage, db, firebase as default }

// import firebase from 'firebase'
// import 'firebase/firestore'
// import 'firebase/storage'
// import firebaseConfig from './fire-config'

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// } else {
//   firebase.app(firebaseConfig) // if already initialized, use that one
// }

// const storage = firebase.storage()
// const db = firebase.firestore()

// export { storage, db, firebase as default }
