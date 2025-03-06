import Image from 'next/image'

const Section2 = () => {
	const pictures = ['여기에 사진 1', '여기에 사진 2', '여기에 사진 3']

	return (
		<div className={'relative flex h-viewScreen flex-col items-center justify-center bg-achromatic-black py-24'}>
			<Image
				src={'/images/floor.jpg'}
				fill
				sizes={'100vw'}
				alt={'bg'}
				className={'h-full object-cover opacity-30'}
			/>
			<div className={'relative z-[1] w-full max-w-desktop'}>
				<div className="title text-center">
					<h2 className={'head-2 !text-[34px] text-system-red'}>급하다고 아무곳에다 맡겨버린다면?</h2>
					<div className={'mt-20 text-achromatic-0'}>
						<h1 className={'head-1 !font-normal'}>가격만 저렴한 업체에 맡겨버리면</h1>
						<h1 className={'head-1'}>결국 돌이킬 수 없는 결과를 맞이할 수도 있습니다</h1>
					</div>
				</div>
				<div className={'mt-20 flex items-center'}>
					{pictures.map((img, i) => (
						<div
							key={i}
							className={
								'mr-8 flex h-[300px] w-full items-center justify-center rounded-3xl bg-achromatic-0 last:mr-0'
							}>
							{img}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default Section2
