function Services() {
	return (
		<section className="w-full bg-white" id="services">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
					Our Services
				</h2>

				<p className="mt-4 max-w-full sm:max-w-2xl text-base sm:text-lg text-gray-600">
					We design and deliver custom digital solutions tailored to
					support business operations, improve efficiency, and enable
					scalable growth.
				</p>

				<div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
					<div className="rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition hover:scale-105 duration-300">
						<h3 className="text-lg sm:text-xl font-semibold text-gray-900">
							Custom CRM Solutions
						</h3>
						<p className="mt-3 text-sm sm:text-base text-gray-600">
							Tailored customer management systems designed to
							streamline sales, support, and customer engagement.
						</p>
					</div>

					<div className="rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition hover:scale-105 duration-300">
						<h3 className="text-lg sm:text-xl font-semibold text-gray-900">
							ERP Systems
						</h3>
						<p className="mt-3 text-sm sm:text-base text-gray-600">
							Enterprise solutions that help manage operations,
							inventory, workflows, and data from a single
							platform.
						</p>
					</div>

					<div className="rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition hover:scale-105 duration-300">
						<h3 className="text-lg sm:text-xl font-semibold text-gray-900">
							Web Application Development
						</h3>
						<p className="mt-3 text-sm sm:text-base text-gray-600">
							Scalable and secure web applications built using
							modern technologies for performance and reliability.
						</p>
					</div>

					<div className="rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition hover:scale-105 duration-300">
						<h3 className="text-lg sm:text-xl font-semibold text-gray-900">
							Business Automation
						</h3>
						<p className="mt-3 text-sm sm:text-base text-gray-600">
							Custom automation solutions that reduce manual work
							and improve overall operational efficiency.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
