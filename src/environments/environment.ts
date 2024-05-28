import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  version: '0.0.1',

  firebaseConfig: {
    apiKey: "AIzaSyAWufZr_3fkkJuVgjmkbYETj5lNML3fuCU",
    authDomain: "capassotech.firebaseapp.com",
    databaseURL: "https://capassotech-default-rtdb.firebaseio.com",
    projectId: "capassotech",
    storageBucket: "capassotech.appspot.com",
    messagingSenderId: "127439714938",
    appId: "1:127439714938:web:639f2e3e959637e29999c3",
    measurementId: "G-YZJ426MMB6"
  },
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);