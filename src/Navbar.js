const Navbar = () => {
	return (
		<nav className='flex justify-around py-4 mx-auto bg-[#1e1f26]'>
			<div>
				<h3 class='flex text-4xl font-medium text-teal-500 hover:text-gray-500 sm:text-center'>
					<a href='/'><img className="h-20 mr-20" src="logo.png"/></a>
					<li className='list-none mt-5'><a href='/'>Owencodes</a></li>
				</h3>
			</div>
			<div class='flex space-x-8'>
				<li className='list-none mt-5'>
					<a className='text-teal-500 hover:text-gray-500 text-4xl' href='#'>
						About
					</a>
				</li>
				<li className='list-none text-4xl mt-5'>
					<a className='text-teal-500 hover:text-gray-500 text-4xl' href='#'>
						Projects
					</a>
				</li>
				<li className='list-none mt-5'>
					<a className='text-teal-500 hover:text-gray-500 text-4xl' href='#'>
						Contact
					</a>
				</li>
			</div>
			<div class='flex lg:hidden'>
				<svg xmlns='http://www.w3.org/2000/svg' class='w-16 h-16' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
					<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16' />
				</svg>
			</div>
		</nav>
	)
}

export default Navbar
