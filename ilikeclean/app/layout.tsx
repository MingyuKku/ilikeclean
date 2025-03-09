import '@/utils/index'
import '@/styles/tailwind.css'

import type { Metadata } from 'next'
import React from 'react'

import { fetchRootInit } from '@/app/actions/rootInit'
import Header from '@/components/headers/Header'
import IconSprite from '@/components/icons/IconSprite'
import { pretendard } from '@/fonts'

export const metadata: Metadata = {
	title: '좋아서 하는 청소',
	description: '좋아서 하는 청소',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const { userAgent } = await fetchRootInit()

	return (
		<html lang="en">
			<body className={[pretendard.variable].join(' ')}>
				<IconSprite />
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
