import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDHVIrgjpOxFfvl9q8X8CfuPBbdtiW-by0",
  authDomain: "school-attendence-4b9dc.firebaseapp.com",
  databaseURL: "https://school-attendence-4b9dc-default-rtdb.firebaseio.com",
  projectId: "school-attendence-4b9dc",
  storageBucket: "school-attendence-4b9dc.appspot.com",
  messagingSenderId: "957208915373",
  appId: "1:957208915373:web:f23140c018380c217c4524"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default  firebase.database()


  