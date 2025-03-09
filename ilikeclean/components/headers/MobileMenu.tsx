import Icon from '@/components/icons/Icon'
import { IconNames } from '@/constants/icon'

const MobileMenu = () => {
	return (
		<div className={'desktop:hidden'}>
			<Icon name={IconNames.Menu} fill={'#fff'} />
		</div>
	)
}
export default MobileMenu
