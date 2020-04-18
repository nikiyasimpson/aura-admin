import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCSsBX50EzfyL0yLkCWR3KAUVaYbBuwtvA",
  authDomain: "gdglittlerock.firebaseapp.com",
  databaseURL: "https://gdglittlerock.firebaseio.com",
  projectId: "gdglittlerock",
  storageBucket: "gdglittlerock.appspot.com",
  messagingSenderId: "866892688655",
  appId: "1:866892688655:web:a848d8a9bd812fb6da627a"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore:firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};