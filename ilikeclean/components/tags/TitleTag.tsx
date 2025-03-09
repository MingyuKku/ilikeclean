import { FC, HTMLAttributes, ReactNode } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
	children?: ReactNode
}
const TitleTag: FC<Props> = props => {
	const { children, className, ...rest } = props
	return (
		<div
			{...rest}
			className={[
				className || '',
				'sub-t-1 rounded-full bg-system-green px-4 text-achromatic-0',
				'flex h-8 items-center justify-center whitespace-nowrap',
			].join(' ')}>
			{children}
		</div>
	)
}

export default TitleTag
