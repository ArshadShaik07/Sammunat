function Contact() {
	return (
		<section className="w-full bg-slate-50" id="contact">
			<div className="max-w-7xl mx-auto px-6 py-20">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
					Get in Touch
				</h2>

				<p className="mt-4 max-w-2xl text-lg text-gray-600">
					Have a project in mind or need more information? Fill out
					the form below and our team will get back to you as soon as
					possible.
				</p>

				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
					<form className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Full Name
							</label>
							<input
								type="text"
								placeholder="Enter your full name"
								className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Email Address
							</label>
							<input
								type="email"
								placeholder="Enter your email"
								className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Message
							</label>
							<textarea
								rows="3"
								placeholder="Write your message here"
								className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
							></textarea>
						</div>

						<button
							type="submit"
							className="inline-flex items-center justify-center rounded-3xl bg-amber-600 px-6 py-3 font-medium text-white hover:bg-amber-700 transition"
						>
							Send Message
						</button>
					</form>

					<div className="space-y-6 text-gray-700">
						<div>
							<h3 className="text-xl font-semibold text-gray-900">
								Our Address
							</h3>
							<p className="mt-2">
								127 N Higgins Ave Ste 307d Missoula, <br /> MT
								59802 , USA
							</p>
						</div>

						<div>
							<h3 className="text-xl font-semibold text-gray-900">
								Contact Details
							</h3>
							<p className="mt-2">
								<a href="mailto:contact@sammunat.com">
									contact@sammunat.com
								</a>
							</p>
							<p>+971 58874 9689</p>
						</div>

						<div>
							<h3 className="text-xl font-semibold text-gray-900">
								Working With Us
							</h3>
							<p className="mt-2">
								We typically respond within 24 hours on business
								days.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
