import SectionTitle from '@/components/texts/SectionTitle'
import Section3Compo from '@/containers/main/Section3Compo'

const Section3 = () => {
	return (
		<div className={'mx-auto max-w-desktop py-28 mobile:py-12'}>
			<SectionTitle
				subTitle={'저는 청소를 너무나 좋아합니다'}
				title={[
					{
						text: '왜 저를 믿고 맡겨주셔야 하는지',
					},
					{
						text: '딱 3가지 이유만 말씀드리겠습니다',
						isHighlighted: true,
					},
				]}
			/>
			<Section3Compo
				tagLabel={'이유1'}
				subTitle={'재계약율이 무려 95%라구요!'}
				title={[
					{
						text: '처음부터 끝까지',
						noBold: true,
					},
					{
						text: '고객을 내 가족처럼 생각하며',
					},
					{
						text: '세심하고 꼼꼼하게 깔끔하게!',
					},
				]}
				description={'청소 전문 교육을 받은 대표님이 직접 현상을 방문합니다'}
				imgSrc={'/images/TalkMedia_3509268759897993217_3.jpeg'}
				buttonLabel={'청소 진행 가이드'}
			/>
			<Section3Compo
				reverse
				tagLabel={'이유2'}
				subTitle={'재계약율이 무려 95%라구요!'}
				title={[
					{
						text: '처음부터 끝까지',
						noBold: true,
					},
					{
						text: '고객을 내 가족처럼 생각하며',
					},
					{
						text: '세심하고 꼼꼼하게 깔끔하게!',
					},
				]}
				description={'청소 전문 교육을 받은 대표님이 직접 현상을 방문합니다'}
				imgSrc={'/images/TalkMedia_i_36f78845c127.jpeg.jpeg'}
				buttonLabel={'청소 진행 가이드'}
			/>
			<Section3Compo
				tagLabel={'이유3'}
				subTitle={'재계약율이 무려 95%라구요!'}
				title={[
					{
						text: '처음부터 끝까지',
						noBold: true,
					},
					{
						text: '고객을 내 가족처럼 생각하며',
					},
					{
						text: '세심하고 꼼꼼하게 깔끔하게!',
					},
				]}
				description={'청소 전문 교육을 받은 대표님이 직접 현상을 방문합니다'}
				imgSrc={'/images/TalkMedia_3520912985879193600_1.jpg'}
				buttonLabel={'청소 진행 가이드'}
			/>
		</div>
	)
}

export default Section3
