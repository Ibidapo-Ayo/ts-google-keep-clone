import { useContext, useState } from 'react'
import { GoogleKeepCloneContext } from '../context/GoogleKeepCloneContext'
import { FiCheck } from 'react-icons/fi'
import Button from './Button'
import { PinIcon } from 'lucide-react'
import IconButtons from './IconButtons'

const PinnedTasks = () => {
  const { pinnedTasks, setShowTasks, setPinnedTasks } = useContext(GoogleKeepCloneContext)
  const [hoverOnElement, setHoverOnElement] = useState<number | undefined>(undefined)

  const handleHoverElements = (index: number) => {
    setHoverOnElement(index)
  }

  const removePinned = (id: number) => {
    const removed = pinnedTasks.filter((note) => note.id !== id)
    setPinnedTasks(removed)
    const showRemoved = pinnedTasks.filter((note) => note.id === id)
    setShowTasks(showRemoved)
  }
  return (
    <div>
      <h6 className="uppercase tracking-wide text-sm font-semibold text-left">Pinned</h6>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
        {pinnedTasks.length > 0 ? pinnedTasks.map((pinned, index) => (
          <div className="relative px-2 py-1 pb-4 rounded-md min-h-[60px] w-64 border hover:border-[2px] border-gray-300 space-y-3 hover:shadow-md hover:transition flex flex-col" key={`${index}-GoogleKeepId`} onMouseEnter={() => handleHoverElements(index)} onMouseLeave={() => {
            setHoverOnElement(undefined)
          }}>
            <div className={`${hoverOnElement === index ? "block" : "hidden"} absolute rounded-full bg-black -top-2 -left-2 px-1 py-1`}>
              <FiCheck className="text-white text-md font-bold " />
            </div>

            <div className="grid grid-cols-[1fr,35px] items-center">
              <div className="w-11/12">
                <h4 className="text-wrap font-semibold tracking-tight text-md">{pinned.title}</h4>
              </div>
              <div className="h-7">
                {hoverOnElement === index && (
                  <Button variant="ghost" size="icon3" className={`${hoverOnElement === index ? "block" : "hidden"} grid items-center justify-center`} onClick={() => removePinned(pinned.id)}>
                    <PinIcon className="w-4" />
                  </Button>

                )}
              </div>
            </div>
            <div className="font-normal text-justify space-y-3 select-none">
              {pinned.note.split("\n").map((note: string, index: number) => {
                return (
                  note && <p key={index}>{note}</p>
                )
              })}
            </div>
            <div className="flex flex-row h-7 shrink-0">
              {hoverOnElement === index && (
                <IconButtons />
              )}
            </div>
          </div>
        )) : (
          <p>No pinned tasks</p>
        )
        }
      </div>

    </div >
  )
}

export default PinnedTasks