import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAcqewaCq0quEmbiKsPwEPnMpxNob6WiGw",
  authDomain: "nextfire-app-cb45b.firebaseapp.com",
  projectId: "nextfire-app-cb45b",
  storageBucket: "nextfire-app-cb45b.appspot.com",
  messagingSenderId: "607272118956",
  appId: "1:607272118956:web:27898b8f5dae879abd0d09",
  measurementId: "G-FMVQL4BSRC"
}
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
