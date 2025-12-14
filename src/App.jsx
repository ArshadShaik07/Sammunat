import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Connect from "./components/Connect";

function App() {
	return (
		<div className="min-w-screen min-h-screen flex flex-col items-center">
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Connect />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
