import { ActionData } from '~/routes/authors/models/author.server'

export function ShowError({ value }: { value: string | null | undefined }) {
	return (
		<>
			{value ? (
				<>
					<br />
					<em className='text-red-500'>{value}</em>
				</>
			) : null}
		</>
	)
}
