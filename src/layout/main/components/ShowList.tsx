/* eslint-disable @typescript-eslint/no-explicit-any */
import { Square } from 'lucide-react'

type ListProps = {id: number; text: string; completed:boolean}

const ShowList = ({task}: any) => {
    return (
            task.listValue.map((list: ListProps) => {
                return (
                    <div className="flex space-x-2" key={list.id}>
                        <div>
                            {!list.completed ? (
                                <Square className="w-4 cursor-pointer" onClick={() => {
                                    const toCompleteTask = task.listValue.filter((value:ListProps) => value.id === list.id)
                                    toCompleteTask[0].completed = true
                                }} />
                            ) : (
                                <Square className="w-4 cursor-pointer" onClick={() => {
                                    const toUnCompleteTask = task.listValue.filter((value:ListProps) => value.id === list.id)
                                    toUnCompleteTask[0].completed = false
                                }} />
                            )}
                        </div>
                        <div>
                            <p className={`${list.completed ? "line-through" : ""}`}>{list.text}</p>
                        </div>
                    </div>
                )
            })
    )
}

export default ShowList