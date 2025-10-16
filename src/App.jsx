import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
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
	</main>
  )
}

export default App