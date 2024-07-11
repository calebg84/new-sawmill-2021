import 'firebase/firestore'
import 'firebase/storage'
import firebaseConfig from './fire-config'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

let app
let db
let storage
try {
  app = initializeApp(firebaseConfig)
  db = getFirestore(app)
  storage = getStorage(app)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
export { storage, db }

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
