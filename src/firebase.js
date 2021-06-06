import firebase from 'firebase/app'
import "firebase/auth"


const auth = firebase.initializeApp({

    apiKey: "AIzaSyBx9cvNb8or2A3vjq4v9DgJ4QLxKcC_Lyk",
    authDomain: "chatapp-3aed6.firebaseapp.com",
    projectId: "chatapp-3aed6",
    storageBucket: "chatapp-3aed6.appspot.com",
    messagingSenderId: "720786338464",
    appId: "1:720786338464:web:984d572f74fa3aa86e8fc5"

}).auth()

export default auth