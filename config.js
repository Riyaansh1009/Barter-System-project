import firebase from 'firebase';
require('@firebase/firestore');


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCOONhbP6oTZmPhSCz58YQjBZwrrb7g08o",
    authDomain: "barter-system-project.firebaseapp.com",
    projectId: "barter-system-project",
    storageBucket: "barter-system-project.appspot.com",
    messagingSenderId: "501021200484",
    appId: "1:501021200484:web:451c28233ef806f2aa8f71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()