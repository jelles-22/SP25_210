
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAqecBNofRdTTNSxNxfB65XCxHEoHmhOAI",
    authDomain: "jelles-final-db.firebaseapp.com",
    projectId: "jelles-final-db",
    storageBucket: "jelles-final-db.firebasestorage.app",
    messagingSenderId: "178479578247",
    appId: "1:178479578247:web:f8ece38adb2cf8af5bcc22",
    measurementId: "G-P0W9RGHV68"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

