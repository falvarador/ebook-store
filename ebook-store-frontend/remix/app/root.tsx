import type { MetaFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import Layout from '~/routes/layout'

import styles from '~/styles/app.css'
import { PageError } from './components/page_error'

export const links: Function = () => {
	return [
		{
			rel: 'stylesheet',
			href: styles,
		},
		{
			rel: 'stylesheet',
			href: 'https://unpkg.com/@picocss/pico@latest/css/pico.min.css',
			preloaded: 'true',
		},
	]
}

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Ebook Store',
	viewport: 'width=device-width,initial-scale=1',
})

export function ErrorBoundary() {
	return (
		<html>
			<head>
				<title>Oh no!</title>
				<Meta />
				<Links />
			</head>
			<body>
				<PageError
					title='We can not load the page!!!'
					message='An error was ocurred'
				/>
				<Scripts />
			</body>
		</html>
	)
}

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
