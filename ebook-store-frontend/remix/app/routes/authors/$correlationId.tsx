import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { useActionData, useLoaderData, useTransition } from '@remix-run/react'
import { ActionData } from '~/routes/authors/types/action_data'
import { toAuthor } from '~/routes/authors/types/author'
import { LoaderData } from '~/routes/authors/types/loader_data'
import { Form } from './components/form'
import {
	createAuthor,
	getAuthor,
	updateAuthor,
} from './usecases/service.server'
import { authorFormValidation } from './validations/form.server'

export const loader: LoaderFunction = async ({ params }) => {
	if (params.correlationId === 'new') return json<LoaderData>({} as LoaderData)

	const author = await getAuthor(params.correlationId as string)

	if (!author) throw new Response('Not Found', { status: 404 })

	return json<LoaderData>({
		author,
	})
}

export const action: ActionFunction = async ({ request, params }) => {
	const formData = await request.formData()
	const intent = formData.get('intent')
	const author = toAuthor(formData)

	const [hasErrors, errors] = authorFormValidation(author)

	if (hasErrors) return json<ActionData>(errors)

	intent === 'create'
		? await createAuthor(author)
		: intent === 'update'
		? await updateAuthor(params.correlationId as string, author)
		: null

	return redirect(`/authors`)
}

export default function Index() {
	const errors = useActionData()
	const { author } = useLoaderData()

	const transition = useTransition()
	const isCreating = transition.submission?.formData.get('intent') === 'create'
	const isUpdating = transition.submission?.formData.get('intent') === 'update'
	const isNew = !author?.correlationId

	return (
		<article>
			<Form
				author={author}
				errors={errors}
				isNew={isNew}
				isCreating={isCreating}
				isUpdating={isUpdating}
			/>
		</article>
	)
}
