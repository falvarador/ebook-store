import { NavLink } from '@remix-run/react'

export function Navbar() {
	return (
		<nav aria-label='breadcrumb'>
			<ul>
				<li>
					<NavLink className='dark:visited:text-cyan-400' to='/'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink className='dark:visited:text-cyan-400' to='/books'>
						Books
					</NavLink>
				</li>
				<li>
					<NavLink className='dark:visited:text-cyan-400' to='/authors'>
						Authors
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
