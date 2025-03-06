import type { Config } from 'tailwindcss'

import { DesktopHeaderHeight, DesktopWidth, MobileHeaderHeight, MobileWidth } from './constants/ui'

export default {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./containers/**/*.{js,ts,jsx,tsx,mdx}',
		'./context/**/*.{js,ts,jsx,tsx,mdx}',
		'./lib/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				mobile: { max: `${MobileWidth}px` },
				tablet: { min: `${MobileWidth}px`, max: `${DesktopWidth}px` },
				desktop: { min: `${DesktopWidth}px` },
				// 'max-desktop': { max: '1248px' }, // 1248px 이하일 때 적용
				// 'max-mobile': { max: '768px' }, // 768px 이하일 때 적용
				// 'min-desktop': { min: '1248px' }, // 1248px 이상일 때 적용
				// 'min-mobile': { min: '768px' }, // 768px 이상일 때 적용
				// 'between-mobile-desktop': { min: '768px', max: '1248px' }, // 768px 이상 1248px 이하
			},
			fontFamily: {
				// 'pretendard': ['Pretendard', 'sans-serif'],
				// 'campton': ['Campton', 'sans-serif'],
				pretendard: ['var(--font-first)', 'sans-serif'], // 첫 번째 폰트
				campton: ['var(--font-second)', 'sans-serif'], // 두 번째 폰트
			},
			colors: {
				'primary-p': '#FF0FE2',
				'text-p': '#212121',
				bg: '#FFFFFF',
				primary: {
					'50': '#FFE2FA',
					'100': '#FFB4F2',
					'200': '#FF7AEB',
					'300': '#FF0FE2',
					'400': '#FC00DD',
					'500': '#EE00CF',
					'600': '#DD00CC',
					'700': '#C600C9',
					'800': '#B100C4',
					'900': '#8A00BD',
				},
				system: {
					red: '#D32F2F',
					orange: '#F76027',
					green: '#4CAF50',
					blue: '#0091EA',
				},
				achromatic: {
					'0': '#FFFFFF',
					'50': '#FAFAFA',
					'100': '#F5F5F5',
					'200': '#EEEEEE',
					'300': '#E0E0E0',
					'400': '#BDBDBD',
					'500': '#9E9E9E',
					'600': '#757575',
					'700': '#616161',
					'800': '#424242',
					'850': '#333333',
					'900': '#212121',
					black: '#000000',
				},
			},
			placeholderColor: {
				achromatic: {
					'50': '#fff',
					'100': '#F5F5F5',
					'200': '#EFEFEF',
					'300': '#E1E1E1',
					'400': '#BEBEBE',
					'500': '#9F9F9F',
					'600': '#767676',
					'700': '#626262',
					'800': '#434343',
					'850': '#333333',
					'900': '#222222',
					black: '#000000',
				},
			},
			width: {
				desktop: `${DesktopWidth}px`,
				desktop2: `${DesktopWidth}px`,
				mobile: `${MobileWidth}px`,
				'mobile-side-padding': 'calc(100% - 40px)',
				'mobile-popup': 'calc(100% - 40px)',
			},
			maxWidth: {
				desktop: `${DesktopWidth}px`,
				desktop2: `${DesktopWidth}px`,
				mobile: `${MobileWidth}px`,
			},
			height: {
				'header-desktop': `${DesktopHeaderHeight}px`,
				'header-mobile': `${MobileHeaderHeight}px`,
				'bottom-gnb': '56px',
				viewScreen: 'calc(var(--vh,1vh)*100)',
				'viewScreen-mobile': 'calc(var(--vh,1vh)*100 + 1px)',
				'viewScreen-header-desktop': `calc(var(--vh,1vh)*100 - ${DesktopHeaderHeight}px)`,
				'viewScreen-header-mobile': `calc(var(--vh,1vh)*100 - ${MobileHeaderHeight}px)`,
				'viewScreen-bottom-gnb': 'calc(var(--vh,1vh)*100 - 56px)',
			},
			minHeight: {
				viewScreen: 'calc(var(--vh,1vh)*100)',
				'viewScreen-header-desktop': `calc(var(--vh,1vh)*100 - ${DesktopHeaderHeight}px)`,
				'viewScreen-header-mobile': `calc(var(--vh,1vh)*100 - ${MobileHeaderHeight}px)`,
			},
			maxHeight: {
				viewScreen: 'calc(var(--vh,1vh)*100)',
			},
			padding: {
				'header-desktop': `${DesktopHeaderHeight}px`,
				'header-mobile': `${MobileHeaderHeight}px`,
				'side-mobile': '20px',
				'bottom-gnb': '56px',
			},
			inset: {
				'header-desktop': `${DesktopHeaderHeight}px`,
				'header-mobile': `${MobileHeaderHeight}px`,
			},
			spacing: {
				'main-header': '60px',
			},
			boxShadow: {
				'achromatic-1': '0 8px 20px 0 rgba(0, 0, 0, 0.35)',
				'achromatic-2': '0 16px 40px 0 rgba(0, 0, 0, 0.5)',
				'achromatic-3': '0 4px 0 0 rgba(0, 0, 0, 0.1)',
				'achromatic-4': '0 4px 8px 0 rgba(0, 0, 0, 0.08)',
			},
			transitionProperty: {
				padding: 'padding',
				background: 'background',
				shadow: 'box-shadow',
				'transform-opacity': 'transform, opacity',
			},
			borderRadius: {
				primary: '20px',
			},
		},
	},
	plugins: [],
} satisfies Config
