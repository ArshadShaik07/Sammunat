function Hero() {
	return (
		<div className="w-full flex items-center justify-center bg-[hsl(253,92%,66%)] py-4">
			<div className="max-w-7xl px-6 py-24 flex flex-col items-start transition duration-300">
				<h1 className="text-4xl md:text-5xl font-bold text-gray-900">
					Crafting Smart & Scalable <br /> Digital Solutions
				</h1>

				<p className="mt-6 max-w-2xl text-lg text-white">
					At Sammunat, we design and build customized digital systems
					that help businesses streamline operations, improve
					efficiency, and grow with confidence.
				</p>

				<div className="mt-10 flex justify-center gap-4">
					<button className="px-6 py-3 rounded-3xl bg-amber-600 text-white font-medium hover:bg-transparent border border-transparent hover:border-black transition">
						Get in Touch
					</button>

					<button className="px-6 py-3 rounded-3xl border border-gray-300 text-gray-800 font-medium hover:bg-amber-50 transition">
						Our Services
					</button>
				</div>
			</div>

			<div className="rounded-2xl w-4/12 overflow-hidden hover:-rotate-2 transition duration-300">
				<img
					src="https://images.unsplash.com/photo-1737365508417-abaf499514c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					className="w-full object-cover"
				/>
			</div>
		</div>
	);
}

export default Hero;
