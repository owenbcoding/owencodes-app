function Home() {
	return (
		<div className='mx-auto absolute bottom-0 py-8 mt-40 bg-[#1e1f26] w-full'>
				<div className="flex justify-center mx-auto">
					<a className='text-3xl text-teal-500 hover:text-gray-500 font-medium mx-10 cursor-pointer'>React</a>
					<a className='text-3xl text-teal-500 hover:text-gray-500 font-medium mx-10 cursor-pointer'>TailwindCSS</a>
					<a className='text-3xl text-teal-500 hover:text-gray-500 font-medium mx-10 cursor-pointer'>GraphQL</a>
				</div>
        <p className="text-teal-500 font-medium mr-14">&copy; Owencodes 2022 | All Rights Reserved</p>
		</div>
	)
}

export default Home
