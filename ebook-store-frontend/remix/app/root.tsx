import { useContext, useEffect } from 'react'

import * as Remix from '@remix-run/react'
import type { LinksFunction, MetaFunction } from '@remix-run/node'

import { ChakraProvider } from '@chakra-ui/react'
import { withEmotionCache } from '@emotion/react'

import { ClientStyleContext, ServerStyleContext } from '~/styles/context'
import { theme } from '~/styles/theme'

import Layout from '~/layout'
import { Error } from '~/components/error'

export const links: LinksFunction = () => {
	return [
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
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
				<Remix.Meta />
				<Remix.Links />
			</head>
			<body>
				<Error
					title='We can not load the page!!!'
					message='An error was ocurred'
				/>
				<Remix.Scripts />
			</body>
		</html>
	)
}

interface DocumentProps {
	children: React.ReactNode
}

const Document = withEmotionCache(
	({ children }: DocumentProps, emotionCache) => {
		const serverStyleData = useContext(ServerStyleContext)
		const clientStyleData = useContext(ClientStyleContext)

		// Only executed on client
		useEffect(() => {
			// re-link sheet container
			emotionCache.sheet.container = document.head
			// re-inject tags
			const tags = emotionCache.sheet.tags
			emotionCache.sheet.flush()
			tags.forEach(tag => {
				;(emotionCache.sheet as any)._insertTag(tag)
			})
			// reset cache to reapply global styles
			clientStyleData?.reset()
		}, [])

		return (
			<html lang='en'>
				<head>
					<Remix.Meta />
					<Remix.Links />
					{serverStyleData?.map(({ key, ids, css }) => (
						<style
							key={key}
							data-emotion={`${key} ${ids.join(' ')}`}
							dangerouslySetInnerHTML={{ __html: css }}
						/>
					))}
				</head>
				<body>
					{children}
					<Remix.ScrollRestoration />
					<Remix.Scripts />
					<Remix.LiveReload />
				</body>
			</html>
		)
	}
)

export default function App() {
	return (
		<Document>
			<ChakraProvider theme={theme}>
				<Layout />
			</ChakraProvider>
		</Document>
	)
}
