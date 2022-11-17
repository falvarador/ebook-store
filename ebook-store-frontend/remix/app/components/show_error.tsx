import { ActionData } from '~/routes/authors/types/action_data'

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
