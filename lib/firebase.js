import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAcqewaCq0quEmbiKsPwEPnMpxNob6WiGw',
  authDomain: 'nextfire-app-cb45b.firebaseapp.com',
  projectId: 'nextfire-app-cb45b',
  storageBucket: 'nextfire-app-cb45b.appspot.com',
  messagingSenderId: '607272118956',
  appId: '1:607272118956:web:27898b8f5dae879abd0d09',
  measurementId: 'G-FMVQL4BSRC'
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

/** `
* Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername (username) {
  const usersRef = firestore.collection('users')
  const query = usersRef.where('username', '==', username).limit(1)
  const userDoc = (await query.get()).docs[0]
  return userDoc
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis

/** `
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON (doc) {
  const data = doc.data()
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis()
  }
}

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED
