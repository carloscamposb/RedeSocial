import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCn5Qv57YXqfOHTV2fZzApy17eLsNr3Unc",
  authDomain: "projeto-tiktok-42819.firebaseapp.com",
  projectId: "projeto-tiktok-42819",
  storageBucket: "projeto-tiktok-42819.appspot.com",
  messagingSenderId: "723567594094",
  appId: "1:723567594094:web:d34243f2225e1c9aeff47f",
  measurementId: "G-S7GDKXZRCB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;