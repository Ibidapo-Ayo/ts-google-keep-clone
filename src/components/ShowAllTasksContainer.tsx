/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from "react"
import { GoogleKeepCloneContext } from "../context/GoogleKeepCloneContext"
import { FiCheck } from "react-icons/fi"
import Button from "./Button"
import { PinIcon } from "lucide-react"
import IconButtons from "./IconButtons"
import ShowList from "../layout/main/components/ShowList"
import { ShowTasksProps } from "../props/AddTasksProps"


export const highlightText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? <span key={index} className="bg-amber-300">{part}</span> : part
    );
};

const ShowAllTasksContainer = ({ task, index, updateTask }: ShowTasksProps) => {

    const { selectedTask, search } = useContext(GoogleKeepCloneContext)
    const [searchPrompt] = search

    const [hoverOnElement, setHoverOnElement] = useState<number | undefined>(undefined)

    const [selectedTasks, setSelectedTasks] = selectedTask

    const handleHoverElements = (index: number) => {
        setHoverOnElement(index)
    }

    

    return (
        <div className="inline-grid grid-equals ml-3">
            <div className={`relative px-2 py-1 pb-4 rounded-md w-64 border hover:border hover:border-gray-300  space-y-3 hover:shadow-xl hover:transition flex flex-col justify-between ${selectedTasks.some((id) => task.id === id) ? "border-secondary-dark border-[2px]" : ""}`} key={`${index}-GoogleKeepId`} onMouseEnter={() => handleHoverElements(index)} onMouseLeave={() => {
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
                        <FiCheck className="text-white text-md font-bold w-4 " />
                    </div>

                    <div className="w-60 grid grid-cols-[1fr,35px] items-center">
                        <h4 className="text-wrap font-semibold tracking-tight text-md">{highlightText(task.title, searchPrompt)}</h4>
                        <div className="h-7">
                            {hoverOnElement === index && (
                                <Button variant={task.pinned ? "focus" : "ghost"} size="icon3" className={`${hoverOnElement === index ? "block" : "hidden"} grid items-center justify-center`} onClick={() => updateTask(task.id, task.pinned)}>
                                    <PinIcon className="w-4" />
                                </Button>

                            )}
                        </div>
                    </div>
                    <div className="font-normal text-justify space-y-3 select-none">
                        {task.isAList ? (
                            <ShowList task={task} highlightText={highlightText} />
                        ) : (
                            task.note.split("\n").map((note: string, _index: number) => {
                                return (
                                    note && highlightText(task.note, searchPrompt)
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
        </div>
    )

}

export default ShowAllTasksContainer