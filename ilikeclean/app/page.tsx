import Section from '@/containers/main/Section'
import VisualVideo from '@/containers/main/VisualVideo'

const page = () => {
	return (
		<div className={'flex flex-col items-center justify-center'}>
			<VisualVideo />
			<Section />
		</div>
	)
}
export default page
