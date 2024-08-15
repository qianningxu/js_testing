// Import the Firebase modules using ES module syntax
import { initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_X6xvu_ceZBCiHWshOBhJSBRRBfksBac",
    authDomain: "assemblies-86001.firebaseapp.com",
    databaseURL: "https://assemblies-86001-default-rtdb.firebaseio.com",
    projectId: "assemblies-86001",
    storageBucket: "assemblies-86001.appspot.com",
    messagingSenderId: "171402636334",
    appId: "1:171402636334:web:cb5e32888b0bb19d1b83bf",
    measurementId: "G-EJYSHFWRET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export { app, functions };
