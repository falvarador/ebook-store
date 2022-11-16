import type { MetaFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import Layout from '~/routes/layout'

import styles from './styles/app.css'

export const links: Function = () => {
	return [
		{
			rel: 'stylesheet',
			href: styles,
		},
		{
			rel: 'stylesheet',
			href: 'https://cdn.simplecss.org/simple.min.css',
			preloaded: 'true',
		},
	]
}

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Ebook Store',
	viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
	return (
		<html lang='en'>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Layout />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
