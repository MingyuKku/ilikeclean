'use client'

import { createContext, type FC, type ReactNode, useContext } from 'react'

import { isDesktopAgent, isMobileAgent } from '@/utils'

const initContext: UtilsContextType = {
	isMobile: false,
	isDesktop: false,
}

type UtilsContextType = {
	isMobile: boolean
	isDesktop: boolean
}
const UtilsContext = createContext<UtilsContextType>(initContext)

interface Props {
	userAgent: string | null
	children?: ReactNode
}
const ContextUtilsProvider: FC<Props> = ({ userAgent, children }) => {
	return (
		<UtilsContext.Provider
			value={{
				isMobile: isMobileAgent(userAgent),
				isDesktop: isDesktopAgent(userAgent),
			}}>
			{children}
		</UtilsContext.Provider>
	)
}

export default ContextUtilsProvider

export const useContextUtils = () => {
	const context = useContext(UtilsContext)
	return context
}
