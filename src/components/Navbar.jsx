function Navbar() {
	return (
		<div className="w-full sticky top-0 bg-[hsl(253,92%,66%)] z-50">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
				<p className="font-bold text-2xl tracking-tight">
					Samm<span className="text-amber-500">unat</span>
				</p>

				<div className="flex items-center gap-x-8 text-xl font-medium text-white">
					<p className="cursor-pointer hover:text-gray-800 transition">
						Home
					</p>
					<p className="cursor-pointer hover:text-gray-800 transition">
						Services
					</p>
					<p className="cursor-pointer hover:text-gray-800 transition">
						About Us
					</p>
					<p className="cursor-pointer hover:text-gray-800 transition">
						Contact
					</p>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
