import { Button, HStack, Stack, Text } from '@chakra-ui/react'

import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

import { deleteAuthor, getAuthors } from '~/authors/usecases/service.server'
import { LoaderDataList } from '~/authors/models/author.server'
import { Table } from '~/authors/components/table'

import { Error } from '~/components/error'

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData()
	const correlationId = formData.get('id') as string

	await deleteAuthor(correlationId)

	return redirect('/authors')
}

export const loader: LoaderFunction = async () => {
	return json<LoaderDataList>({
		authors: await getAuthors(),
	})
}

export function ErrorBoundary() {
	return (
		<Error title={`Couldn't retrieve authors`} message='An error was ocurred' />
	)
}

export default function Index() {
	const { authors } = useLoaderData()

	return (
		<Stack>
			<HStack justifyContent={'space-between'} paddingBottom={6}>
				<Text fontSize='2xl'>Authors</Text>
				<Button as={Link} to='/authors/new'>
					New author
				</Button>
			</HStack>
			<Table authors={authors} />
		</Stack>
	)
}
