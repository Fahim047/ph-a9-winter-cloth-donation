import { Calendar, Heart, Home, LogIn, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../hooks';

const Navbar = () => {
	const { user, handleLogOut } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	const [isLoggedIn] = useState(false);
	const navLinks = [
		{
			text: 'Home',
			icon: <Home size={16} />,
			href: '/',
		},
		{
			text: 'Campaigns',
			icon: <Calendar size={16} />,
			href: '/campaigns',
		},
	];
	return (
		<nav className="sticky top-0 z-50 bg-primary text-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<NavLink to="/">
						<div className="flex items-center space-x-2">
							<Heart className="h-8 w-8 text-secondary" />
							<span className="font-bold text-xl">Winter Warmth</span>
						</div>
					</NavLink>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<NavLink
								key={link.text}
								to={link.href}
								className="flex items-center space-x-1 hover:text-[#62B6CB] transition-colors"
							>
								{link.icon}
								<span>{link.text}</span>
							</NavLink>
						))}
						{user?.accessToken ? (
							<div className="avatar flex gap-4 justify-center items-center">
								<div className="size-10 mx-auto rounded-full">
									<img src={user?.photoURL} className="object-fit-cover" />
								</div>
								<button
									className="bg-transparent border border-secondary hover:bg-secondary-dark px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
									onClick={() =>
										handleLogOut().then(() =>
											Swal.fire('Success', 'Logout Successful', 'success')
										)
									}
								>
									Logout
								</button>
							</div>
						) : (
							<NavLink
								to="/login"
								className="bg-secondary hover:bg-secondary-dark px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
							>
								<LogIn size={18} />
								<span>Login</span>
							</NavLink>
						)}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button onClick={() => setIsOpen(!isOpen)} className="p-2">
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden pb-4">
						<div className="flex flex-col space-y-4">
							{navLinks.map((link) => (
								<NavLink
									key={link.text}
									to={link.href}
									className="flex items-center space-x-2 hover:text-[#62B6CB] transition-colors"
								>
									{link.icon}
									<span>{link.text}</span>
								</NavLink>
							))}
							{isLoggedIn ? (
								<div className="avatar">
									<div className="w-24 mx-auto rounded-full">
										<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
									</div>
								</div>
							) : (
								<NavLink
									to="/login"
									className="bg-secondary hover:bg-secondary-dark px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
								>
									<LogIn size={18} />
									<span>Login</span>
								</NavLink>
							)}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
