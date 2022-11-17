import { Form as RemixForm } from '@remix-run/react'
import { ShowError } from '~/components/show_error'
import { toFormatDate } from '~/utils/formats'
import { AuthorFormProps } from '../types/author_form_props'
import { Submit } from '../../../components/submit'

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
			<input type='text' name='name' defaultValue={author?.name} />
			<ShowError value={errors?.name} />

			<label>Surname</label>
			<input type='text' name='surname' defaultValue={author?.surname} />
			<ShowError value={errors?.surname} />

			<label>Birthday</label>
			<input
				type='date'
				name='birthday'
				defaultValue={toFormatDate(author?.birthday)}
			/>
			<ShowError value={errors?.birthday} />

			<Submit isNew={isNew} isCreating={isCreating} isUpdating={isUpdating} />
		</RemixForm>
	)
}
