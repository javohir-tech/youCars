import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAf78v1sLbCys2zZIueuiYUssTAqOHiOJo',
  authDomain: 'you-car-41ad1.firebaseapp.com',
  projectId: 'you-car-41ad1',
  storageBucket: 'you-car-41ad1.firebasestorage.app',
  messagingSenderId: '917077155091',
  appId: '1:917077155091:web:080178802921af36400ee6',
  measurementId: 'G-WMH03S9LBK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth();
export { db };
