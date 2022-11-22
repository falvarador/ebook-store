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
	const inputStyle =
		'w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent'

	return (
		<RemixForm method='post' key={author?.correlationId ?? 'new'}>
			<label>Name</label>
			<input
				type='text'
				name='name'
				defaultValue={author?.name}
				autoComplete='name'
				className={`${inputStyle} ${errors?.name ? 'ring-2 ring-red-600' : ''}`}
			/>
			<Validation value={errors?.name} />

			<label>Surname</label>
			<input
				type='text'
				name='surname'
				defaultValue={author?.surname}
				autoComplete='nickname'
				className={`${inputStyle} ${
					errors?.surname ? 'ring-2 ring-red-600' : ''
				}`}
			/>
			<Validation value={errors?.surname} />

			<label>Birthday</label>
			<input
				type='date'
				name='birthday'
				defaultValue={toFormatDate(author?.birthday, true)}
				className={`${inputStyle} ${
					errors?.birthday ? 'ring-2 ring-red-600' : ''
				}`}
			/>
			<Validation value={errors?.birthday} />

			<Submit isNew={isNew} isCreating={isCreating} isUpdating={isUpdating} />
		</RemixForm>
	)
}
