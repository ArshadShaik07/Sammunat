import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 500);
	}, []);

	if (loading) {
		return (
			<div className="min-w-screen min-h-screen overflow-hidden bg-blue-100 flex justify-center items-center">
				<p className="text-2xl font-semibold">Loading...</p>
			</div>
		);
	}
	return (
		<div className="min-w-screen min-h-screen flex flex-col items-center relative">
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
