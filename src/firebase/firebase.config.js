// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export const googleProvider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC9ZO9IjD05YBHSm5ukO_1Hmd21b3YVKXI',
	authDomain: 'winter-warmth-288ad.firebaseapp.com',
	projectId: 'winter-warmth-288ad',
	storageBucket: 'winter-warmth-288ad.firebasestorage.app',
	messagingSenderId: '248059207484',
	appId: '1:248059207484:web:cc24df407ce4d7238fc839',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
