import { Box, Container } from '@chakra-ui/react'
import { Outlet } from '@remix-run/react'
import { Navbar } from '~/components/navbar'

export default function Layout() {
	return (
		<Container alignSelf='center' maxWidth='container.lg' paddingY={4}>
			<Navbar />
			<Box borderWidth='1px' borderRadius='lg' overflow='hidden' padding='8'>
				<Outlet />
			</Box>
		</Container>
	)
}
