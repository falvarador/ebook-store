import {
	Button,
	ButtonGroup,
	IconButton,
	Stack,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'

import { NavLink } from '@remix-run/react'

export function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Stack
			align='center'
			as='nav'
			bgColor={useColorModeValue('gray.100', 'gray.700')}
			direction='row'
			h={16}
			justifyContent='space-evenly'
			marginY={2}
			borderRadius='lg'
			w='100%'
		>
			<ButtonGroup>
				<Button as={NavLink} to='/' variant='link'>
					Home
				</Button>
				<Button as={NavLink} to='/books' variant='link'>
					Books
				</Button>
				<Button as={NavLink} to='/authors' variant='link'>
					Authors
				</Button>
			</ButtonGroup>
			<IconButton
				onClick={toggleColorMode}
				variant='outline'
				colorScheme='teal'
				aria-label='Toggle color mode'
				icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunFill />}
			/>
		</Stack>
	)
}
