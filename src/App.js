import React, {useCallback} from 'react'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import {useState} from 'react'
import Navbar from './Navbar'
import Home from './Home'
import NavLink from './NavLink'
import particlesOptions from './particles.json'

function App() {
	const particlesInit = useCallback((main) => {
		loadFull(main)
	}, [])

	const [links, setLinks] = useState([
		{name: 'Github', href: 'https://github.com/owenbcoding'},
		{name: 'LinkedIn', href: 'https://www.linkedin.com/in/eoghan-byrne-97221518a/'},
		{name: 'Twitter', href: 'https://twitter.com/eoghanb2'},
		{name: 'Twitch', href: 'https://www.twitch.tv/owencodes'},
		{name: 'Youtube', href: 'https://www.youtube.com/channel/UCdSxkWueHp3D5lkm0YYomaw'},
	])

	return (
		<div className='text-center overflow-hidden h-full '>
			<Particles options={particlesOptions} init={particlesInit} />
			<Navbar />
			<header className='flex flex-col justify-center text-white text-x1'>
				<h1 className='text-6xl mt-20 text-teal-500 text-'>Owencodes</h1>
				<p className='text-4xl text-teal-500 mt-10'>Developer - Ethical Hacker - Trader</p>
				<h2 className='text-4xl text-teal-500 mt-40'>My Socials</h2>
				<div className=''>
					{links.map((link, index) => (
						<div className='inline-flex text-3xl' key={index}>
							<NavLink name={link.name} href={link.href} />
						</div>
					))}
				</div>
			</header>
			<Home />
		</div>
	)
}

export default App
