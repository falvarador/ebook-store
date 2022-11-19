import { Link, useFetcher } from '@remix-run/react'
import { toFormatDate } from '~/utils/formats'
import { Author } from '../models/author.server'

export function Table({ authors }: { authors: Author[] }) {
	const fetcher = useFetcher()

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
							<fetcher.Form className='inline' method='post'>
								<input
									type='hidden'
									name='correlationId'
									value={author.correlationId}
								/>
								<button
									className='bg-cyan-500 text-white px-0 rounded'
									type='submit'
									name='intent'
									value='delete'
								>
									Delete
								</button>
							</fetcher.Form>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
