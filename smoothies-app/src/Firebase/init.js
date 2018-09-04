  import firebase from 'firebase';
  import firestore from 'firebase/firestore';
  
  // Initialize Firebase
let config = {
    apiKey: "AIzaSyDqIfdLaB0Zp2jU2bPSswST_nxrLKQxR44",
    authDomain: "vue-smoothies-9f6bf.firebaseapp.com",
    databaseURL: "https://vue-smoothies-9f6bf.firebaseio.com",
    projectId: "vue-smoothies-9f6bf",
    storageBucket: "vue-smoothies-9f6bf.appspot.com",
    messagingSenderId: "678103430129"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots : true })

// export firestore database
export default firebaseApp.firestore();