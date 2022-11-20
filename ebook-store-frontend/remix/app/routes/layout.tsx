import { Outlet } from '@remix-run/react'
import { Navbar } from '~/components/navbar'

export default function Layout() {
	return (
		<section className='container'>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</section>
	)
}
