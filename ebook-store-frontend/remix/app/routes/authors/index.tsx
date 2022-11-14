import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { getAuthors } from '~/models/author.server'

type LoaderData = {
	authors: Awaited<ReturnType<typeof getAuthors>>
}

export const loader = async () => {
	return json<LoaderData>({
		authors: await getAuthors(),
	})
}

export function ErrorBoundary({ error: { message } }: { error: Error }) {
	return (
		<main>
			<h4>Couldn't retrieve authors :(</h4>
			<h5>
				An error was ocurred - lets take you <Link to='/'>home</Link>
			</h5>
		</main>
	)
}

export default function Index() {
	const { authors } = useLoaderData<LoaderData>()

	return (
		<main>
			<h1>Authors</h1>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Surname</th>
						<th>Birthday</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{authors.map(author => (
						<tr key={author.correlationId}>
							<td>{author.name}</td>
							<td>{author.surname}</td>
							<td>{new Date(author.birthday).toLocaleDateString('en-US')}</td>
							<td className='space-x-1'>
								<Link to={`/authors/${author.correlationId}`}>Edit</Link>
								<Link to={`/authors/${author.correlationId}`}>Delete</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	)
}
