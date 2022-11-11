import { Outlet } from '@remix-run/react'
import { Navbar } from '~/components/navbar'

export default function Layout () {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  )
}
