import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDZeOmRVs7fGrnC78zPZIAJVHmBBQzqhZo',
	authDomain: 'ylfyt-f1249.firebaseapp.com',
	projectId: 'ylfyt-f1249',
	storageBucket: 'ylfyt-f1249.appspot.com',
	messagingSenderId: '993698831786',
	appId: '1:993698831786:web:e2c6a2b1d34529e01c9fd3',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
