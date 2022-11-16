import { Author } from '../types/author'

export async function getAuthors(): Promise<Author[]> {
	const response = await fetch('http://localhost:5237/api/authors')
	return await response.json()
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

export async function updateAuthor(author: Author): Promise<Author> {
	const response = await fetch('http://localhost:5237/api/authors', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(author),
	})

	return await response.json()
}
