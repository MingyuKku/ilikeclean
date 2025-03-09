'use server'

import { headers } from 'next/headers'

/**
 * 루트 컴포넌트에서 여러가지 비동기 작업을 실행
 */
export const fetchRootInit = async () => {
	const headersList = await headers()
	const userAgent = headersList.get('user-agent')

	return {
		userAgent,
	}
}
