export type ActionData =
	| {
			surname: null | string
			name: null | string
			birthday: null | string
	  }
	| undefined

export type LoaderData = {
	author: Author
}

export type LoaderDataList = {
	authors: Author[]
}

export type AuthorFormProps = {
	author: Author
	errors: ActionData
	isNew: boolean
	isCreating: boolean
	isUpdating: boolean
}

export type Author = {
	correlationId: string
	name: string
	surname: string
	birthday: Date
}

export function initialAuthor(): Author {
	return {
		correlationId: 'new',
		name: '',
		surname: '',
		birthday: new Date(),
	} as Author
}

export function toAuthor(formData: FormData): Author {
	return {
		correlationId: '',
		name: formData.get('name') as string,
		surname: formData.get('surname') as string,
		birthday:
			(formData.get('birthday') as string) === ''
				? null
				: new Date(formData.get('birthday') as string),
	} as Author
}
