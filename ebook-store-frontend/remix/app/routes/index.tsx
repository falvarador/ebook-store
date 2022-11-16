import { Link } from '@remix-run/react'

export function ErrorBoundary() {
	return (
		<main>
			<h4>We can not load the page!!! 😔</h4>
			<h5>
				An error was ocurred - lets take you <Link to='/'>home</Link>
			</h5>
		</main>
	)
}

export default function Index() {
	return (
		<main>
			<h1>Home</h1>
		</main>
	)
}
