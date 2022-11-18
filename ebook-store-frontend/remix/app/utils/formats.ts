export function toFormatDate(
	stringDate: string | Date,
	asInput: boolean = false
): string {
	const date = new Date(stringDate)
	return asInput
		? date.toISOString().split('T')[0]
		: date.toLocaleDateString('en-GB', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
		  })
}
