import { Outlet } from '@remix-run/react'
import { Navbar } from '~/components/navbar'

// import styles from '~/layout.css'

export default function Layout () {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  )
}
