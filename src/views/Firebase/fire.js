import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAF1D_eeutSqN33kFH8woqd-jkwZveVtts",
    authDomain: "learning-birds-database.firebaseapp.com",
    databaseURL: "https://learning-birds-database.firebaseio.com",
    projectId: "learning-birds-database",
    storageBucket: "learning-birds-database.appspot.com",
    messagingSenderId: "882993570142",
    appId: "1:882993570142:web:98272ca34344bbd5"
  };

var fire = firebase.initializeApp(config);
export default fire;