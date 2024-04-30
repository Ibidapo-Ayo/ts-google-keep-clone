import { Bell, Image, MoreVertical, Palette, UserPlus } from 'lucide-react'
import Button from './Button'
import { BiArchiveIn } from 'react-icons/bi'

const IconButtons = () => {
    return (
        <div className='flex'>
            <Button variant="ghost" size="icon3">
                <Bell className="w-4" />
            </Button>
            <Button variant="ghost" size="icon3">
                <UserPlus className="w-4" />
            </Button>
            <Button variant="ghost" size="icon3">
                <Palette className="w-4" />
            </Button>
            <Button variant="ghost" size="icon3">
                <Image className="w-4" />
            </Button>
            <Button variant="ghost" size="icon3">
                <BiArchiveIn className="w-4" />
            </Button>
            <Button variant="ghost" size="icon3">
                <MoreVertical className="w-4" />
            </Button>
        </div>
    )
}

export default IconButtons