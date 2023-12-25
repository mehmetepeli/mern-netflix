import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDngOE7odMm0XWOXivN8ivj7P8FT1ETnRE",
    authDomain: "netflixmern-27f9c.firebaseapp.com",
    projectId: "netflixmern-27f9c",
    storageBucket: "netflixmern-27f9c.appspot.com",
    messagingSenderId: "482357416391",
    appId: "1:482357416391:web:78d81dd52ed1bd6f4c09e2",
    measurementId: "G-E9J2T0KBCM"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
