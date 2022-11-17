import { ActionData } from './action_data'
import { Author } from './author'

export type AuthorFormProps = {
	author: Author
	errors: ActionData
	isNew: boolean
	isCreating: boolean
	isUpdating: boolean
}
