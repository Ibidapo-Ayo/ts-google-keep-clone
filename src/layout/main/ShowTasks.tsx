import { useContext, useState } from "react"
import HoverStyle from "../../utils/HoverStyle"
import { IconsStyles2, IconsStyles3, MoreIcon } from "../../utils/Icons"
import { GoogleKeepCloneContext } from "../../context/GoogleKeepCloneContext"
import { FiCheck } from "react-icons/fi"


const ShowTasks = () => {

    const { showTasks, setPinnedTasks, setShowTasks} = useContext(GoogleKeepCloneContext)

    const [hoverOnElement, setHoverOnElement] = useState<number | undefined>(undefined)

    const handleHoverElements = (index: number) => {
        setHoverOnElement(index)
    }

    const addToPinned = (id: number) => {
        const pinnedNote = showTasks.filter((pinned_note) => pinned_note.id === id)
        pinnedNote[0].pinned = true
        const pinned = showTasks.filter((pinned) => pinned.id !== id)
        setPinnedTasks((prev) => [...prev, pinnedNote[0]])
        
        setShowTasks(pinned)
    }
    return (
        <>
         <h6 className="uppercase tracking-wide text-sm font-semibold text-left">Notes</h6>
        <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-4">
           
            {showTasks.map((task, index) => {
                return (
                    <div className="px-3 py-7 rounded-md h-auto w-60 border hover:border-[2px] border-gray-300 space-y-3 hover:shadow-md hover:transition" key={`${index}-GoogleKeepId`} onMouseEnter={() => handleHoverElements(index)} onMouseLeave={() => {
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
                                <h4 className="font-semibold tracking-tight text-md">{task.title}</h4>
                            </div>
                            <div className="h-7">
                                {hoverOnElement === index && (
                                    <div onClick={() => addToPinned(task.id)}>
                                        <HoverStyle height="h-7" width="w-7">
                                            {IconsStyles3.icon}
                                        </HoverStyle>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="font-normal text-justify space-y-3 select-none">
                            {task.note.split("\n").map((note: string, index: number) => {
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

                )
            })}
        </div >
        </>
    )

}

export default ShowTasks