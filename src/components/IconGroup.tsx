
import HoverStyle from '../utils/HoverStyle'
import { FiBell, FiUserPlus } from 'react-icons/fi'
import { BiPalette } from 'react-icons/bi'

const IconGroup = () => {
    return (
        <>
            <HoverStyle height="h-9" width="w-9">
                <FiBell className="text-md text-gray-500" />
            </HoverStyle>
            <HoverStyle height="h-9" width="w-9">
                <FiUserPlus className="text-md text-gray-500" />
            </HoverStyle>
            <HoverStyle height="h-9" width="w-9">
                <BiPalette className="text-md text-gray-500" />
            </HoverStyle>
        </>
    )
}

export default IconGroup