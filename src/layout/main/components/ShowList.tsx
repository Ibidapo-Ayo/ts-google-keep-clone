/* eslint-disable @typescript-eslint/no-explicit-any */
import { Square } from 'lucide-react'
import { useContext } from 'react';
import { GoogleKeepCloneContext } from '../../../context/GoogleKeepCloneContext';
import { highlightText } from '../../../components/ShowAllTasksContainer';

type ListProps = {id: number; text: string; completed:boolean}

const ShowList = ({task}: any) => {
    const { search } = useContext(GoogleKeepCloneContext)
    const [searchPrompt] = search
    return (
            task.listValue.map((list: ListProps, index:number) => {
                return (
                    <div className="flex space-x-2" key={index}>
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
                            <p className={`${list.completed ? "line-through" : ""}`}>{highlightText(list.text, searchPrompt)}</p>
                        </div>
                    </div>
                )
            })
    )
}

export default ShowList