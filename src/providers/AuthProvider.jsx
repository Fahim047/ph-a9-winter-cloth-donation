import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts';
import auth, { googleProvider } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const handleSignInWithGoogle = async () => {
		return signInWithPopup(auth, googleProvider);
	};
	const handleLogOut = () => {
		return signOut(auth);
	};
	const authInfo = {
		user,
		setUser,
		handleSignInWithGoogle,
		handleLogOut,
		loading,
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log(user);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
