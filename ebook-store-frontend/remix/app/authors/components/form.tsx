import { Form as RemixForm } from '@remix-run/react'

import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
} from '@chakra-ui/react'

import { Submit } from '~/components/submit'

import { AuthorFormProps } from '~/authors/models/author.server'

import { toFormatDate } from '~/utils/formats'

export function Form(props: AuthorFormProps) {
	const { author, errors, isNew, isLoading } = props

	return (
		<RemixForm method='post' key={author?.correlationId ?? 'new'}>
			<FormControl
				as='fieldset'
				id='name'
				isRequired
				isInvalid={!!errors?.name}
			>
				<FormLabel>Name</FormLabel>
				<Input
					autoComplete='name'
					defaultValue={author?.name}
					name='name'
					placeholder='Enter your full name'
					type='text'
				/>
				<FormErrorMessage>{errors?.name}</FormErrorMessage>
			</FormControl>

			<FormControl
				as='fieldset'
				id='surname'
				isRequired
				isInvalid={!!errors?.surname}
			>
				<FormLabel paddingTop={4}>Surname</FormLabel>
				<Input
					autoComplete='name'
					defaultValue={author?.surname}
					name='surname'
					placeholder='Enter your surname'
					type='text'
				/>
				<FormErrorMessage>{errors?.surname}</FormErrorMessage>
			</FormControl>

			<FormControl id='birthday' isInvalid={!!errors?.surname}>
				<FormLabel paddingTop={4}>Birthday</FormLabel>
				<Input
					autoComplete='name'
					defaultValue={toFormatDate(author?.birthday, true)}
					name='birthday'
					type='date'
				/>
				<FormHelperText>Enter your birthday</FormHelperText>
				<FormErrorMessage>{errors?.birthday}</FormErrorMessage>
			</FormControl>

			<Submit isNew={isNew} isLoading={isLoading} />
		</RemixForm>
	)
}
