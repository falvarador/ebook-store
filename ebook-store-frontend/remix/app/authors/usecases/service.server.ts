import { Author } from '~/authors/models/author.server'

export async function getAuthors(): Promise<Author[]> {
	const response = await fetch('http://localhost:5237/api/authors')
	return await response.json()
}

export async function deleteAuthor(id: string): Promise<void> {
	const response = await fetch(
		`http://localhost:5237/api/authors/?correlationId=${id}`,
		{
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)

	if (!response.ok) {
		throw new Error(response.statusText)
	}
}

export async function getAuthor(correlationId: string): Promise<Author> {
	const response = await fetch(
		`http://localhost:5237/api/authors/${correlationId}`
	)
	return await response.json()
}

export async function createAuthor(author: Author): Promise<Author> {
	const response = await fetch('http://localhost:5237/api/authors', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(author),
	})

	return await response.json()
}

export async function updateAuthor(
	correlationId: string,
	author: Author
): Promise<Author> {
	const response = await fetch(
		`http://localhost:5237/api/authors?correlationId=${correlationId}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(author),
		}
	)

	return await response.json()
}
