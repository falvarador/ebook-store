import { json, redirect } from '@remix-run/node'
import { useActionData, useLoaderData, useTransition } from '@remix-run/react'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'

import { Form } from '~/authors/components/form'
import * as models from '~/authors/models/author.server'
import * as usecase from '~/authors/usecases/service.server'
import authorFormValidation from '~/authors/validations/form.server'

import { Error } from '~/components/error'

export const action: ActionFunction = async ({ request, params }) => {
	const formData = await request.formData()
	const intent = formData.get('intent')
	const author = models.toAuthor(formData)

	const [hasErrors, errors] = authorFormValidation(author)

	if (hasErrors) return json<models.ActionData>(errors)

	intent === 'create'
		? await usecase.createAuthor(author)
		: intent === 'update'
		? await usecase.updateAuthor(params.correlationId as string, author)
		: null

	return redirect(`/authors`)
}

export const loader: LoaderFunction = async ({ params }) => {
	const { correlationId = 'new' } = params

	if (correlationId === 'new')
		return json<models.LoaderData>({
			author: models.initialAuthor(),
		} as models.LoaderData)

	const author = await usecase.getAuthor(correlationId)

	if (!author) throw new Response('Not Found', { status: 404 })

	return json<models.LoaderData>({
		author,
	})
}

export function ErrorBoundary() {
	return (
		<Error
			title={`Couldn't retrieve the author`}
			message='An error was ocurred'
		/>
	)
}

export default function Index() {
	const { author } = useLoaderData()
	const errors = useActionData()
	const transition = useTransition()

	const intent = transition.submission?.formData.get('intent')
	const isLoading = intent === 'create' || intent === 'update'
	const isNew = author?.correlationId === 'new'

	return (
		<Form author={author} errors={errors} isLoading={isLoading} isNew={isNew} />
	)
}
