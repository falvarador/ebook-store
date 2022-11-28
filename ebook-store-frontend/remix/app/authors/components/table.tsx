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
	Icon,
	Tooltip,
} from '@chakra-ui/react'
import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri'

import { Link as RemixLink, useFetcher } from '@remix-run/react'

import { Author } from '~/authors/models/author.server'

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
			<ChakraTable variant='simple'>
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
									<Link as={RemixLink} to={`/authors/${author.correlationId}`}>
										<Tooltip
											aria-label='A tooltip'
											hasArrow
											label='Edit this author'
										>
											<span>
												<Icon as={RiEditBoxLine} />
											</span>
										</Tooltip>
									</Link>
									<Link
										color='red.500'
										onClick={() => handleDelete(author.correlationId)}
									>
										<Tooltip
											aria-label='A tooltip'
											hasArrow
											label='Delete this author'
										>
											<span>
												<Icon as={RiDeleteBinLine} />
											</span>
										</Tooltip>
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
