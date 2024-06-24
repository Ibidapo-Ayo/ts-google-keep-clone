import { useContext, useState } from 'react'
import { GoogleKeepCloneContext } from '../../context/GoogleKeepCloneContext'
import { FiCheck } from 'react-icons/fi'
import Button from '../../components/Button'
import { PinIcon } from 'lucide-react'
import IconButtons from '../../components/ui/IconButtons'
import ShowList from './components/ShowList'

const PinnedTasks = () => {
  const { pinnedTasks, setShowTasks, setPinnedTasks, selectedTask, showTasks } = useContext(GoogleKeepCloneContext)
  const [hoverOnElement, setHoverOnElement] = useState<number | undefined>(undefined)


  const [selectedTasks, setSelectedTasks] = selectedTask

  const handleHoverElements = (index: number) => {
    setHoverOnElement(index)
  }

  const updateTask = (id: number) => {
    const updatedTasks = showTasks.map((item)=>{
      if(item.id === id){
        return {...item, pinned: false}
      }
      return item
    })
    setShowTasks(updatedTasks)
  }
  return (
    <div>
      <h6 className="uppercase tracking-wide text-sm font-semibold text-left">Pinned</h6>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
        {showTasks.filter((tasks) => tasks.pinned).length > 0 ? showTasks.filter((tasks) => tasks.pinned).map((pinned, index) => (
          <div className={`relative px-2 py-1 pb-4 rounded-md min-h-[60px] w-64  hover:border-2 hover:border-black  space-y-3 hover:shadow-md hover:transition flex flex-col justify-between ${selectedTasks.some((id) => pinned.id === id) ? "border-secondary-dark border-[2px]" : "border-gray-300"}`} key={`${index}-GoogleKeepId`} onMouseEnter={() => handleHoverElements(index)} onMouseLeave={() => {
            setHoverOnElement(undefined)
          }}>
            <div className="space-y-3">
              <div className={`${hoverOnElement === index || selectedTasks.some((id) => pinned.id === id) ? "block" : "hidden"} absolute rounded-full bg-black -top-2 -left-2 px-1 py-1 cursor-pointer`}
                onClick={() => {
                  if (selectedTasks.some((id) => id === pinned.id)) {
                    const filteredSelectedTasks = selectedTasks.filter((task_id) => task_id !== pinned.id)
                    setSelectedTasks(filteredSelectedTasks)
                    return
                  }

                  setSelectedTasks((prev) => [...prev, pinned.id])
                }}
              >
                <FiCheck className="text-white text-md font-bold " />
              </div>
            </div>

            <div className="grid grid-cols-[1fr,35px] items-center">
              <div className="w-11/12">
                <h4 className="text-wrap font-semibold tracking-tight text-md">{pinned.title}</h4>
              </div>
              <div className="h-7">
                {hoverOnElement === index && (
                  <Button variant="focus" size="icon3" className={`${hoverOnElement === index ? "block" : "hidden"} grid items-center justify-center`} onClick={() => updateTask(pinned.id)}>
                    <PinIcon className="w-4" />
                  </Button>

                )}
              </div>
            </div>
            <div className="font-normal text-justify space-y-3 select-none">
              {pinned.isAList ? (
                <ShowList task={pinned} />
              ) : (
                pinned.note.split("\n").map((note: string, index: number) => {
                  return (
                    note && <p key={index}>{note}</p>
                  )
                })
              )}
            </div>
            <div className="flex space-x-2">
              {pinned.collaborator.map((_collaborator) => {
                return (
                  <div className="h-6 w-6 rounded-full" key={_collaborator.email}>
                    <img src="/images/profile/ibidapo-ayomide.jpg" className='w-full h-full rounded-full' />
                  </div>
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