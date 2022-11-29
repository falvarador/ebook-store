import { Button, Stack, useColorModeValue } from '@chakra-ui/react'
import { NavLink } from '@remix-run/react'

export function Navbar() {
	return (
		<Stack
			align='center'
			as='nav'
			bgColor={useColorModeValue('gray.100', 'gray.700')}
			direction='row'
			h={16}
			justifyContent='center'
			marginY={2}
			borderRadius='lg'
			w='100%'
		>
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
