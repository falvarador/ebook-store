import { redirect } from '@remix-run/node'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { deleteAuthor } from '~/authors/usecases/service.server'

export const action: ActionFunction = async ({ params, request }) => {
	console.log('delete', params, request)

	// const formData = await request.formData()
	// const correlationId = formData.get('correlationId')

	// await deleteAuthor(correlationId as string)
}

export const loader: LoaderFunction = () => {
	return redirect('/authors')
}
