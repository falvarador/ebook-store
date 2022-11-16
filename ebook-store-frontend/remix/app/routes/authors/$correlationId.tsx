import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import {
	Form,
	Link,
	useActionData,
	useLoaderData,
	useTransition,
} from '@remix-run/react'
import { ActionData } from '~/author/types/action_data'
import { toAuthor } from '~/author/types/author'
import { LoaderData } from '~/author/types/loader_data'
import {
	createAuthor,
	getAuthor,
	updateAuthor,
} from '~/author/usecases/service.server'
import { authorFormValidation } from '~/author/validations/form.server'
import { formatDate } from '~/utils/formats'

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
		? await updateAuthor(author)
		: null

	return redirect(`/authors`)
}

export function ErrorBoundary({ error: { message } }: { error: Error }) {
	return (
		<main>
			<h4>Couldn't retrieve the author 😔</h4>
			<h5>
				An error was ocurred - lets take you <Link to='/'>home</Link>
			</h5>
		</main>
	)
}

export default function Index() {
	const errors = useActionData<ActionData>()
	const { author } = useLoaderData<LoaderData>()

	const transition = useTransition()
	const isCreating = transition.submission?.formData.get('intent') === 'create'
	const isUpdating = transition.submission?.formData.get('intent') === 'update'
	const isNew = !author?.correlationId

	return (
		<Form method='post' key={author?.correlationId ?? 'new'}>
			<p>
				<label>Name</label>
				<input type='text' name='name' defaultValue={author?.name} />
				{errors?.name ? (
					<>
						<br />
						<em className='text-red-500'>{errors.name}</em>
					</>
				) : null}
			</p>
			<p>
				<label>Surname</label>
				<input type='text' name='surname' defaultValue={author?.surname} />
				{errors?.surname ? (
					<>
						<br />
						<em className='text-red-500'>{errors.surname}</em>
					</>
				) : null}
			</p>
			<p>
				<label>Birthday</label>
				<input
					type='date'
					name='birthday'
					defaultValue={formatDate(author?.birthday)}
				/>
				{errors?.birthday ? (
					<>
						<br />
						<em className='text-red-500'>{errors.birthday}</em>
					</>
				) : null}
			</p>
			<p>
				<button
					className='dark:bg-cyan-500'
					type='submit'
					name='intent'
					value={isNew ? 'create' : 'update'}
					disabled={isCreating || isUpdating}
				>
					{isNew ? (isCreating ? 'Creating...' : 'Create') : null}
					{isNew ? null : isUpdating ? 'Updating...' : 'Update'}
				</button>
			</p>
		</Form>
	)
}
