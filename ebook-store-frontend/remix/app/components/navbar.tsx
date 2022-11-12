import { Link } from '@remix-run/react'

export function Navbar () {
  return (
    <nav className='text-center space-x-4'>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/authors">Authors</Link>
    </nav>
  )
}
