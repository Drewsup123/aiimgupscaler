// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    FIREBASE_API_KEY,
    FIREBASE_APP_ID,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_MEASUREMENT_ID,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
} from "../constants/keys.constant";
// TODO: Add SDKs for Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const firebaseClient = initializeApp(firebaseConfig);
firebaseClient.automaticDataCollectionEnabled = true;
export const db = getFirestore(firebaseClient);
export const auth = getAuth(firebaseClient);
export const functions = getFunctions(firebaseClient);
export const createPortalLink = httpsCallable(
    functions,
    "ext-firestore-stripe-payments-createPortalLink"
);
const analytics = getAnalytics(firebaseClient);
