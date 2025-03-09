'use client'

import ButtonSolid from '@/components/buttons/ButtonSolid'

const VisualVideo = () => {
	return (
		<div className={['visual-video relative h-viewScreen w-full', 'mobile:h-[74vh]'].join(' ')}>
			<video
				autoPlay
				loop
				muted
				className={'absolute left-0 top-0 h-full w-full object-cover object-center mix-blend-normal'}>
				<source src="/videos/cleanTrim.webm" type="video/webm" />
				<source src="/videos/cleanTrim.mp4" type="video/mp4" />
			</video>
			<div className="bg absolute left-0 top-0 z-10 h-full w-full bg-achromatic-black/70"></div>
			<div
				className={[
					'xy-center head-1 absolute z-10 flex flex-col items-center justify-center',
					'whitespace-nowrap !text-[64px] text-achromatic-0',
					'mobile:!text-[20px]',
				].join(' ')}>
				<h1>듬직한 청소업체를 찾고 계신가요?</h1>
				<h1>여기 믿음직한 청년이 해결해 드립니다!</h1>
				<ButtonSolid className={'mobile:sub-t-3 mt-5 !w-auto px-10 mobile:h-12'}>문의하러 가기</ButtonSolid>
			</div>
		</div>
	)
}

export default VisualVideo
