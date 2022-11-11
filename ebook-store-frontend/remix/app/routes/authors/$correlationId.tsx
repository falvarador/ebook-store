import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { Form, Link, useActionData } from '@remix-run/react'
import { getAuthor, createAuthor } from '~/models/author.server'

type LoaderData = {
  author: Awaited<ReturnType<typeof getAuthor>>;
};

export const loader: LoaderFunction = async ({ params }) => {
  return json<LoaderData>({
    author: await getAuthor(params.correlationId as string)
  })
}

type ActionData =
  | {
      surname: null | string;
      name: null | string;
      birthday: null | string;
    }
  | undefined;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const name = formData.get('name') as string
  const surname = formData.get('surname') as string
  const birthday = formData.get('birthday') as string

  const errors: ActionData = {
    name: name ? null : 'Name is required',
    surname: surname ? null : 'Surname is required',
    birthday: birthday ? null : 'Birthday is required'
  }

  const hasErrors = Object.values(errors).some(
    (errorMessage) => errorMessage
  )

  if (hasErrors) { return json<ActionData>(errors) }

  await createAuthor({
    correlationId: '',
    name,
    surname,
    birthday: new Date(birthday)
  })

  return redirect('/authors')
}

export function ErrorBoundary ({ error: { message } }: { error: Error }) {
  return (
      <main>
        <h4>Couldn't retrieve the author :(</h4>
        <h5>An error was ocurred - lets take you <Link to="/">home</Link></h5>
      </main>
  )
}

export default function Index () {
  const errors = useActionData<ActionData>()

  return (
    <Form method="post">
    <p>
      <label>Name</label>
      <input type="text" name="name"/>
      {errors?.name
        ? (
            <>
                <br />
                <em className='text-red-500'>{errors.name}</em>
            </>
          )
        : null}
    </p>
    <p>
      <label>Surname</label>
      <input type="text" name="surname"/>
      {errors?.surname
        ? (
            <>
                <br />
                <em className='text-red-500'>{errors.surname}</em>
            </>
          )
        : null}
    </p>
    <p>
      <label>Birthday</label>
      <input type="date" name="birthday"/>
      {errors?.birthday
        ? (
            <>
                <br />
                <em className='text-red-500'>{errors.birthday}</em>
            </>
          )
        : null}
    </p>
    <p>
      <button type="submit">
        Add new
      </button>
    </p>
  </Form>
  )
}
