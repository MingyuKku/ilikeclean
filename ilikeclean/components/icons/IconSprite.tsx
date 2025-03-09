import { IconNames } from '@/constants/icon'

const IconSprite = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
			<symbol id={IconNames.Menu}>
				<path d="M4 5H20V8H4V5Z" fill="currentColor" />
				<path d="M4 10H20V13H4V10Z" fill="currentColor" />
				<path d="M4 15H20V18H4V15Z" fill="currentColor" />
			</symbol>
		</svg>
	)
}

export default IconSprite
