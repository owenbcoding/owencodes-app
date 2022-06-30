import React, {useCallback} from 'react'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
// import logo from "./logo.svg";
import Navbar from './Navbar'
import Home from './Home'
import particlesOptions from './particles.json'

function App() {
	const particlesInit = useCallback((main) => {
		loadFull(main)
	}, [])

	return (
		<div className='text-center overflow-hidden h-full '>
			<Particles options={particlesOptions} init={particlesInit} />
			<Navbar />
			<header className='flex flex-col justify-center text-white text-x1'>
				{/* <img src={logo} className="App-logo" alt="logo"/> */}
				<h1 className='text-6xl mt-20 text-teal-500 text-'>Owencodes</h1>
				<p className='text-4xl text-teal-500 mt-10'>Full Stack Developer, Web3 &</p>
				<p className='text-4xl text-teal-500'> Blockchain Enthusiast</p>
				<h2 className='text-4xl text-teal-500 mt-20'>My Socials</h2>
				<div className='mt-10'>
					<a className='m-4 text-teal-500 hover:text-gray-500 text-4xl' href='https://www.twitch.tv/owencodes' target='_blank' rel='noopener noreferrer'>
						Twitch
					</a>
					<a className='m-4 text-teal-500 hover:text-gray-500 text-4xl' href='https://github.com/owenbcoding' target='_blank' rel='noopener noreferrer'>
						Github
					</a>

					<a className='m-4 text-teal-500 hover:text-gray-500 text-4xl' href='' target='_blank' rel='noopener noreferrer'>
						YouTube
					</a>
					<a className='m-4 text-teal-500 hover:text-gray-500 text-4xl' href='https://discord.gg/XknredJKUJ' target='_blank' rel='noopener noreferrer'>
						Discord
					</a>
					<a className='m-4 text-teal-500 hover:text-gray-500 text-4xl' href='https://www.linkedin.com/in/eoghan-byrne-97221518a/' target='_blank' rel='noopener noreferrer'>
						Linked In
					</a>
					<p className='text-4xl drop-shadow-2xl text-teal-500 mt-20'>Under Development Stay Tuned!</p>
					{/* <p className="text-4xl drop-shadow-2xl text-teal-500">Hosted on
            <a 
            className="App-link"
            href="https://vercel.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >- Vercel</a></p> */}
				</div>
			</header>
			<Home />
		</div>
	)
}

export default App
