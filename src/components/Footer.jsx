function Footer() {
	return (
		<footer className="w-full bg-gray-900 text-gray-300">
			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					<div>
						<p className="text-2xl font-bold text-white">
							Samm<span className="text-amber-500">unat</span>
						</p>
						<p className="mt-4 text-gray-400">
							Sammunat is a technology-driven company focused on
							building reliable and scalable digital solutions for
							businesses across industries.
						</p>
					</div>

					<div>
						<h4 className="text-lg font-semibold text-white">
							Quick Links
						</h4>
						<ul className="mt-4 space-y-2">
							<li className="hover:text-white cursor-pointer transition">
								<a href="#about">About Us</a>
							</li>
							<li className="hover:text-white cursor-pointer transition">
								<a href="#services">Services</a>
							</li>
							<li className="hover:text-white cursor-pointer transition">
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold text-white">
							Get in Touch
						</h4>
						<ul className="mt-4 space-y-2">
							<li>127 N Higgins Ave Ste 307d</li>
							<li>Missoula, MT 59802, USA</li>
							<li className="hover:cursor-pointer">
								contact@sammunat.com
								<a href="mailto:contact@sammunat.com"></a>
							</li>
							<li>+971 58874 9689</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold text-white">
							Newsletter
						</h4>
						<p className="mt-4 text-gray-400">
							Subscribe to receive updates, news, and insights
							from our team.
						</p>

						<div className="mt-4 flex">
							<input
								type="email"
								placeholder="Email address"
								className="w-full border-2 border-amber-50 bg-amber-50 rounded-l-lg px-4 py-2 text-gray-900 focus:outline-blue-100"
							/>
							<button className="rounded-r-lg bg-amber-600 px-4 py-2 text-white hover:bg-amber-700 transition">
								Join
							</button>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
					<p>© 2025 Sammunat. All rights reserved.</p>
					<p className="mt-2 md:mt-0">Privacy Policy</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
