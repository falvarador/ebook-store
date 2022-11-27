import { Center, Stack } from '@chakra-ui/react'
import { Outlet } from '@remix-run/react'
import { Navbar } from '~/components/navbar'

export default function Layout() {
	return (
		<Center as='section'>
			<Stack alignSelf='center' maxWidth='container.lg' align='center'>
				<Navbar />
				<main>
					<Outlet />
				</main>
			</Stack>
		</Center>
	)
}
