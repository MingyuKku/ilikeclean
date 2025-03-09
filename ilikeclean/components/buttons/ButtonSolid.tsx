import { ButtonHTMLAttributes, FC, HTMLAttributes, ReactNode } from 'react'

import { UiSize, UiSizeType } from '@/constants/ui'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	size?: UiSizeType
	uiDisabled?: boolean // ui만 disabled 처리할지(이벤트 처리는 가능)
	children?: ReactNode
}
const ButtonSolid: FC<Props> = props => {
	const { size = UiSize.ExtraLarge, disabled, uiDisabled, className, children, ...rest } = props

	const getClassNames = (size: UiSizeType): HTMLAttributes<HTMLButtonElement>['className'] => {
		switch (size) {
			case UiSize.ExtraLarge:
				return 'h-[64px] rounded-sm sub-t-1'
			case UiSize.Large:
				return 'h-12 rounded-sm button-1-text'
			case UiSize.Middle:
				return 'h-10 rounded-sm button-2-text'
			case UiSize.Small:
				return 'w-auto h-8 rounded-full button-2-text'
			default:
				return ''
		}
	}

	return (
		<button
			{...rest}
			disabled={disabled}
			className={[
				'flex w-full items-center justify-center',
				'text-achromatic-0',
				getClassNames(size),
				uiDisabled
					? 'cursor-pointer bg-achromatic-300 text-achromatic-400'
					: disabled
						? 'cursor-not-allowed bg-achromatic-300 text-achromatic-400'
						: 'cursor-pointer bg-achromatic-900 hover:bg-primary-p active:bg-primary-600',
				className || '',
			].join(' ')}>
			{children}
		</button>
	)
}

export default ButtonSolid
