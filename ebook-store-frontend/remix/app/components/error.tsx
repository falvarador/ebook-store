import { Center, Link, Text, VStack } from '@chakra-ui/react'

import { Link as RemixLink } from '@remix-run/react'

export function Error({ title, message }: { title: string; message: string }) {
	return (
		<Center>
			<VStack>
				<Text fontSize='2xl'>{title} 😔</Text>
				<Text fontSize='xl'>
					{message} - lets take you{' '}
					<Link as={RemixLink} color='yellow.500' to='/'>
						<Text as='u'>home</Text>
					</Link>
				</Text>
			</VStack>
		</Center>
	)
}
