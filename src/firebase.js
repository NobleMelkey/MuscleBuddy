import {initializeApp} from 'firebase/app';

import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  // Your Firebase config object here
  apiKey: "AIzaSyC9fpxCITWG8YJDHmep-Ab_IpUWPh65HrE",
  authDomain: "login-2b76c.firebaseapp.com",
  projectId: "login-2b76c",
  storageBucket: "login-2b76c.appspot.com",
  messagingSenderId: "881856276337",
  appId: "1:881856276337:web:409b14f9bdf254367078d0",
  measurementId: "G-L9906ZRCNN"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
export const auth = getAuth (app);
