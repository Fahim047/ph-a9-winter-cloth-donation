import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleIcon from '../../assets/icons/google.svg';
import { useAuth } from '../../hooks';
const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const { user, setUser, handleSignInWithGoogle } = useAuth();
	const location = useLocation();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
	};
	const handleGoogleLogin = () => {
		handleSignInWithGoogle().then((res) => {
			navigate(location?.state ? location.state : '/');
		});
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-[#F5F5F5]">
			<div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
				<div className="bg-primary text-white text-center py-4">
					<h2 className="text-xl font-bold">Login</h2>
				</div>
				<form onSubmit={handleSubmit} className="p-6 space-y-4">
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full bg-inherit px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary"
						required
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full bg-inherit px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary"
						required
					/>
					<button
						type="submit"
						className="w-full bg-secondary text-white py-2 rounded hover:bg-secondary-dark transition duration-300"
					>
						Login
					</button>

					<div className="flex items-center my-3">
						<div className="border-t border-gray-300 flex-grow"></div>
						<span className="px-3 text-gray-500">or</span>
						<div className="border-t border-gray-300 flex-grow"></div>
					</div>

					<button
						type="button"
						className="w-full border border-primary text-primary py-2 rounded flex items-center justify-center hover:bg-primary/10 transition duration-300 gap-2"
						onClick={handleGoogleLogin}
					>
						<img src={GoogleIcon} alt="google icon" />
						Continue with Google
					</button>

					<div className="text-center">
						<p className="text-gray-600">
							Don&apos;t have an account?
							<button
								type="button"
								className="text-primary ml-1 hover:text-primary-dark"
								onClick={() => navigate('/register')}
							>
								Register
							</button>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
