import { FC, SVGAttributes } from 'react'

import { IconNameType } from '@/constants/icon'

type Props = SVGAttributes<SVGSVGElement> & {
	name: IconNameType | undefined
}
const Icon: FC<Props> = props => {
	const { name, className, viewBox = '0 0 24 24', width = 24, fill = '#212121', ...rest } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={width}
			viewBox={viewBox}
			className={className ? className : ''}
			style={{ color: fill }} // fill 적용
			{...rest}>
			<use href={`#${name}`} />
		</svg>
	)
}
export default Icon
