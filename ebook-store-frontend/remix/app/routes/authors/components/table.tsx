import { Link } from '@remix-run/react'
import { Author } from '~/author/types/author'

export function Table({ authors }: { authors: Author[] }) {
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
						<td>{new Date(author.birthday).toLocaleString('en-US')}</td>
						<td className='space-x-1'>
							<Link
								className='text-cyan-500'
								to={`/authors/${author.correlationId}`}
							>
								Edit
							</Link>
							<Link
								className='text-cyan-500'
								to={`/authors/${author.correlationId}`}
							>
								Delete
							</Link>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
