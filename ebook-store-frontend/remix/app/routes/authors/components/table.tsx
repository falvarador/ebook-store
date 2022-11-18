import { Link } from '@remix-run/react'
import { toFormatDate } from '~/utils/formats'
import { Author } from '../models/author.server'
import { deleteAuthor } from '../usecases/service.server'

export function Table({ authors }: { authors: Author[] }) {
	const handleClick = async (correlationId: string) => {
		const notice = confirm('Are you sure?')

		// TODO: This code it's only available in the server, but not in the client
		if (notice) await deleteAuthor(correlationId)
	}

	return (
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
						<td>{toFormatDate(author.birthday)}</td>
						<td className='space-x-1'>
							<Link
								className='text-cyan-500'
								to={`/authors/${author.correlationId}`}
							>
								Edit
							</Link>
							<a onClick={() => handleClick(author.correlationId)}>Delete</a>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
