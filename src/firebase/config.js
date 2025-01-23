// src/firebase/config.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Replace the below config with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3catDLtAut2vdQEDShQPnOUMUhYyG8jI",
    authDomain: "quiz-38833.firebaseapp.com",
    projectId: "quiz-38833",
    storageBucket: "quiz-38833.firebasestorage.app",
    messagingSenderId: "960525167235",
    appId: "1:960525167235:web:028b6a56b5bf5469c189b6",
    measurementId: "G-TJMDQS394S"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
