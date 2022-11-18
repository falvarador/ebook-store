import { json, LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { PageError } from '~/components/page_error'
import { Table } from './components/table'
import { LoaderDataList } from './models/loader_data'
import { getAuthors } from './usecases/service.server'

export const loader: LoaderFunction = async () => {
	return json<LoaderDataList>({
		authors: await getAuthors(),
	})
}

export function ErrorBoundary() {
	return (
		<PageError
			title={`Couldn't retrieve authors`}
			message='An error was ocurred'
		/>
	)
}

export default function Index() {
	const { authors } = useLoaderData()

	return (
		<article>
			<header>
				<nav>
					<strong>Authors</strong>
					<Link to='/authors/new'>New author</Link>
				</nav>
			</header>
			<Table authors={authors} />
		</article>
	)
}
