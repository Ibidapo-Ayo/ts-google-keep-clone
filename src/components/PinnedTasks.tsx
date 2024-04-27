import { useContext, useState } from 'react'
import { GoogleKeepCloneContext } from '../context/GoogleKeepCloneContext'
import { FiCheck } from 'react-icons/fi'
import HoverStyle from '../utils/HoverStyle'
import { IconsStyles2, IconsStyles3, MoreIcon } from '../utils/Icons'

const PinnedTasks = () => {
  const { pinnedTasks, setShowTasks, setPinnedTasks } = useContext(GoogleKeepCloneContext)
  const [hoverOnElement, setHoverOnElement] = useState<number | undefined>(undefined)

  const handleHoverElements = (index: number) => {
    setHoverOnElement(index)
  }

  const removePinned = (id:number)=>{
    const removed = pinnedTasks.filter((note)=> note.id !== id)
    setPinnedTasks(removed)
    const showRemoved = pinnedTasks.filter((note)=> note.id === id)
    setShowTasks(showRemoved)
  }
  return (
    <div>
      <h6 className="uppercase tracking-wide text-sm font-semibold text-left">Pinned</h6>
      {pinnedTasks.length > 0 ? pinnedTasks.map((pinned, index) => (
        <div className='px-3 py-7 rounded-md h-auto w-60 border hover:border-[2px] border-gray-300 space-y-3 hover:shadow-md hover:transition' key={index} onMouseEnter={() => handleHoverElements(index)} onMouseLeave={() => {
          setHoverOnElement(undefined)
        }}>
          {hoverOnElement === index && (
            <div className="absolute -mt-9 -ml-4">
              <div className="w-5 h-5 rounded-full bg-black grid justify-center items-center cursor-pointer">
                <FiCheck className="text-white text-md font-bold" />
              </div>
            </div>
          )}
          <div className="flex flex-row items-center">
            <div className="w-11/12">
              <h4 className="font-semibold tracking-tight text-md">{pinned.title}</h4>
            </div>
            <div className="h-7">
              {hoverOnElement === index && (
                <div onClick={() => removePinned(pinned.id)}>
                  <HoverStyle height="h-7" width="w-7" focussed={pinned.pinned}>
                    {IconsStyles3.icon}
                  </HoverStyle>
                </div>
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
          <div className="flex flex-row justify-between h-7">
            {hoverOnElement === index && (
              <>
                {
                  IconsStyles2.map((icon, index) => (
                    <div key={index}>
                      <HoverStyle height="h-7" width="w-7">
                        {icon.icon}
                      </HoverStyle>
                    </div>
                  ))
                }

                < HoverStyle height="h-7" width="w-7" >
                  <button>
                    {MoreIcon.icon}
                  </button>
                </HoverStyle>
              </>
            )}
          </div>
        </div>
  )): (
    <p>No pinned tasks</p>
  )
}
    </div >
  )
}

export default PinnedTasks