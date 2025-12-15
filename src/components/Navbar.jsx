function Navbar() {
	return (
		<div className="w-full sticky top-0 bg-[hsl(0,0%,42%)] z-50 py-1">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
				<p className="font-bold text-3xl tracking-tight">
					Samm<span className="text-amber-500">unat</span>
				</p>

				<div className="flex items-center gap-x-8 text-xl font-medium text-white">
					<p className="cursor-pointer hover:text-gray-800 transition">
						<a href="#home">Home</a>
					</p>
					<p className="cursor-pointer hover:text-gray-800 transition">
						<a href="#services">Services</a>
					</p>
					<p className="cursor-pointer hover:text-gray-800 transition">
						<a href="#about">About Us</a>
					</p>
					<p className="cursor-pointer hover:text-gray-800 transition">
						<a href="#contact">Contact</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
