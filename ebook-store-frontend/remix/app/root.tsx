import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import Layout from '~/routes/layout'

import styles from '~/styles/global.css'

export const links: Function = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
      preloaded: 'true'
    }
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Ebook Store',
  viewport: 'width=device-width,initial-scale=1'
})

export default function App () {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
