import Image from 'next/image'

import SectionTitle from '@/components/texts/SectionTitle'

const Section4 = () => {
	const pictures = [
		['/images/TalkMedia_3509268759897993217_1.jpeg', '/images/TalkMedia_3509268759897993217_2.jpeg'],
		['/images/TalkMedia_3520912985879193600_0.jpg', '/images/TalkMedia_i_ponbki.jpg.jpg'],
	]

	return (
		<div className={'relative bg-achromatic-black py-28 mobile:py-12'}>
			<Image
				src={'/images/woman-5928694_640.jpg'}
				alt={'bg'}
				fill
				className={'absolute left-0 top-0 h-full w-full object-cover opacity-20'}
			/>
			<div className={'relative z-[1] mx-auto max-w-desktop'}>
				<SectionTitle
					className={'!text-left text-achromatic-0'}
					subTitleTextClass={'!font-normal !text-achromatic-100'}
					subTitle={'돈내고 스트레스 받으실 때 있으시죠?'}
					title={[
						{
							text: '내 집처럼 내 가족처럼 소중하게',
						},
						{
							text: '언제나 청결하고 깨끗한 공간에서',
						},
						{
							text: '마음 놓고 편하게 맡겨 주십시요!',
							isHighlighted: true,
						},
					]}
				/>
				<div className={'mt-8 flex'}>
					{pictures.map((picture, index) => (
						<div key={index} className={'mr-[5%] flex-1 first:mt-8 last:mr-0'}>
							{picture.map((img, idx) => (
								<div key={idx} className={'mb-[8%] h-[700px] overflow-hidden rounded-3xl last:mb-0'}>
									<Image
										src={img}
										alt={'image'}
										width={500}
										height={550}
										className={'h-full object-cover'}
									/>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Section4
