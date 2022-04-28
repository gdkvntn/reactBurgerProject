import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';



const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBvGqXzgOIYQgWHkHHi5W7shto_alFXeDM",
  authDomain: "very-hot-burgers-3fc0b.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-3fc0b-default-rtdb.firebaseio.com",
  projectId: "very-hot-burgers-3fc0b",
  storageBucket: "very-hot-burgers-3fc0b.appspot.com",
  messagingSenderId: "27615295010",
  appId: "1:27615295010:web:972bd1a287387e31ea7c7b"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

















// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBvGqXzgOIYQgWHkHHi5W7shto_alFXeDM",
//   authDomain: "very-hot-burgers-3fc0b.firebaseapp.com",
//   databaseURL: "https://very-hot-burgers-3fc0b-default-rtdb.firebaseio.com",
//   projectId: "very-hot-burgers-3fc0b",
//   storageBucket: "very-hot-burgers-3fc0b.appspot.com",
//   messagingSenderId: "27615295010",
//   appId: "1:27615295010:web:972bd1a287387e31ea7c7b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const base = reBase.createClass(app.database())
// const db = getFirestore(app);

// async function getBurgers(db) {
//     const citiesCol = collection(db, 'burgers');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }
  

// export default base