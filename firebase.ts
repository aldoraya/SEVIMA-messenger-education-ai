import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyC0MG8bTHLoIl-bX5P0aOzq18zQJgnitPE",
    authDomain: "education-ai-8436a.firebaseapp.com",
    projectId: "education-ai-8436a",
    storageBucket: "education-ai-8436a.appspot.com",
    messagingSenderId: "937455674900",
    appId: "1:937455674900:web:4151976f0f854a04272901"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
