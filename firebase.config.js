// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTx2OCSeGSNXFnEKOR7x50HsWhu8WhOwk",
  authDomain: "chatzilla-978e2.firebaseapp.com",
  projectId: "chatzilla-978e2",
  storageBucket: "chatzilla-978e2.firebasestorage.app",
  messagingSenderId: "328729885474",
  appId: "1:328729885474:web:c8e7ba5cb5d357268a037b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;