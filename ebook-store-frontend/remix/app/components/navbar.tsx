import { Link } from '@remix-run/react'

export function Navbar() {
	return (
		<nav className='text-center space-x-4'>
			<Link className='dark:visited:text-cyan-400' to='/'>
				Home
			</Link>
			<Link className='dark:visited:text-cyan-400' to='/books'>
				Books
			</Link>
			<Link className='dark:visited:text-cyan-400' to='/authors'>
				Authors
			</Link>
		</nav>
	)
}
