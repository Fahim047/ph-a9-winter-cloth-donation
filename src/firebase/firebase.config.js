// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export const googleProvider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_Firebase_ApiKey,
	authDomain: import.meta.env.VITE_Firebase_AuthDomain,
	projectId: import.meta.env.VITE_Firebase_ProjectId,
	storageBucket: import.meta.env.VITE_Firebase_StorageBucket,
	messagingSenderId: import.meta.env.VITE_Firebase_MessagingSenderId,
	appId: import.meta.env.VITE_Firebase_AppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;