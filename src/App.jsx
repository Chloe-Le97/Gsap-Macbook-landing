import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import React from 'react';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import NavBar from './components/NavBar';
import Performance from './components/Performance';
import ProductViewer from './components/ProductViewer';
import Showcase from './components/Showcase';
import './index.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
	<main>
		<NavBar />
		<Hero />	
		<ProductViewer />
		<Showcase />
		<Performance />
		<Features />
		<Highlights />
		<Footer />
	</main>
  )
}

export default App