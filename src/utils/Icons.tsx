import { BiArchiveIn, BiCheckSquare, BiPalette, BiPin } from "react-icons/bi";
import { FaPaintBrush, FaRegImage } from "react-icons/fa";
import {FiBell, FiMoreVertical, FiUserPlus} from "react-icons/fi"


export const IconsStyles1 = [
    {
        icon: <BiCheckSquare className="text-2xl text-gray-500" />
    },
    {
        icon: <FaPaintBrush className="text-2xl text-gray-500" />
    },
    {
        icon: <FaRegImage className="text-2xl text-gray-500" />
    },
]

export const IconsStyles2 = [{
        icon: <FiBell className="text-md text-gray-500"  />
},
{
    icon: <FiUserPlus className="text-md text-gray-500"  />
},
{
    icon: <BiPalette className="text-md text-gray-500" />
},
{
    icon: <FaRegImage className="text-md text-gray-500" />
},

{
    icon:<BiArchiveIn className="text-md text-gray-500" />
}
]

export const MoreIcon = {
    icon: <FiMoreVertical className="text-md text-gray-500" />
}

export const IconsStyles3 = {
    icon: <BiPin className="text-md text-gray-500" />
}