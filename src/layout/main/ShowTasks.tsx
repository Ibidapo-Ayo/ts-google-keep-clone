/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from "react"
import { GoogleKeepCloneContext } from "../../context/GoogleKeepCloneContext"
import { FiCheck } from "react-icons/fi"
import Button from "../../components/Button"
import { PinIcon } from "lucide-react"
import IconButtons from "../../components/ui/IconButtons"
import ShowList from "./components/ShowList"


const ShowTasks = () => {

    const { showTasks, setPinnedTasks, setShowTasks, selectedTask } = useContext(GoogleKeepCloneContext)

    const [hoverOnElement, setHoverOnElement] = useState<number | undefined>(undefined)

    const [selectedTasks, setSelectedTasks] = selectedTask

    const handleHoverElements = (index: number) => {
        setHoverOnElement(index)
    }

    const updateTasks = (id: number) => {
        const updatedTasks = showTasks.map((item) => {
            if (item.id === id) {
                return { ...item, pinned: true }
            }
            return item
        })
        setShowTasks(updatedTasks)
    }
    return (
        <>
            <h6 className="uppercase tracking-wide text-sm font-semibold text-left">Notes</h6>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2">
                {showTasks.filter((task) => !task.pinned).length === 0 ? (
                    <p>No added tasks</p>
                ) : (
                    showTasks.filter((tasks) => !tasks.pinned).sort((a, b) => b.id - a.id).map((task, index) => {
                        return (
                            <div className={`relative px-2 py-1 pb-4 rounded-md min-h-[60px] w-64 border hover:border-2 hover:border-black  space-y-3 hover:shadow-md hover:transition flex flex-col justify-between ${selectedTasks.some((id) => task.id === id) ? "border-secondary-dark border-[2px]" : ""}`} key={`${index}-GoogleKeepId`} onMouseEnter={() => handleHoverElements(index)} onMouseLeave={() => {
                                setHoverOnElement(undefined)
                            }}
                            >
                                <div className="space-y-3">
                                    <div className={`${hoverOnElement === index || selectedTasks.some((id) => task.id === id) ? "block" : "hidden"} absolute rounded-full bg-black -top-2 -left-2 px-1 py-1 cursor-pointer`}
                                        onClick={() => {
                                            if (selectedTasks.some((id) => id === task.id)) {
                                                const filteredSelectedTasks = selectedTasks.filter((task_id) => task_id !== task.id)
                                                setSelectedTasks(filteredSelectedTasks)
                                                return
                                            }

                                            setSelectedTasks((prev) => [...prev, task.id])
                                        }}
                                    >
                                        <FiCheck className="text-white text-md font-bold " />
                                    </div>

                                    <div className="w-60 grid grid-cols-[1fr,35px] items-center">
                                        <h4 className="text-wrap font-semibold tracking-tight text-md">{task.title}</h4>
                                        <div className="h-7">
                                            {hoverOnElement === index && (
                                                <Button variant="ghost" size="icon3" className={`${hoverOnElement === index ? "block" : "hidden"} grid items-center justify-center`} onClick={() => updateTasks(task.id)}>
                                                    <PinIcon className="w-4" />
                                                </Button>

                                            )}
                                        </div>
                                    </div>
                                    <div className="font-normal text-justify space-y-3 select-none">
                                        {task.isAList ? (
                                            <ShowList task={task} />
                                        ) : (
                                            task.note.split("\n").map((note: string, index: number) => {
                                                return (
                                                    note && <p key={index}>{note}</p>
                                                )
                                            })
                                        )}
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    {task.collaborator.map((_collaborator) => {
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

                        )
                    })
                )}
            </div >
        </>
    )

}

export default ShowTasks