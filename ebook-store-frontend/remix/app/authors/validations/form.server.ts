import { ActionData } from '../models/author.server'
import { Author } from '../models/_author.server'

export function authorFormValidation({
	name,
	surname,
	birthday,
}: Author): [Boolean, ActionData] {
	const errors: ActionData = {
		name: name ? '' : 'Name is required',
		surname: surname ? '' : 'Surname is required',
		birthday: birthday ? '' : 'Birthday is required',
	}

	return [Object.values(errors).some(errorMessage => errorMessage), errors]
}
