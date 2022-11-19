import { Form as RemixForm } from '@remix-run/react'
import { ShowError } from '~/components/show_error'
import { Submit } from '~/components/submit'
import { toFormatDate } from '~/utils/formats'
import { AuthorFormProps } from '../models/author.server'

export function Form({
	author,
	errors,
	isNew,
	isCreating,
	isUpdating,
}: AuthorFormProps) {
	return (
		<RemixForm method='post' key={author?.correlationId ?? 'new'}>
			<label>Name</label>
			<input
				type='text'
				name='name'
				defaultValue={author?.name}
				autoComplete='name'
			/>
			<ShowError value={errors?.name} />

			<label>Surname</label>
			<input
				type='text'
				name='surname'
				defaultValue={author?.surname}
				autoComplete='nickname'
			/>
			<ShowError value={errors?.surname} />

			<label>Birthday</label>
			<input
				type='date'
				name='birthday'
				defaultValue={toFormatDate(author?.birthday, true)}
			/>
			<ShowError value={errors?.birthday} />

			<Submit isNew={isNew} isCreating={isCreating} isUpdating={isUpdating} />
		</RemixForm>
	)
}
