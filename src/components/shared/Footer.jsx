import { Heart } from 'lucide-react';

const FooterLink = ({ text }) => (
	<li>
		<a href="#" className="text-gray-300 hover:text-white transition-colors">
			{text}
		</a>
	</li>
);

const Footer = () => {
	return (
		<footer className="bg-primary text-white">
			<div className="max-w-6xl mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Brand Section */}
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<Heart className="h-8 w-8 text-secondary" />
							<span className="font-bold text-xl">Winter Warmth</span>
						</div>
						<p className="text-sm text-gray-300">
							Bringing warmth to those in need across Bangladesh
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<FooterLink text="About Us" />
							<FooterLink text="How It Works" />
							<FooterLink text="Impact Stories" />
							<FooterLink text="Join As Volunteer" />
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Contact</h3>
						<ul className="space-y-2">
							<FooterLink text="support@winterwarmth.org" />
							<FooterLink text="+880 1234-567890" />
							<FooterLink text="Dhaka, Bangladesh" />
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Newsletter</h3>
						<div className="flex flex-col space-y-2">
							<input
								type="email"
								placeholder="Enter your email"
								className="px-4 py-2 rounded-lg text-gray-800"
							/>
							<button className="bg-[#FF7F50] hover:bg-[#ff6b3d] px-4 py-2 rounded-lg transition-colors">
								Subscribe
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
					<p>© 2024 Winter Warmth. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;