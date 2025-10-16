import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import useMacbookStore from '../store';
import ModelSwitcher from './three/ModelSwitcher';
import StudioLights from './three/StudioLights';

const ProductViewer = () => {
	const { color, scale, setColor, setScale } = useMacbookStore();

	const { isMobile } = useMediaQuery({query: '(max-width: 1024px)'})

  return (
	<section id="product-viewer">
		<h2>Take a closer look</h2>
		<Canvas id="canvas" camera={{position:[0, 2, 5], fov: 50, near: 0.1, far: 100}}>
			<StudioLights />

			{/* <MacbookModel14 position={[0, 0, 0]} scale={0.06} /> */}

			{/* <OrbitControls enableZoom={false} /> */}
			<ModelSwitcher scale={isMobile ? scale - 0.03 : scale}  isMobile={isMobile} />
		</Canvas>

		<div className="controls">
			{/* <p className="info">MacBook Pro | Available in 14" and 16" in Space Gray & Dark colors  </p> */}

			<div className="flex-center gap-5 mt-5"> 
				<div className="color-control">
					<div 
						onClick={() => setColor('#adb5bd')}
						className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}>

					</div>
					<div 
						onClick={() => setColor('#777')}
						className={clsx('bg-neutral-900', color === '#777' && 'active')}>
					</div>
				</div>

				<div className="size-control">
					<div 
						onClick={() => setScale(0.06)}
						className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}>
						<p>14"</p>
					</div>
					<div 
						onClick={() => setScale(0.08)}
						className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}>
						<p>16"</p>
					</div>
				</div>
			</div>
		

		</div>
	</section>
  )
}

export default ProductViewer