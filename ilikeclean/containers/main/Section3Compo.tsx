import Image from 'next/image'
import { FC } from 'react'

import ButtonSolid from '@/components/buttons/ButtonSolid'
import TitleTag from '@/components/tags/TitleTag'

type Props = {
	tagLabel: string
	subTitle: string
	title: {
		text: string
		noBold?: boolean
	}[]
	description: string
	imgSrc: string
	buttonLabel?: string
	reverse?: boolean
}
const Section3Compo: FC<Props> = ({ tagLabel, subTitle, title, description, imgSrc, buttonLabel, reverse }) => {
	return (
		<div
			className={[
				'mt-24 flex items-center justify-between py-5',
				reverse ? 'flex-row-reverse' : '',
				'mobile:mt-12 mobile:flex-col-reverse',
			].join(' ')}>
			<div className={['shrink-0 overflow-hidden rounded-3xl', reverse ? 'ml-[5%]' : 'mr-[5%]'].join(' ')}>
				<Image src={imgSrc} alt={'test'} width={550} height={550} />
			</div>
			<div className={['flex w-full flex-col justify-center', reverse ? 'items-end' : ''].join(' ')}>
				<TitleTag className={'!w-[74px]'}>{tagLabel}</TitleTag>
				<h2 className={'head-2 mt-10 !font-normal'}>{subTitle}</h2>
				<div className={['mt-10', reverse ? 'text-right' : ''].join(' ')}>
					{title.map((tit, idx) => (
						<h1 key={idx} className={['head-1 !leading-[1.2]', tit.noBold ? '!font-normal' : ''].join(' ')}>
							{tit.text}
						</h1>
					))}
				</div>
				<h2 className={'head-2 mt-10 !font-normal'}>{description}</h2>
				{buttonLabel && <ButtonSolid className={'mt-10 !w-[180px] rounded-lg'}>{buttonLabel}</ButtonSolid>}
			</div>
		</div>
	)
}

export default Section3Compo
