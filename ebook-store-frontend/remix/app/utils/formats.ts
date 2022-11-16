export function formatDate(stringDate: string): string {
	const date = new Date(stringDate)
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

// export const formatDateView = (stringDate: string): string {
// 	const date = new Date(stringDate)
// 	return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
