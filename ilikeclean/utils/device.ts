import { DesktopRegex, MobileRegex } from '@/constants/validRegex'

/**
 * @param userAgent = 유저 에이전트 텍스트
 * @return true = 모바일 기기(테블릿 제외) / false = 모바일 기기 아님
 */
export const isMobileAgent = (userAgent: string | null): boolean => {
	if (!userAgent) return false
	return MobileRegex.test(userAgent)
}

/**
 * @param userAgent = 유저 에이전트 텍스트
 * @return true = 데스크탑(데스크탑,노트북) / false = 데스크탑 아님
 */
export const isDesktopAgent = (userAgent: string | null) => {
	if (!userAgent) return false
	return DesktopRegex.test(userAgent)
}
