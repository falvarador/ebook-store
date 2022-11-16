export type Author = {
	correlationId: string
	name: string
	surname: string
	birthday: Date
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
