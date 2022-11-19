import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { Table } from '~/authors/components/table'
import { LoaderDataList } from '~/authors/models/author.server'
import { deleteAuthor, getAuthors } from '~/authors/usecases/service.server'
import { PageError } from '~/components/page_error'

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData()
	const correlationId = formData.get('correlationId')

	await deleteAuthor(correlationId as string)

	return redirect('/authors')
}

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
