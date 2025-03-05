import localFont from 'next/font/local'

export const pretendard = localFont({
	src: [
		{
			path: '../fonts/pretendard/Pretendard-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/pretendard/Pretendard-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../fonts/pretendard/Pretendard-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-first',
})
