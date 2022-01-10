import firebase from 'firebase';

//initialize your database
var firebaseConfig = {
  apiKey: "AIzaSyB4tjVTR7SwoCgdF6YzV7aZI0b0yV1iZP4",
  authDomain: "school-attendance-app-e5e3d.firebaseapp.com",
  projectId: "school-attendance-app-e5e3d",
  storageBucket: "school-attendance-app-e5e3d.appspot.com",
  messagingSenderId: "920856880196",
  appId: "1:920856880196:web:eb417109d95442015bc811"
};


firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  