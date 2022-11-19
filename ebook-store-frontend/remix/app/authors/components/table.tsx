import { Link, useFetcher } from '@remix-run/react'
import { toFormatDate } from '~/utils/formats'
import { Author } from '../models/author.server'

export function Table({ authors }: { authors: Author[] }) {
	const fetcher = useFetcher()

	const handleDelete = (id: string) => {
		const notice = confirm('Are you sure you want to delete this author?')

		if (notice) {
			fetcher.submit(
				{ id },
				{
					method: 'post',
					action: `/authors?index`,
				}
			)
		}
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
							<a
								onClick={() => handleDelete(author.correlationId)}
								className='text-red-400'
							>
								Delete
							</a>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
