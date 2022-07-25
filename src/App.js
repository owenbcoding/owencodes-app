import React, {useCallback} from 'react'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import {useState} from 'react'
// import logo from "./logo.svg";
import Navbar from './Navbar'
import Home from './Home'
import NavLink from './NavLink'
import particlesOptions from './particles.json'

function App() {
	const particlesInit = useCallback((main) => {
		loadFull(main)
	}, [])

	const [links, setLinks] = useState([
		{name: 'Twitch', href: 'https://www.twitch.tv/owencodes'},
		{name: 'Twitter', href: 'https://twitter.com/eoghanb2'},
		{name: 'Github', href: 'https://github.com/owenbcoding'},
		{name: 'Youtube', href: 'https://www.youtube.com/channel/UCdSxkWueHp3D5lkm0YYomaw'},
		{name: 'Discord', href: 'https://discord.gg/XknredJKUJ'},
		{name: 'LinkedIn', href: 'https://www.linkedin.com/in/eoghan-byrne-97221518a/'},
	])

	return (
		<div className='text-center overflow-hidden h-full '>
			<Particles options={particlesOptions} init={particlesInit} />
			<Navbar />
			<header className='flex flex-col justify-center text-white text-x1'>
				<h1 className='text-6xl mt-20 text-teal-500 text-'>Owencodes</h1>
				<p className='text-4xl text-teal-500 mt-10'>Developer - Trader - Hacker</p>
				<h2 className='text-3xl text-teal-500 mt-20'>My Socials</h2>
				<div className='mt-10'>
					{links.map((link, index) => (
						<div className='inline-flex text-3xl' key={index}>
							<NavLink name={link.name} href={link.href} />
						</div>
					))}
					<p className='text-3xl drop-shadow-2xl text-teal-500 mt-20'>Under Development Stay Tuned!</p>
				</div>
			</header>
			<Home />
		</div>
	)
}

export default App
