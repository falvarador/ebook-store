import { Link } from '@remix-run/react'

export function PageError({
	title,
	message,
}: {
	title: string
	message: string
}) {
	return (
		<main className='text-center'>
			<h4>{title} 😔</h4>
			<h5>
				{message} - lets take you <Link to='/'>home</Link>
			</h5>
		</main>
	)
}
