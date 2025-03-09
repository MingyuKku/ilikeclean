import { FC } from 'react'

type Props = {
	subTitle: string
	title: {
		text: string
		isHighlighted?: boolean
	}[]
	className?: string
	subTitleTextClass?: string
	highlightTextClass?: string
}
const SectionTitle: FC<Props> = ({ subTitle, title, className, subTitleTextClass, highlightTextClass }) => {
	return (
		<div className={['title text-center', className || ''].join(' ')}>
			<h2 className={['head-2 mb-8 text-achromatic-500', 'mobile:head-4', subTitleTextClass || ''].join(' ')}>
				{subTitle}
			</h2>
			{title.map((tit, idx) => (
				<h1
					key={idx}
					className={[
						'head-1',
						'mobile:head-3',
						tit.isHighlighted ? `text-primary-300 ${highlightTextClass || ''}` : '',
					].join(' ')}>
					{tit.text}
				</h1>
			))}
		</div>
	)
}

export default SectionTitle
