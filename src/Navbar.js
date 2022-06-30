const Navbar = () => {
	return (
		<nav className='flex justify-around py-8 mx-auto bg-[#1e1f26]'>
			<div>
				<h3 class='text-4xl font-medium text-teal-500 hover:text-gray-500'>
					<a href='/'>Owencodes</a>
				</h3>
			</div>
			<div class='flex space-x-8'>
				<li className='list-none'>
					<a className="text-teal-500 hover:text-gray-500 text-4xl" href='#'>About</a>
				</li>
				<li className='list-none text-4xl'>
					<a className="text-teal-500 hover:text-gray-500 text-4xl" href='#'>Projects</a>
				</li>
				<li className='list-none'>
					<a className="text-teal-500 hover:text-gray-500 text-4xl" href='#'>Contact</a>
				</li>
			</div>
		</nav>
	)
}

export default Navbar
