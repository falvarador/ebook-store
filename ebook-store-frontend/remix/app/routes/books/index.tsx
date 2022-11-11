import { Link } from '@remix-run/react'

export function ErrorBoundary ({ error: { message } }: { error: Error }) {
  return (
    <main>
      <h4>Page error loading  :(</h4>
      <h5>An error was ocurred - lets take you <Link to="/">home</Link></h5>
    </main>
  )
}

export default function Index () {
  return (
    <main>
        <h1>Books</h1>
    </main>
  )
}
