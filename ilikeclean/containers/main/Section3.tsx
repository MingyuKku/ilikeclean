import Image from 'next/image'

const Section3 = () => {
	return (
		<div className={'mx-auto max-w-desktop py-24'}>
			<div className="title text-center">
				<h2 className={'head-2 mb-8 text-achromatic-500'}>저는 청소를 너무나 좋아합니다</h2>
				<h1 className={'head-1'}>왜 저를 믿고 맡겨주셔야 하는지</h1>
				<h1 className={'head-1 text-primary-300'}>딱 3가지 이유만 말씀드리겠습니다</h1>
			</div>
			<div className={'flex items-center justify-between'}>
				<div className={'w-1/2 overflow-hidden rounded-3xl'}>
					<Image src={'/images/TalkMedia_3509268759897993217_3.jpeg'} alt={'test'} width={550} height={550} />
				</div>
				<div className={'flex flex-col items-center justify-center'}>
					<span>이유1</span>
				</div>
			</div>
		</div>
	)
}

export default Section3
