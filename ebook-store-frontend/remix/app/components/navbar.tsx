import { Button, Stack, Text } from '@chakra-ui/react'
import { NavLink } from '@remix-run/react'

export function Navbar() {
	return (
		<Stack as='nav' direction='row'>
			<Button as={NavLink} to='/' variant='link'>
				<Text>Home</Text>
			</Button>
			<Button as={NavLink} to='/books' variant='link'>
				<Text>Books</Text>
			</Button>
			<Button as={NavLink} to='/authors' variant='link'>
				<Text>Authors</Text>
			</Button>
		</Stack>
	)
}
