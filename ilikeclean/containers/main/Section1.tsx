import SectionTitle from '@/components/texts/SectionTitle'

const Section1 = () => {
	const problems = [
		{
			title: '믿고 맡길 수 있는지요?',
			description: ['잘못된 세재 사용, 도난,', '제대로 청소하지 않는 업체'],
		},
		{
			title: '명확하지 않은 청소 범위',
			description: ['믿고 맡겼는데 어딜 작업하는지도', '알 수 없는 용역 업체'],
		},
		{
			title: '청소 결과가 엉망이네!',
			description: ['주먹구구식 작업으로 바닥엔 먼지', '창틀은 찌든때가 그대로'],
		},
		{
			title: '부당한 가격, 현장비용 추가',
			description: ['투명하지 않은 가격으로', '현장에서 덤탱이 씌우는 업체들'],
		},
		{
			title: '네? 말도 안되는 상황!',
			description: ['단순 일용직 대행으로', '작업지에서 담배까지 피는 현실'],
		},
		{
			title: '연락두절 잠수타는 업체',
			description: ['엉터리 청소 작업 후', '적반하장으로 소리지르는 업체'],
		},
	]

	return (
		<div className={'mx-auto max-w-desktop py-28 mobile:py-12'}>
			<SectionTitle
				subTitle={'청소를 맡겨야 하는디...'}
				title={[
					{
						text: '아직도 요런 문제들로 인해',
					},
					{
						text: '업체 선택을 못하고 있는 당신을 위해!',
						isHighlighted: true,
					},
				]}
			/>
			<div className={['mt-20 grid grid-cols-2 gap-8', 'mobile:mt-10 mobile:block mobile:px-4'].join(' ')}>
				{problems.map((problem, idx) => (
					<div
						key={idx}
						className={[
							'rounded-3xl border border-achromatic-500 p-10 text-center',
							'transition-background',
							'bg-achromatic-0 hover:bg-achromatic-100',
							'mobile:mb-4 mobile:p-6 mobile:last:mb-0',
						].join(' ')}>
						<h3 className={'head-2 mobile:head-3 mb-5'}>{problem.title}</h3>
						{problem.description.map((desc, i) => (
							<p key={i} className={'sub-t-1 mobile:sub-t-2'}>
								{desc}
							</p>
						))}
					</div>
				))}
			</div>
			<div className={'mt-20 text-center mobile:mt-10'}>
				<h1 className={'head-2 !text-[34px] text-primary-300 mobile:!text-[20px]'}>
					이런 고민들로부터 이제 해방될 수 있습니다!
				</h1>
			</div>
		</div>
	)
}

export default Section1
