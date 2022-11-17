export function toFormatDate(stringDate: string | Date): string {
	const date = new Date(stringDate)
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
