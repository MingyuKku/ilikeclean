import Image from 'next/image'

import ButtonSolid from '@/components/buttons/ButtonSolid'
import { UiSize } from '@/constants/ui'

const Header = () => {
	const Menu = ['메뉴 1', '메뉴 2', '메뉴 3']

	return (
		<header
			className={[
				'fixed left-0 top-0 z-40 h-header-desktop w-full',
				'flex justify-center border-b border-achromatic-500',
			].ClassList()}>
			<div className="inner flex h-full w-full max-w-desktop items-center justify-between text-achromatic-100">
				<div className="left flex shrink-0 items-center">
					<div className="mr-2 w-[54px]">
						<Image src="/images/bi-large.png" width={54} height={54} alt="bi" />
					</div>
					<h1 className="head-2">좋아서 하는 청소</h1>
				</div>
				<div className="right flex items-center">
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
			</div>
		</header>
	)
}

export default Header
