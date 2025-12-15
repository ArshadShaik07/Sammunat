function Hero() {
	return (
		<section
			className="w-full flex flex-col md:flex-row items-center justify-center bg-[hsl(253,64%,59%)] py-6 md:py-4"
			id="home"
		>
			<div className="max-w-7xl px-4 sm:px-6 py-16 sm:py-20 md:py-24 flex flex-col items-start transition duration-300">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
					Crafting Smart & Scalable <br className="hidden sm:block" />{" "}
					Digital Solutions
				</h1>

				<p className="mt-6 max-w-2xl text-base sm:text-lg text-white">
					At Sammunat, we design and build customized digital systems
					that help businesses streamline operations, improve
					efficiency, and grow with confidence.
				</p>

				<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
					<button className="px-6 py-3 rounded-3xl bg-amber-600 text-white font-medium hover:bg-transparent border border-transparent hover:border-black transition">
						Get in Touch
					</button>

					<button className="px-6 py-3 rounded-3xl border border-gray-300 text-gray-800 font-medium hover:bg-amber-50 transition">
						Our Services
					</button>
				</div>
			</div>

			<div className="mt-10 hidden md:mt-0 lg:block  rounded-2xl w-full sm:w-8/12 md:w-4/12 overflow-hidden hover:-rotate-2 hover:scale-96 duration-200 relative transition">
				<img
					src="https://images.unsplash.com/photo-1737365508417-abaf499514c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					className="w-full object-cover"
				/>
			</div>
		</section>
	);
}

export default Hero;
