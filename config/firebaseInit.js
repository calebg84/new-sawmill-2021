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
