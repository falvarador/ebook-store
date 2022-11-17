import { Link } from '@remix-run/react'
import { Author } from '~/routes/authors/types/author'
import { toFormatDate } from '~/utils/formats'

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
						<td>{toFormatDate(author.birthday)}</td>
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
