import { Button, Stack } from '@chakra-ui/react'

import { RiArrowRightUpLine } from 'react-icons/ri'

type SubmitProps = {
	isNew: boolean
	isLoading: boolean
}

export function Submit({ isNew, isLoading }: SubmitProps) {
	return (
		<Stack direction='row' spacing={4} paddingTop={6}>
			<Button
				isLoading={isLoading}
				leftIcon={<RiArrowRightUpLine />}
				loadingText={isNew ? 'Creating...' : 'Updating...'}
				name='intent'
				type='submit'
				value={isNew ? 'create' : 'update'}
				colorScheme='teal'
			>
				{isNew ? 'Create' : 'Update'}
			</Button>
		</Stack>
	)
}
