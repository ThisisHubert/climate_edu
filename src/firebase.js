import 'firebase/auth'
import 'firebase/firestore'
import * as firebase from 'firebase/app'


const firebaseConfig = {
      apiKey: "AIzaSyAs2-Y8hzL2FEb8VQ79o2cEw2cYXAc2IxY",
      authDomain: "climate-edu.firebaseapp.com",
      databaseURL: "https://climate-edu.firebaseio.com",
      projectId: "climate-edu",
      storageBucket: "climate-edu.appspot.com",
      messagingSenderId: '897609061549',
      appId: '1:897609061549:web:d843afeb53a455ad9e2224',
      measurementId: "G-6S34BB4SLD"
}
firebase.initializeApp(firebaseConfig)


const db = firebase.firestore()
const auth = firebase.auth()
// const database = firebase.database()


// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  // database,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}