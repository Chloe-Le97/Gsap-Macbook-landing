import React from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
  return (
    <header>
		<nav>
			<img src="/logo.svg" alt="apple logo" />
			<ul>
				{navLinks.map(({ label, href }) => (
					<li key={href}>
						<a href={href}>{label}</a>
					</li>
				))}
			</ul>

			<div className="flex-center gap-3">
				<button><img src="/search.svg" alt="search" /></button>
				<button><img src="/cart.svg" alt="cart" /></button>
			</div>
		</nav>
	</header>
  )
}

export default NavBar

