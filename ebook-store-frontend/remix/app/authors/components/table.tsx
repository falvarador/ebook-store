import {
	Link,
	HStack,
	Table as ChakraTable,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react'

import { Link as RemixLink, useFetcher } from '@remix-run/react'

import { Author } from '../models/author.server'
import { toFormatDate } from '~/utils/formats'

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
		<TableContainer>
			<ChakraTable variant='striped'>
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th>Surname</Th>
						<Th>BirThday</Th>
						<Th>Actions</Th>
					</Tr>
				</Thead>
				<Tbody>
					{authors.map(author => (
						<Tr key={author.correlationId}>
							<Td>{author.name}</Td>
							<Td>{author.surname}</Td>
							<Td>{toFormatDate(author.birthday)}</Td>
							<Td>
								<HStack>
									<Link
										as={RemixLink}
										className='text-cyan-500'
										to={`/authors/${author.correlationId}`}
									>
										Edit
									</Link>
									<Link
										color='red.500'
										onClick={() => handleDelete(author.correlationId)}
										className='text-red-400'
									>
										Delete
									</Link>
								</HStack>
							</Td>
						</Tr>
					))}
				</Tbody>
			</ChakraTable>
		</TableContainer>
	)
}
