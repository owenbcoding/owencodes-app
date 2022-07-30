
export default function NavLink(props) {
	return (
		<>
		<a className='m-4 text-violet-500 hover:text-gray-500 text-3xl' href={props.href} target='_blank' rel='noopener noreferrer'>
			{props.name}
		</a>
		</>
	)
}
