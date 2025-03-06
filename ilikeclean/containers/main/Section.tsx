'use client'

import dynamic from 'next/dynamic'

const Section1 = dynamic(() => import('@/containers/main/Section1'), { ssr: false })
const Section2 = dynamic(() => import('@/containers/main/Section2'), { ssr: false })
const Section3 = dynamic(() => import('@/containers/main/Section3'), { ssr: false })

const Section = () => {
	return (
		<div className={'w-full'}>
			<Section1 />
			<Section2 />
			<Section3 />
		</div>
	)
}

export default Section
