import { Form as RemixForm } from '@remix-run/react'
import { Validation } from '~/components/validation'
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
			<Validation value={errors?.name} />

			<label>Surname</label>
			<input
				type='text'
				name='surname'
				defaultValue={author?.surname}
				autoComplete='nickname'
			/>
			<Validation value={errors?.surname} />

			<label>Birthday</label>
			<input
				type='date'
				name='birthday'
				defaultValue={toFormatDate(author?.birthday, true)}
			/>
			<Validation value={errors?.birthday} />

			<Submit isNew={isNew} isCreating={isCreating} isUpdating={isUpdating} />
		</RemixForm>
	)
}
