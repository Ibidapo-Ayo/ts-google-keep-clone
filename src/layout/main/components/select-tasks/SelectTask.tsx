import { BellPlus, MoreVertical, Palette, Pin, X } from 'lucide-react'
import { BiArchiveIn } from 'react-icons/bi'
import Button from '../../../../components/Button'
import { GoogleKeepCloneContext } from '../../../../context/GoogleKeepCloneContext'
import { useContext } from 'react'

const SelectTask = () => {
    const { selectedTask} = useContext(GoogleKeepCloneContext)
    const [selectedTasks, setSelectedTasks] = selectedTask
    return (
        <div className={`w-full absolute top-0 bg-white border-b border-b-secondary-border p-4 flex justify-between transition-transform duration-500  ${selectedTasks.length >= 1 ? "transform translate-y-3" : " transform -translate-y-full"}`}>
            <div className='flex space-x-4 w-1/2 items-center'>
                <Button variant={"ghost"} size={"icon1"} onClick={() => setSelectedTasks([])}>
                    <X className='text-secondary-text cursor-pointer' />
                </Button>
                {selectedTasks.length !== 0 && <p className='text-xl tracking-wide font-normal text-secondary-text'>{selectedTasks.length} Selected</p>}
            </div>
            <div className='flex justify-end space-x-2 text-blue-700'>
                <Button variant={"ghost"} size={"icon2"} onClick={() => {}}>
                    <Pin />
                </Button>
                <Button variant={"ghost"} size={"icon2"}>
                    <BellPlus />
                </Button>
                <Button variant={"ghost"} size={"icon2"}>
                    <Palette />
                </Button>
                <Button variant={"ghost"} size={"icon2"}>
                    <BiArchiveIn className="text-2xl" />
                </Button>
                <Button variant={"ghost"} size={"icon2"}>
                    <MoreVertical />
                </Button>
            </div>
        </div>
    )
}

export default SelectTask