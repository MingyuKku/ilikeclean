export * from './device'

/**
 * body 스크롤 막기
 * @param value true: 블락 / false: 해제
 */
export function bodyScrollControl(value: boolean) {
	if (typeof window === 'undefined') return

	// 아래 과정은 IOS기기에서도 바디 스크롤을 막기 위한 작업
	const { body }: { body: HTMLElement } = document

	if (value) {
		const scrollY = window.scrollY

		body.setAttribute('scroll', String(scrollY))

		body.style.position = 'fixed'
		body.style.overflow = 'hidden'
		body.style.left = '0px'
		body.style.right = '0px'
		body.style.top = `-${scrollY}px` // 현재 스크롤 위치로 고정되도록
	} else {
		body.style.removeProperty('position')
		body.style.removeProperty('overflow')
		body.style.removeProperty('left')
		body.style.removeProperty('right')
		body.style.removeProperty('top')

		window.scrollTo({
			top: Number(body.getAttribute('scroll')),
		})
	}
}
