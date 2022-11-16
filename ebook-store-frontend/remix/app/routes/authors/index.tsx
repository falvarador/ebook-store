import { json, LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { getAuthors } from '~/author/usecases/service.server'
import { Table } from './components/table'

type LoaderData = {
	authors: Awaited<ReturnType<typeof getAuthors>>
}

export const loader: LoaderFunction = async () => {
	return json<LoaderData>({
		authors: await getAuthors(),
	})
}

export function ErrorBoundary() {
	return (
		<main>
			<h4>Couldn't retrieve authors 😔</h4>
			<h5>
				An error was ocurred - lets take you <Link to='/'>home</Link>
			</h5>
		</main>
	)
}

export default function Index() {
	const { authors } = useLoaderData()

	return (
		<main>
			<section className='flex space-x-72'>
				<h1>Authors</h1>
				<Link to='/authors/new'>New author</Link>
			</section>
			<Table authors={authors} />
		</main>
	)
}
