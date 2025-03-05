import '@/utils/index'
import '@/styles/tailwind.css'

import type { Metadata } from 'next'

import Header from '@/components/headers/Header'
import { pretendard } from '@/fonts'

export const metadata: Metadata = {
	title: '좋아서 하는 청소',
	description: '좋아서 하는 청소',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={[pretendard.variable].ClassList()}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
