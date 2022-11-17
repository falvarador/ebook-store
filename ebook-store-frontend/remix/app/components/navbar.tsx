import { Link } from '@remix-run/react'

export function Navbar() {
	return (
		<nav aria-label='breadcrumb'>
			<ul>
				<li>
					<Link className='dark:visited:text-cyan-400' to='/'>
						Home
					</Link>
				</li>
				<li>
					<Link className='dark:visited:text-cyan-400' to='/books'>
						Books
					</Link>
				</li>
				<li>
					<Link className='dark:visited:text-cyan-400' to='/authors'>
						Authors
					</Link>
				</li>
			</ul>
		</nav>
	)
}
