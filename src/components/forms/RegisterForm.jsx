import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '../../assets/icons/google.svg';
const RegisterForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-[#F5F5F5]">
			<div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
				<div className="bg-primary text-white text-center py-4">
					<h2 className="text-xl font-bold">Register</h2>
				</div>
				<form onSubmit={handleSubmit} className="p-6 space-y-4">
					<input
						type="text"
						placeholder="Your name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="w-full bg-inherit px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary"
						required
					/>
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

					<input
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						className="w-full bg-inherit px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary"
						required
					/>
					<button
						type="submit"
						className="w-full bg-secondary text-white py-2 rounded hover:bg-secondary-dark transition duration-300"
					>
						Register
					</button>

					<div className="flex items-center my-3">
						<div className="border-t border-gray-300 flex-grow"></div>
						<span className="px-3 text-gray-500">or</span>
						<div className="border-t border-gray-300 flex-grow"></div>
					</div>

					<button
						type="button"
						className="w-full border border-primary text-primary py-2 rounded flex items-center justify-center hover:bg-primary/10 transition duration-300 gap-2"
					>
						<img src={GoogleIcon} alt="google icon" />
						Continue with Google
					</button>

					<div className="text-center">
						<p className="text-gray-600">
							Already have an account?
							<button
								type="button"
								className="text-[#1B4965] ml-1 hover:text-[#62B6CB]"
								onClick={() => navigate('/login')}
							>
								Login
							</button>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;