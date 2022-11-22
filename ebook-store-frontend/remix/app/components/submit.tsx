type SubmitProps = {
	isNew: boolean
	isCreating: boolean
	isUpdating: boolean
}

export function Submit({ isNew, isCreating, isUpdating }: SubmitProps) {
	return (
		<button
			aria-busy={isCreating || isUpdating}
			className='bg-picocyan dark:bg-cyan-500'
			type='submit'
			name='intent'
			value={isNew ? 'create' : 'update'}
			disabled={isCreating || isUpdating}
		>
			{isNew ? (isCreating ? 'Creating...' : 'Create') : null}
			{isNew ? null : isUpdating ? 'Updating...' : 'Update'}
		</button>
	)
}
