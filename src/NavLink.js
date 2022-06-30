
export default function NavLink(props) {
	return (
		<>
		<a className='m-4 text-teal-500 hover:text-gray-500 text-4xl' href={props.href} target='_blank' rel='noopener noreferrer'>
			{props.name}
		</a>
		</>
	)
}
