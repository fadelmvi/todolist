import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDHG6LpGO7osXW3fDh0FSYohaASMJC13Q4",
  authDomain: "management-tool-6fe7c.firebaseapp.com",
  projectId: "management-tool-6fe7c",
  storageBucket: "management-tool-6fe7c.appspot.com",
  messagingSenderId: "1090439712992",
  appId: "1:1090439712992:web:b89f76993e4d7794fbc085"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

export { app, database, firebaseConfig }