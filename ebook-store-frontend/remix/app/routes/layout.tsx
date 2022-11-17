import { Links, Meta, Outlet, Scripts } from '@remix-run/react'
import { Navbar } from '~/components/navbar'
import { PageError } from '~/components/page_error'

export function ErrorBoundary() {
	return (
		<html>
			<head>
				<title>Oh no!</title>
				<Meta />
				<Links />
			</head>
			<body>
				<PageError
					title='We can not load the page!!!'
					message='An error was ocurred'
				/>
				<Scripts />
			</body>
		</html>
	)
}

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
