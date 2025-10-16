import React from 'react'

const Showcase = () => {
  return (
    <section id="showcase">
		<div className="media">
			<video src="/videos/game.mp4" muted playsInline />
			<div className="mask">
				<img src="/mask-logo.svg" />
			</div>
		</div>
	</section>
  )
}

export default Showcase