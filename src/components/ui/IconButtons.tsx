/* eslint-disable @typescript-eslint/no-unused-vars */
import { Bell, Image, MoreVertical, Palette, UserPlus } from 'lucide-react'
import Button from '../Button'
import { BiArchiveIn } from 'react-icons/bi'
import { useContext } from 'react'
import { GoogleKeepCloneContext } from '../../context/GoogleKeepCloneContext'

const IconButtons = () => {
    const {openAction} = useContext(GoogleKeepCloneContext)
    const [_, setOpenActions] = openAction


    return (
        <div className='flex'>
            <Button variant="ghost" size="icon3">
                <Bell className="w-4" />
            </Button>
            <Button variant="ghost" size="icon3" onClick={()=> {
                setOpenActions("collaborator")
            }}>
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