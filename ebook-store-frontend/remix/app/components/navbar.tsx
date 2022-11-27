import { Button, Stack } from '@chakra-ui/react'
import { NavLink } from '@remix-run/react'

export function Navbar() {
	return (
		<Stack as='nav' direction='row'>
			<Button as={NavLink} to='/' variant='link'>
				Home
			</Button>
			<Button as={NavLink} to='/books' variant='link'>
				Books
			</Button>
			<Button as={NavLink} to='/authors' variant='link'>
				Authors
			</Button>
		</Stack>
	)
}
