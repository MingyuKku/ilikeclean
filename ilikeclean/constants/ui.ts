export const DesktopWidth = 1248
export const MobileWidth = 768
export const DesktopHeaderHeight = 90
export const MobileHeaderHeight = 56

export const UiSize = {
	ExtraLarge: 'xl',
	Large: 'lg',
	Middle: 'md',
	Small: 'sm',
} as const

export type UiSizeType = (typeof UiSize)[keyof typeof UiSize]

export const UiStyle = {
	Primary: 'primary',
	Second: 'second',
	Third: 'third',
} as const
export type UiStyleType = (typeof UiStyle)[keyof typeof UiStyle]
