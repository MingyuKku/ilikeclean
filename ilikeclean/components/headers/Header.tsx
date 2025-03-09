'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import ButtonSolid from '@/components/buttons/ButtonSolid'
import MobileMenu from '@/components/headers/MobileMenu'
import { DesktopHeaderHeight, UiSize } from '@/constants/ui'

const Header = () => {
	const Menu = ['메뉴 1', '메뉴 2', '메뉴 3']

	const [isActive, setIsActive] = useState<boolean>(false)

	useEffect(() => {
		const windowScrollHandler = () => {
			setIsActive(window.scrollY >= DesktopHeaderHeight)
		}

		window.addEventListener('scroll', windowScrollHandler)

		return () => {
			window.removeEventListener('scroll', windowScrollHandler)
		}
	}, [])

	return (
		<header
			className={[
				'fixed left-0 top-0 z-40 h-header-desktop w-full',
				'flex justify-center border-b',
				'transition-background duration-500 ease-in-out',
				'mobile:h-header-mobile',
				isActive
					? 'border-achromatic-0 bg-achromatic-0 text-achromatic-900'
					: 'border-achromatic-500 bg-transparent text-achromatic-100',
			].join(' ')}>
			<div
				className={['inner flex h-full w-full max-w-desktop items-center justify-between', 'mobile:px-4'].join(
					' ',
				)}>
				<div className="left flex shrink-0 items-center">
					<div className="mr-2 w-[54px] mobile:w-9">
						<Image src="/images/bi-large.png" width={54} height={54} alt="bi" />
					</div>
					<h1 className="head-2 mobile:head-3">좋아서 하는 청소</h1>
				</div>
				<div className="right flex items-center mobile:hidden">
					<ul className="menu flex items-center whitespace-nowrap">
						{Menu.map(item => (
							<li key={item} className="mr-4">
								{item}
							</li>
						))}
					</ul>
					<ButtonSolid size={UiSize.Middle} className="px-4">
						견적 문의하기
					</ButtonSolid>
				</div>
				<MobileMenu />
			</div>
		</header>
	)
}

export default Header
