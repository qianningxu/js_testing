// Import the Firebase modules
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Your Firebase configuration (from the config file)
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

// Get a reference to the storage service
const storage = getStorage(app);

// Create a reference to your FAISS file
const faissFileRef = ref(storage, 'embeddings/123/canvas1/1741040536/index.pkl');

// Get the download URL
getDownloadURL(faissFileRef)
  .then((url) => {
    console.log("Download URL:", url);
    // You can now use this URL to download the file
  })
  .catch((error) => {
    console.error("Error getting download URL:", error);
  });